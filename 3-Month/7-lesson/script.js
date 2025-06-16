let elheading = document.querySelector(".js-heading")

const elForm = document.querySelector('.js-form');
const elUsername = elForm.querySelector('.js-username');
const elEmail = elForm.querySelector('.js-email');
const elPassword = elForm.querySelector('.js-password')

elForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    // try{
    //     let username = elUsername.value;
    //     let email = elEmail.value;
    //     let password = elPassword.value;

    //     if (!username) throw new Error("is not username !");
    //     if (!email) throw new Error("is not Email !");
    //     let isemail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    //     if (isemail.test(email)) throw new Error("The email value is incorrect");
    //     if (!password) throw new Error("is not passeord !");
    //     let user = {
    //         elUsername: elUsername.value,
    //         elEmail: elEmail.value,
    //         elPassword: elPassword
    //     }
    //     console.log(user)
    // }catch(err){
    //     return alert(err.message)
    // }
        
    
})

