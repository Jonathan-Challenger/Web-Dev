<template>
    <div class="footer-container">
        <div class="socials">
            <a href="https://github.com/Jonathan-Challenger" target="_blank">
                <img src="../assets/github.png" alt="Github Logo">
            </a>
            <a href="https://www.linkedin.com/in/jonathan-challenger-448a701b3/" target="_blank">
                <img id="linkedin" src="../assets/linkedin.png" alt="LinkedIn Logo">
            </a>
        </div>
        <p> &#169; Copyright 2021 by Jonathan Challenger</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer-container {
    background-color: #BD1616;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 10px 10px 0 0;
}

p {
    color: black;
    font-size: 14px;
}

img {
    height: 40px;
    width: 40px;
    margin-left: 20px;
}

#linkedin {
    width: 60px;
}
</style>