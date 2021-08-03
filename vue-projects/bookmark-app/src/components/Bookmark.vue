<template>
    <div class="bookmark">
        <h3>{{ bookmark.name }}</h3>
        <a class="button visit" target="_blank" :href="bookmark.url">Visit</a>
        <button @click="onDelete(bookmark.id)" type="button" class="button remove">Remove</button>
    </div>
</template>

<script>
export default {
    name: 'Bookmark',
    props: {
        bookmark: Object,
    },
    methods: {
        onDelete(id) {
            this.$emit('delete-fav', id)
        },
    }
}
</script>

<style scoped>

.bookmark {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    background-color: var(--border);
    min-height: 50px;
    padding: 3px 7px;
    align-items: center;
    border-radius: 5px;
    color: var(--lghtblue);
    font-size: 1.5rem;
    overflow:auto;
    box-shadow: 2px -2px rgba(0, 0, 0, 0.5);
    transition: 500ms ease;
}

.bookmark:hover {
    transform: scale(1.05);
    box-shadow: 4px -4px rgba(0, 0, 0, 0.5);
}

.button {
    cursor: pointer;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: white;
    transition: 500ms;
}

.visit {
    background-color: var(--lghtblue);
    text-align: center;
    font-size: 1.2rem;
    text-decoration: none;
}

.remove {
    background-color: red;
}

.visit:hover {
    transform: scale(1.1);
}

.remove:hover {
    transform: scale(1.1);
}

</style>