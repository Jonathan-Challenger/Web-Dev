<template>
    <div class="container mt-4" style="width: 800px">
        <h3>Add Note</h3>
        <form>
            <div class="form-group">
                <input type="text" placeholder="Title" name="title" v-model="title" class="form-control">
            </div>
            <div class="form-group my-3">
                <textarea class="form-control" aria-label="With textarea" rows="10" style="resize:none;"></textarea>
            </div>
            <div class="form-group d-flex justify-content-center">
                <input type="submit" class="btn btn-primary mx-3" value="Save" style="width:150px"/>
                <input type="submit" class="btn btn-danger mx-3" value="Cancel" style="width:150px"/>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddNote'
}
</script>

<style>

</style>