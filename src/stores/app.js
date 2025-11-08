import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useAppStore = defineStore('app', {
  state: () => ({
    isloading: false,
    error: null,
    amiibo: [],
    searchQuery: '',
    favorites: [], // Liste des favoris
    sortKey: '', // clé de tri ("gameSeries", "release")
    sortRegion: 'na', // région pour la date
    filter: 'all', // pour gérer "tous" ou "favoris"
  }),

  getters: {
    getamiibo: state => state.amiibo,
    hasAmiibo: state => state.amiibo.length > 0,
    getAmiiboByID: state => id => state.amiibo.filter(a => a.id === id),

    filteredAmiibo: state => {
      let list = [...state.amiibo]

      const query = state.searchQuery.toLowerCase().trim()
      if (query) {
        list = list.filter(
          a =>
            a.name.toLowerCase().includes(query) ||
            a.gameSeries.toLowerCase().includes(query),
        )
      }

      // Filtre favoris
      if (state.filter === 'favorites') {
        list = list.filter(a => state.favorites.includes(a.tail))
      }

      // Tri avec sortKey
      if (state.sortKey === 'gameSeries') {
        list.sort((a, b) => a.gameSeries.localeCompare(b.gameSeries))
      } else if (state.sortKey === 'release') {
        list.sort((a, b) => {
          const da = a.release?.[state.sortRegion] || ''
          const db = b.release?.[state.sortRegion] || ''
          return da.localeCompare(db)
        })
      }

      return list
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

    // Favoris persistants
    toggleFavorite(tail) {
      const index = this.favorites.indexOf(tail)
      if (index === -1) {
        this.favorites.push(tail)
      } else {
        this.favorites.splice(index, 1)
      }

      // Sauvegarde locale
      localStorage.setItem('amiiboFavorites', JSON.stringify(this.favorites))
    },

    isFavorite(tail) {
      return this.favorites.includes(tail)
    },

    // Restaure les favoris sauvegardés
    loadFavorites () {
      const saved = localStorage.getItem('amiiboFavorites')
      if (saved) {
        try {
          this.favorites = JSON.parse(saved)
        } catch (e) {
          console.warn('Erreur de parsing des favoris', e)
        }
      }
    },

    async init () {
      // Charger les favoris avant les données
      this.loadFavorites()
      await this.fetchAmiibo()
    },
  },
})
