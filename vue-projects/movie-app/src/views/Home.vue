<template>
    <ContentBox :movies="movies"/>
</template>

<script>
import ContentBox from '../components/content-boxes/ContentBox.vue'

export default {
    name: 'Home',
    components: {
        ContentBox,
    },
    props: {
        movies: Array,
    }
}
</script>