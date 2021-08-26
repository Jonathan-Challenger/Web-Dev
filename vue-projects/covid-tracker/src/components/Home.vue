<template>
  <main v-if="!loading">
    Show Data
  </main>

  <main v-else>
    <div class="loading-content">
      Fetching Data
      <img :src="loadingImg" alt="Loading Img">
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImg: require('../assets/loading-buffering.gif')
    }
  },
  methods: {
    async getData() {
      const res = await fetch("https://api.covid19api.com/summary")

      const data = await res.json()

      return data
    }
  },
  async created () {
    const data =  await this.getData()
    
    this.dataDate = data.Date
    this.stats = data.Global
    this.countries = data.Countries
    this.loading = false
  }
}
</script>

<style scoped lang="scss">
$primary: rgb(67, 102, 255);

.loading-content {
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  justify-content: center;
  color: $primary;
  font-size: 2rem;

  img {
    margin-top: 50px;
    height: 100px;
    width: 100px;
  }
}
</style>
