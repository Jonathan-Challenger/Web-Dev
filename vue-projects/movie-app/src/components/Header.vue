<template>
    <div class="container">
        <img id="logo" src="../assets/blackbox-logo.png" alt="BlackBox Logo">
        <div class="nav-container">
            <ul>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Upcoming</li>
            </ul>
        </div>
        <div class="search-container">
            <img id="search-icon" src="../assets/search.png" alt="Search icon">
            <input type="text" name="search-box" id="search-box" placeholder="Search BlackBox">
            <img id="cross-icon" src="../assets/cross2.png" alt="Cross Icon">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
.container {
    background-color: #BD1616;
    height: 100px;
    border-radius: 0 0 20px 20px;
    display: flex;
    align-items: center;
    padding: 0 70px;
    justify-content: space-between;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

li {
    margin: 0 60px;
    color: rgba(0, 0, 0, 0.80);
    font-size: 1.2rem;
    cursor: pointer;
}

img {
    cursor: pointer;
}

.search-container {
    width: 25%;
    position: relative;
}

#search-box {
    width: 100%;
    padding: 0 15px;
    padding-left: 60px;
    font-size: 1.2rem;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

#search-box:focus {
    outline:none;
}

#search-box::placeholder {
    font-size: 1.2rem;
}

#search-icon {
    height: 40px;
    width: 40px;
    position: absolute;
    z-index: 1;
    bottom: 8%;
    left: 3%;
}

#cross-icon {
    height: 25px;
    width: 25px;
    position: absolute;
    bottom: 24%;
    right: 4%;
    transition: transform 500ms;
}
</style>