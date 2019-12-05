const regis_name = document.querySelector('#name')
const regis_email = document.querySelector('#Gmail')
const regis_mob_no = document.querySelector('#number')
const regis_pwd = document.querySelector('#pswd')

$("#cancel").click(function (e) {
    e.preventDefault();
    regis_pwd.value = null
    regis_name.value = null
    regis_email.value = null
    regis_mob_no.value = null

});


// $("#login").click(function (e) {
//     e.preventDefault();
//     login_pwd.value =
//         login_gmail.value = 
// });