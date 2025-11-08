import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useAppStore = defineStore('app', {
  state: () => ({
    isloading: false,
    error: null,
    amiibo: [],
  }),

  getters: {
    getamiibo: state => state.amiibo,
    hasAmiibo: state => state.amiibo.length > 0,
    getAmiiboByID: state => id => state.amiibo.filter(Amii => Amii.id === id),
  },

  actions: {
    async fetchAmiibo () {
      try {
        this.isloading = true
        const response = await api.get('amiibo/')
        this.amiibo = response.data.amiibo
        // console.log(response.data)
        console.log(this.amiibo)
        this.isloading = false
        return this.amiibo
      } catch (error) {
        this.error = error
        this.isloading = false
        return []
      }
    },
    // Appel au fishier
    async fetchAmiiboJSON () {
      this.error = null
      try {
        const response = await fetch('src/data/Amiibo.json')
        const data = await response.json()
        let AmiiboArray = []
        if (Array.isArray(data)) {
          AmiiboArray = data
        } else if (data && Array.isArray(data.results)) {
          AmiiboArray = data.results
        } else {
          AmiiboArray = data
        }
        this.Amiibo = AmiiboArray
        console.log('Amiibo chargés depuis le JSON :', this.Amiibo)
      } catch (error) {
        this.error = error
        console.log('Erreur fetchAmiiboJSON :', error)
      }
    },
    async init () {
      await this.fetchAmiibo()
      await this.fetchAmiiboJSON()
    },
  },
})
