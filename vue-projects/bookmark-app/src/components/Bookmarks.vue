<template>
    <div class="bookmark-container">
        <div :key="bookmark.id" v-for="bookmark in bookmarks">
            {{bookmark.name}}
        </div>
    </div>
</template> 

<script>
// import Bookmark from './Bookmark.vue'


export default {
    name: 'Bookmarks',
    props: {
        bookmarks: Array,
    },
   /*  components: {
        Bookmark,
    } */
}
</script> 