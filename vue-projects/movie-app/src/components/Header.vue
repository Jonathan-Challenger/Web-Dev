<template>
    <div class="container">
        <router-link to="/"><img @click="$emit('go-home')" id="logo" src="../assets/blackbox-logo.png" alt="BlackBox Logo"></router-link>
        <div class="toggle-button">
            <img @click="toggleSearch()" src="../assets/search.png" alt="Search Icon">
            <img @click="toggleActive()" src="../assets/bars-solid.svg" alt="Nav Bars">
        </div>
        <div :class="{active : isActive}" class="nav-container">
            <ul>
                <li @click="activeOffMov()"><router-link to='/' class="route-link">Movies</router-link></li>
                <li @click="activeOffTV()"><router-link to='/tvshows' class="route-link">TV Shows</router-link></li>
                <li @click="activeOffUp()"><router-link to='/upcoming' class="route-link">Upcoming</router-link></li>
            </ul>
        </div>
        <div :class="{search: isSearch}" class="search-container">
            <form @submit="onSubmit" class="search-form">
                <img @click="onSubmit" id="search-icon" src="../assets/search.png" alt="Search icon">
                <input 
                v-model="query" 
                type="text" 
                name="search-box" 
                id="search-box" 
                placeholder="Search BlackBox" 
                autocomplete="off">
                <img @click="removeText()" id="cross-icon" src="../assets/cross2.png" alt="Cross Icon">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isActive: false,
            isSearch: false,
            query: '',
        }
    },
    methods: {
        toggleActive: function() {
            if (this.isSearch) {
                this.isSearch = !this.isSearch
                this.isActive = !this.isActive
            } else {
                this.isActive = !this.isActive
            }
        },
        activeOffMov() {
            this.isActive = false
            this.$router.push('/')
        },
        activeOffTV() {
            this.isActive = false
            this.$router.push('/tvshows')
        },
        activeOffUp() {
            this.isActive = false
            this.$router.push('/upcoming')
        },
        removeText: function() {
            const searchbox = document.getElementById('search-box')
            searchbox.value = ''
            searchbox.focus()
        },
        toggleSearch: function() {
            if (this.isActive) {
                this.isActive = !this.isActive
                this.isSearch = !this.isSearch
            } else {
                this.isSearch = !this.isSearch
            }    
        },
        async onSubmit(e) {
            this.isSearch = false
            
            e.preventDefault()
            if(!this.query) {
                alert("Please add a movie to search for...")
                return
            }
            
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=8b6426ed2bb28ce20b1467f0c9e172be&language=en-US&query=${this.query}&include_adult=false`)

            const res = await response.json()
            const data = res.results
            
            this.$emit('get-results', data)

            this.$router.push("/results")

            this.query = ''
        }
    },
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
    color: rgba(0, 0, 0, 0.60);
    font-size: 1.2rem;
    cursor: pointer;
}

.route-link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.60);
}

.route-link:hover {
    color: rgba(0, 0, 0, 0.90);
}

li:hover {
    color: rgba(0, 0, 0, 0.90);
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

#cross-icon:hover {
    transform: rotateZ(90deg);
}

.toggle-button {
    display: none;
    flex-direction: row;
    justify-content: space-between;
    width: 125px;
    height: 36px;
    cursor: pointer;
}

@media (max-width: 1300px) {
    .container {
        padding: 0 30px;
    }

    #logo {
        height: 40px;
        width: 260px;
    }

    li {
        margin: 0 30px;
    }

    #search-box {
        padding: 0 10px;
    }

    #search-icon {
        display: none;
    }
}

@media (max-width: 1000px) {
    .container {
        padding: 0 10px;
    }

    #logo {
        height: 30px;
        width: 210px;
    }
}

@media (max-width: 850px) {
    .container {
        position: relative;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 0;
    }

    #logo {
        height: 40px;
        width: 260px;
        position: absolute;
        left: 1rem;
        top: 1.5rem;
    }

    .search-container {
        display: none;
        width: 100%;
        position: absolute;
        top:5rem;
    }

    .nav-container {
        display: none;
        width: 100%;
        position: absolute;
        top: 5.5rem;
    }

    .toggle-button {
        position: absolute;
        right: 1rem;  
        top: 2rem;  
        display:flex;
    }

    ul {
        flex-direction: column;
        width: 100%;
    }

    li {
        text-align: center;
        padding: 10px 0;
        background-color: #BD1616;
        border: 1px solid rgba(0, 0, 0, 0.5);
        margin: 0;
    }

    li:hover {
        background-color:#a11414;
    }

    .nav-container.active {
        display: flex;
        z-index: 1;
    }

    .search-container.search {
        display: inline-block;
    }

    #search-box {
        border-radius:0 0 10px 10px;
    }

}
</style>