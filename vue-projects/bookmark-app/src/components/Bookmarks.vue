<template>
    <div class="bookmark-container">
        <div :key="bookmark.id" v-for="bookmark in bookmarks">
            <Bookmark @delete-fav="$emit('delete-fav', bookmark.id)" :bookmark="bookmark"/>
        </div>
    </div>
</template> 

<script>
import Bookmark from './Bookmark.vue'

export default {
    name: 'Bookmarks',
    props: {
        bookmarks: Array,
    },
    components: {
        Bookmark,
    }
}
</script> 

<style scoped>
.bookmark-container{
    width: 75%;
    margin: auto;
}
</style>