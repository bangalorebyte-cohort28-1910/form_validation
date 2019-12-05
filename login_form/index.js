const login_gmail = document.querySelector('#gmail')
const login_pwd = document.querySelector('#pwd')

$("#cancel").click(function (e) {
    e.preventDefault();
    login_gmail.value = null
    login_pwd.value = null

});


// $("#login").click(function (e) {
//     e.preventDefault();
//     login_pwd.value =
//         login_gmail.value = 
// });