// let userName = prompt("Ismingizni kiriting:")
// let userdollar = prompt("Yonizda necha so'm pul bor:")

// let eltitle = document.querySelector('h1');

// if (userdollar >= 15600){
//     eltitle.textContent = `Oq yo'l, ${userName}
// }


let userName = prompt('Ismingizni kiriting!:');
let userdollar = prompt("Yonizda necha so'm pul bor:")

let eltitle = document.querySelector('.title');

if (userdollar >= 15600) {
    eltitle.textContent = `Oq yo'l, ${userName}`
}else{
    eltitle.textContent = `ozgina sabr qilish kerak ekan, ${userName}`
}