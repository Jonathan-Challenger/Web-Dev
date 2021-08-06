const gen = document.getElementById('gen-but');
const output = document.getElementById('input-box');
const msg = document.getElementsByClassName('hidden')[0];
const len = document.getElementById('length-box');

createPassword = () => {
    let res = ''
    let letts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let specials = '0123456789!@-_?%'
    let letLens = Math.floor(len.value * 0.7)
    let specLens = Math.ceil(len.value * 0.3)
    if (len.value == '') {
        alert("Please enter a length for your password")
    }

    for (let i = 0; i < letLens; i++) {
        res += letts.charAt(Math.floor(Math.random() * letts.length))
    }
    for (let i = 0; i < specLens; i++) {
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