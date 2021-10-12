<template>
    <div class="container mt-4" style="width: 800px">
        <h3>Add Note</h3>
        <form>
            <div class="form-group">
                <input type="text" placeholder="Title" name="title" v-model="title" class="form-control">
            </div>
            <div class="form-group my-3">
                <textarea class="form-control" aria-label="With textarea" rows="10" style="resize:none;" v-model="body"></textarea>
            </div>
            <div class="input-field">
                <label for="status" class="px-3">Status</label>
                <select id="status" name="status" v-model="status">
                    <option value="public" selected>Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
            <div class="form-group d-flex justify-content-center">
                <input @click.prevent="testPost()" type="submit" class="btn btn-primary mx-3" value="Save" style="width:150px"/>
                <input type="submit" class="btn btn-danger mx-3" value="Cancel" style="width:150px"/>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'

export default {
    name: 'AddNote',
    data() {
        return {
            title: "",
            body: "",
            status: "",
        }
    },
    methods: {
        ...mapActions(['getProfile']),
        async testPost() {
            let note = {
                title: this.title,
                body: this.body,
                status: this.status
            }
            let res = await axios.post("http://localhost:5000/api/notes", note);
            return res.data;

        }
    }
}
</script>

<style>

</style>