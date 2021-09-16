
// create form querySelectors 

let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let button = document.querySelector('.btn');
let form = document.querySelector('form')

// error query selectors 
let f_error = document.querySelector('p.f-error');
let l_error = document.querySelector('p.l-error');
let e_error = document.querySelector('p.e-error');
let p_error = document.querySelector('p.p-error');


// validate email function 

const validEmail = function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// button even listeners 

button.addEventListener('click', (e)=>{

    if(fname.value == ''){
        fname.classList.add('error')
        f_error.style.display = 'block'
    } else{
        fname.classList.remove('error')
        f_error.style.display = 'none'
    }

    if(lname.value == ''){
        lname.classList.add('error')
        l_error.style.display = 'block'
    } else{
        lname.classList.remove('error')
        l_error.style.display = 'none'
    }

    if(!email.value.match(validEmail)){
        e_error.style.display = 'block'
        email.classList.add('error')
    } else{
        e_error.style.display = 'none'
        email.classList.remove('error')
    }

    if(password.value == ''){
        password.classList.add('error')
        p_error.style.display = 'block'
    } else{
        password.classList.remove('error')
        p_error.style.display = 'none'
    }
    e.preventDefault();
});