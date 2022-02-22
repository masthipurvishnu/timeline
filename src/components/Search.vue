<template>
        <v-text-field
            rounded
            prepend-inner-icon="mdi-magnify"
            style="border: 0px solid red; width:200px"
            v-model="model"
            >
        </v-text-field>
</template>

<script>

export default {
  name: 'Search',
data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: ['vishnu', 'anay'],
    search: null,
  }),
  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a',
        }
      })
    },
    items () {
      return this.entries.map(entry => {
        const Description = entry.Description.length > this.descriptionLimit
          ? entry.Description.slice(0, this.descriptionLimit) + '...'
          : entry.Description

        return Object.assign({}, entry, { Description })
      })
    },
  },
  watch: {
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.publicapis.org/entries')
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res
          this.count = count
          this.entries = entries
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  }
}
</script>
