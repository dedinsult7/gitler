// let a= prompt("nechi yosh siz")

// if(a>10){alert('siz kotta bola ekansiz')}
// else if(a=10){alert('barbir yoush bola ekansiz')}
// else{alert('yoush b)ola ekansiz')}

let a = prompt('raqam kiriting')

if  (a % 15 == 0 && a % 5 == 0) {
    alert('bu son fuzzbuzz');
}
else if (a % 5 == 0) {
    alert('bu son buzz');
}
else if(a % 3 == 0) {
    alert( 'bu son fuzz');
}
else{
    alert('bu oddiy son')
}