const btn_minus = document.querySelectorAll('.minus');
const lbl_quantity = document.querySelectorAll('.quantity');
const btn_plus = document.querySelectorAll('.plus');
const lbLprice = document.querySelectorAll('.price');
const lblSomme = document.querySelector('#total-sum');
const CardDlele = document.querySelectorAll('.delete');
const DivCarde = document.querySelectorAll('.card');
const btnHeart = document.querySelectorAll('svg');


for (let i = 0; i < btn_plus.length; i++) {
  // var t=  parseInt(lblSomme.textContent);
 
  btn_plus[i].addEventListener("click", function () {
    // let x= lbl_quantity[i].textContent;
    // let y = lbLprice[i].textContent;
    // let z = x[i]*y[i];  
   
    // x = x + 1;
    // console.log(x,y);
    // lbl_quantity[i].innerHTML = x[i];
    lbl_quantity[i].innerHTML++;
    
  //  lblSomme.innerHTML=t+(parseInt(z[i]));
   lblSomme.textContent= parseInt(lblSomme.textContent) + parseInt(lbLprice[i].textContent);
    
  })
 
  
   
}


for (let i = 0; i < btnHeart.length; i++) {
 
  btnHeart[i].addEventListener("click", function () {
    

     
    btnHeart[i].style.color="red"
  

   
  });

}
  

for (let i = 0; i < CardDlele.length; i++) {
 
  CardDlele[i].addEventListener("click", function () {
    
    document.querySelector('body').removeChild(DivCarde[i]);
    lblSomme.textContent= parseInt(lblSomme.textContent) - ((parseInt(lbl_quantity[i].textContent)* parseInt(lbLprice[i].textContent)));

   
  });
 
  
   
}






for (let i = 0; i < btn_minus.length; i++) {
  // var t=  parseInt(lblSomme.textContent);
 
  btn_minus[i].addEventListener("click", function () {
   
    lbl_quantity[i].innerHTML--;
    
  //  lblSomme.innerHTML=t+(parseInt(z[i]));
   lblSomme.textContent= parseInt(lblSomme.textContent) - parseInt(lbLprice[i].textContent);
    
  })
 
  
   
}


