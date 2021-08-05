const gen = document.getElementById('gen-but');
const output = document.getElementById('input-box');
const msg = document.getElementsByClassName('hidden')[0];

createPassword = () => {
    let res = ''
    let letts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let specials = '0123456789!@-_?%'
    for (let i = 0; i < 6; i++) {
        res += letts.charAt(Math.floor(Math.random() * letts.length))
    }
    for (let i = 0; i < 5; i++) {
        res += specials.charAt(Math.floor(Math.random() * specials.length))
    }
    return res
}

copyPassword = () => {
    output.select()
    document.execCommand('Copy')
    alert("Copied to Clipboard!")
}

gen.addEventListener('click', () => {
    output.value = createPassword();
})