let a = document.querySelector(".sub1");
let b = document.querySelector(".sub2");
let c = document.querySelector(".sub3")
a.addEventListener('click',function () {
    window.location.href = 'http://127.0.0.1:5501/Index.html';
})  

b.addEventListener('click',function () {
    window.location.href = 'http://127.0.0.1:5501/Formopen.html';
})
c.addEventListener('click',function () {
    window.location.href = 'http://127.0.0.1:5501/Formsubmit.html';
})