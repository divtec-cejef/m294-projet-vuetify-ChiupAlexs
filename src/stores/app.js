// Utilities
import { defineStore } from 'pinia'
import {id} from "vuetify/locale";

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    isloading: false, // indique si une opération de chargement est en cours
    error: null, // Stocke les message d'erreur
    amiibo: [], // Tableau d'amiibo
  }),

  getters: {
    //Declaration des getters
    getamiibo: (state) => state.amiibo,
    hasAmiibo: (state) => state.amiibo.length > 0,
    getAmiiboByID: (state) => state.amiibo.filter((amiibo) => amiibo.id === id),
  },

  actions: {
    async fetchAmiibo() {
      try {
        const response = api.get('')
        return response.data
      } catch (error) {
        return error
      }
    }
  }
  // récupère donner au démarrage
  async init {
    this.amiibo = await this fetchAmiibo()
  }
})
