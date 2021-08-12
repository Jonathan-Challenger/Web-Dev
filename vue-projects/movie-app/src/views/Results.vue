<template>
    <ContentResults :results="results"/>
</template>

<script>
import ContentResults from '../components/content-boxes/ContentResults.vue'

export default {
    name: 'Results',
    components: {
        ContentResults,
    },
    props: {
        results: Array,
    }
    
}
</script>