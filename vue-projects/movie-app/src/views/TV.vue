<template>
    <ContentTV  :shows="shows"/>
</template>

<script>
import ContentTV from '../components/content-boxes/ContentTV.vue'

export default {
    name: 'TV',
    components: {
        ContentTV,
    },
    props: {
        shows: Array,
    }
    
}
</script>