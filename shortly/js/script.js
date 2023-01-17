const input = document.getElementById('link-input')
const form = document.getElementById('link-form')
const err = document.getElementById('err-msg')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')



function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
}

const navToggle = e =>{
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

const formSubmit = e =>{
    e.preventDefault()

    if(input.value == ''){
        err.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    }else if (!validURL(input.value)){
        err.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red')
    }else{
        err.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}

btn.addEventListener('click',navToggle);

form.addEventListener('submit', formSubmit)