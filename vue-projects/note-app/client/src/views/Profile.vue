<template>
    <div class="container">
        <h2 class="text-center my-4">Profile Page</h2>
        <div class="card" style="width:100%;">
            <ul class="list-group">
                <li class="list-group-item">Name: {{ user.name }}</li>
                <li class="list-group-item">Email: {{ user.email }}</li>
            </ul>
        </div>
        <div class="form-group d-flex justify-content-center">
            <input @click="showAddTask = !showAddTask" type="button" class="btn btn-primary my-3" value="Add Note" style="width:150px"/>
        </div>
        <AddNote v-if="showAddTask" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddNote from '../components/AddNote.vue'

export default {
    components: {
        AddNote
    },
    data() {
        return {
            showAddTask: false
        }
    },
    computed: mapGetters(['user']),
    methods: {
        ...mapActions(['getProfile'])
    },
    created() {
        this.getProfile()
    }
}
</script>
