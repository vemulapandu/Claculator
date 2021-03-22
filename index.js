let his = document.querySelector('.his');
let res = document.querySelector('.res');
let num = '';
let hi = '';
function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
let zero = document.querySelector('.zero');
zero.addEventListener('click',()=>{
    num+='0';
    let d = addCommas(num);
    res.innerHTML = d;
});
let one = document.querySelector('.one');
one.addEventListener('click',()=>{
    num+='1';
    let d = addCommas(num);
    res.innerHTML = d;
});
let two = document.querySelector('.two');
two.addEventListener('click',()=>{
    num+='2';
    let d = addCommas(num);
    res.innerHTML = d;
});
let three = document.querySelector('.three');
three.addEventListener('click',()=>{
    num+='3';
    let d = addCommas(num);
    res.innerHTML = d;
});
let four = document.querySelector('.four');
four.addEventListener('click',()=>{
    num+='4';
    let d = addCommas(num);
    res.innerHTML = d;
});
let five = document.querySelector('.five');
five.addEventListener('click',()=>{
    num+='5';
    let d = addCommas(num);
    res.innerHTML = d;
});
let six = document.querySelector('.six');
six.addEventListener('click',()=>{
    num+='6';
    let d = addCommas(num);
    res.innerHTML = d;
});
let seven = document.querySelector('.seven');
seven.addEventListener('click',()=>{
    num+='7';
    let d = addCommas(num);
    res.innerHTML = d;
});
let eight = document.querySelector('.eight');
eight.addEventListener('click',()=>{
    num+='8';
    let d = addCommas(num);
    res.innerHTML = d;
});
let nine = document.querySelector('.nine');
nine.addEventListener('click',()=>{
    num+='9';
    let d = addCommas(num);
    res.innerHTML = d;
});
let clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    num = '';hi = '';
    res.innerHTML = num;
    his.innerHTML = hi;
});
let backspace = document.querySelector('.backspace');
backspace.addEventListener('click',()=>{
    num = num.substring(0,num.length-1);
    let d = addCommas(num);
    res.innerHTML = d;
});
let zzero = document.querySelector('.zzero');
zzero.addEventListener('click',()=>{
    num+='00';
    let d = addCommas(num);
    res.innerHTML = d;
});
let add = document.querySelector('.add');
add.addEventListener('click',()=>{
    hi = num + '+';
    his.innerHTML = hi;
    num = '';
    res.innerHTML = num;
});
let rem = document.querySelector('.rem');
rem.addEventListener('click',()=>{
    hi = num + '%';
    his.innerHTML = hi;
    num = '';
    res.innerHTML = num;
});
let sub = document.querySelector('.sub');
sub.addEventListener('click',()=>{
    hi = num + '-';
    his.innerHTML = hi;
    num = '';
    res.innerHTML = num;
});
let mul = document.querySelector('.mul');
mul.addEventListener('click',()=>{
    hi = num + '*';
    his.innerHTML = hi;
    num = '';
    res.innerHTML = num;
});
let div = document.querySelector('.div');
div.addEventListener('click',()=>{
    hi = num + '/';
    his.innerHTML = hi;
    num = '';
    res.innerHTML = num;
});
let equal = document.querySelector('.equal');
equal.addEventListener('click',()=>{
    let d = hi + num;
    d = eval(d);
    d = addCommas(d);
    hi = '';
    num = '';
    his.innerHTML = hi;
    res.innerHTML = d;
});