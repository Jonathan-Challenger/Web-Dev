<template>
    <div class="bookmark">
        <h3>{{ bookmark.name }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Bookmark',
    props: {
        bookmark: Object,
    },
}
</script>