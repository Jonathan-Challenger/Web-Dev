<template>
  <div class="container">
    <Header />
    <AddBookmark />
    <Bookmarks :bookmarks="bookmarks" />
  </div>
</template>

<script>
import Header from './components/Header'
import AddBookmark from './components/AddBookmark'
import Bookmarks from './components/Bookmarks'
import { uuid } from 'vue-uuid'

export default {
  name: 'App',
  components: {
    Header,
    AddBookmark,
    Bookmarks,
  },
  data() {
    return {
        bookmarks: [],
    }
  },
  created() {
    this.bookmarks = [
      {
        id: uuid.v1(),
        name: 'Google',
        url: 'https://www.google.com/',
      },
      {
        id: uuid.v1(),
        name: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        id: uuid.v1(),
        name: 'Twitter',
        url: 'https://twitter.com/'
      }
    ]
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
