<template>
  <div class="container">
    <Header title="Website Bookmarker"/>
    <AddBookmark @add-fav="addFav" />
    <Bookmarks @delete-fav="deleteFav" :bookmarks="bookmarks" />
  </div>
</template>

<script>
import Header from './components/Header'
import AddBookmark from './components/AddBookmark'
import Bookmarks from './components/Bookmarks'

export default {
  name: 'App',
  components: {
    Header,
    AddBookmark,
    Bookmarks,
  },
  methods: {
    addFav(fav) {
      this.bookmarks = [...this.bookmarks, fav]
    },
    async deleteFav(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`http://localhost:5000/bookmarks/${id}`, {
          method: 'DELETE'
        })

        res.status === 200
        ? (this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id))
        : alert('Error deleting task')
      }
    },
    async fetchFavs() {
      const res = await fetch('http://localhost:5000/bookmarks')

      const data = await res.json()

      return data
    },
    async fetchFav(id) {
      const res = await fetch(`http://localhost:5000/bookmarks/${id}`)

      const data = await res.json()

      return data
    }
  },
  data() {
    return {
        bookmarks: [],
    }
  },
  async created() {
    this.bookmarks = await this.fetchFavs()
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

:root {
  --txtcol: #ffd60a;
  --dktxt: #001d3d;
  --dkblue: #000814;
  --lghtblue: #003566;
  --border: #ffc300;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  background-color: var(--dkblue);
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  max-width: 50vw;
  margin: 30px auto;
  overflow: auto;
  min-height: 400px;
  border-radius: 5px;
  border: 1px solid var(--border);
  padding: 30px;
  background-color: var(--lghtblue);
}
</style>
