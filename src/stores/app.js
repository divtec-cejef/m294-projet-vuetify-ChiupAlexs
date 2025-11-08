import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useAppStore = defineStore('app', {
  state: () => ({
    isloading: false,
    error: null,
    amiibo: [],
    searchQuery: '',
  }),

  getters: {
    getamiibo: state => state.amiibo,
    hasAmiibo: state => state.amiibo.length > 0,
    getAmiiboByID: state => id => state.amiibo.filter(a => a.id === id),

    filteredAmiibo: state => {
      const query = state.searchQuery.toLowerCase().trim()

      if (!query) {
        return state.amiibo
      }

      return state.amiibo.filter(a =>
        a.name.toLowerCase().includes(query)
        || a.gameSeries.toLowerCase().includes(query),
      )
    },
  },

  actions: {
    async fetchAmiibo () {
      try {
        this.isloading = true
        const response = await api.get('amiibo/')
        this.amiibo = response.data.amiibo
        this.isloading = false
        return this.amiibo
      } catch (error) {
        this.error = error
        this.isloading = false
        return []
      }
    },

    /*
    async fetchAmiiboJSON() {
      this.error = null
      try {
        const response = await fetch('/src/data/Amiibo.json')
        const data = await response.json()
        let AmiiboArray = []

        if (Array.isArray(data)) {
          AmiiboArray = data
        } else if (data && Array.isArray(data.results)) {
          AmiiboArray = data.results
        } else {
          AmiiboArray = data
        }

        this.amiibo = AmiiboArray
        console.log('Amiibo chargés depuis le JSON :', this.amiibo)
      } catch (error) {
        this.error = error
        console.log('Erreur fetchAmiiboJSON :', error)
      }
    },
    */

    async init () {
      await this.fetchAmiibo()

      // Fallback JSON si tu veux le remettre un jour:
      // if (!this.amiibo || this.amiibo.length === 0) {
      //   await this.fetchAmiiboJSON()
      // }
    },
  },
})
