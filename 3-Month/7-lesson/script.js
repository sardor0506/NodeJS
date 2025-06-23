// let elheading = document.querySelector(".js-heading")

// const elForm = document.querySelector('.js-form');
// const elUsername = elForm.querySelector('.js-username');
// const elEmail = elForm.querySelector('.js-email');
// const elPassword = elForm.querySelector('.js-password')

// elForm.addEventListener('submit', (evt)=>{
//     evt.preventDefault()
//     try{
//         let username = elUsername.value;
//         let email = elEmail.value;
//         let password = elPassword.value;

//         if (!username) throw new Error("is not username !");
//         if (!email) throw new Error("is not Email !");
//         let isemail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
//         if (isemail.test(email)) throw new Error("The email value is incorrect");
//         if (!password) throw new Error("is not passeord !");
//         let user = {
//             elUsername: elUsername.value,
//             elEmail: elEmail.value,
//             elPassword: elPassword
//         }
//         console.log(user)
//     }catch(err){
//         return alert(err.message)
//     }
    
// })

const elForm = document.querySelector(".js-form");
const elFizzBuzz = elForm.querySelector(".js-fizzbuzz-val")
const elFizzList = document.querySelector(".js-fizz-list")
const elBuzzList = document.querySelector(".js-buzz-list")
const elFizzBuzzList = document.querySelector(".js-fizzbuzz-list")


elForm.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    let value = elFizzBuzz.value;
    try{
        if (!value) throw new Error("is not number");
        value = Number(value)
        elFizzList.textContent = ''
        elBuzzList.textContent = ''
        elFizzBuzzList.textContent = ''
        for (let i=1; i<=value; i++){
            if (i%3==0 && i%5==0){
                let newLi = document.createElement("li")
                newLi.textContent = i
                elFizzBuzzList.append(newLi)
            }if (i%3==0){
                let newLi = document.createElement('li')
                newLi.textContent = i;
                elFizzList.append(newLi)
            } else if(i%5==0){
                let newLi = document.createElement("li")
                newLi.textContent = i
                elBuzzList.appendChild(newLi)
            }
        }
    }catch(err){
        console.log(err.message)
    }
});


