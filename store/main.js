export const useStore = defineStore('main', {
  state: () => ({
    cards: []
  }),

  actions: {
    addCard() {
      const { cards } = this
      const id = cards.length ? cards[cards.length - 1].id + 1 : 1
      this.cards.push({ id, text: 'Новый стикер', priority: 'standard', date: new Date() })
      this.saveInStorage()
    },

    updateCard(id, text, priority) {
      const card = this.cards.find(c => c.id === id)
      if (!card) return
      Object.assign(card, { id, text, priority, date: new Date() })
      this.saveInStorage()
    },

    deleteCard(id) {
      this.cards = this.cards.filter(c => c.id !== id)
      this.saveInStorage()
    },

    saveInStorage() {
      window.localStorage.setItem('cards', JSON.stringify(this.cards))
    },

    loadFromStorage() {
      if (import.meta.client) {
        const cards = localStorage.getItem('cards')
        if (!cards) return
        this.cards = JSON.parse(cards)
      }
    },

    sync() {
      if (import.meta.client) {
        window.addEventListener('storage', (e) => {
          if (e.key !== 'cards') return
          this.loadFromStorage()
        })
      }
    }
  }
})
