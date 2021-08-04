<template>
    <form class = "form" autocomplete="off">
        <div class="input-box">
            <label>Name</label>
            <input type="text" name="text" placeholder="Website name...">
        </div>
        <div class="input-box">
            <label>URL</label>
            <input type="url" name="url" placeholder="Website URL...">
        </div>
        <input type="submit" value="Save" class="save-btn">
    </form>
</template>

<script>
export default {
    name: 'AddBookmark',
}
</script>

<style scoped>
.form {
    margin-bottom: 40px;
    text-align: center;
}

.input-box {
    margin: 20px 0;
    text-align: center;
}

.input-box label {
    display: block;
    color: var(--dktxt);
    font-size: 2rem;
}

.input-box input {
    background-color: var(--dkblue);
    border: none;
    margin: 5px;
    width: 50%;
    height: 40px;
    border-radius: 5px;
    color: var(--txtcol);
    font-size: 1.25rem;
    padding: 3px 7px;
}

.input-box input:focus {
    outline: none;
    background-color: var(--dkblue);
}

.input-box input::placeholder {
    color: rgba(255,214,10, 0.25);
}

.save-btn {
    height: 30px;
    width: 40%;
    border: none;
    border-radius: 5px;
    transition: 500ms ease;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 10px;
    background: var(--dkblue);
    color: rgba(255,214,10, 0.75);
}

.save-btn:hover {
    transform: scale(1.1);
}
</style>