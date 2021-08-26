<template>
  <h1>Hello Home</h1>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async getData() {
      const res = await fetch("https://api.covid19api.com/summary")

      const data = await res.json()

      return data
    }
  },
  async created () {
    const data =  await this.getData()
    console.log(data)
  }
}
</script>

<style scoped lang="scss">
$primary: rgb(67, 102, 255);

h1 {
  font-size: 5rem;
  color: $primary;
}
</style>
