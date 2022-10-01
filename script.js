document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

function fun1() {
  let number = document.getElementById('number').textContent;
  navigator.clipboard.writeText(number);
  let x = document.getElementById('btn');
  x.innerHTML = "Number Copied!!";
  x.style.background = "green";
}


let btn = document.getElementById('clickbtn');
btn.addEventListener("click", fun)
function fun() {
   
   let name = document.getElementById("name").value;
   let table = document.getElementById("number1").value;
   let quntity = document.getElementById("destination").value;
   let halffull = document.getElementById("seats").value;
   let date = document.getElementById("date").value;
   
   let msg = 
    `Hiii Dipak my name is *${name}*%0a mobile number *${table}*%0a i book your car for *${quntity}* date *${date}* i have total *${halffull}* seats%0a Thank You....`;

    let url = 'https://wa.me/918149266461?text='+msg;
    window.open(url,'_blank').focus();
}


