const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const checkUserName = ()=>{
    let valid = false;
    const min = 3;
    const max = 25;
    const username = nameInput.value.trim();
    if (isEmpty(username)){
        showError(nameInput, "El nombre es obligatorio");
    } else if (!isBetween(username.length, min, max)){
        showError(nameInput, `El nombre debe tener entre ${min} y ${max} caracteres`);
    } else {
        showSuccess(nameInput);
        valid =  true;
    }
    return valid;
}

const isEmpty = (value)=> value === "";

const isBetween = (length, min, max)=>{
    return length < min || length > max ? false : true;
}

const showError= (input, message)=>{
    const formfield = input.parentElement;
    formfield.classList.remove("success");
    formfield.classList.add("error");
    const error = formfield.querySelector("small");
    error.textContent = message;
}

const showSuccess= (input)=>{
    const formfield = input.parentElement;
    formfield.classList.remove("error");
    formfield.classList.add("success");
    const error = formfield.querySelector("small");
    error.textContent = "";
}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkUserName();
})