var elForm = document.querySelector(".site__form");
var elInput = document.querySelector(".site__input");
var elResult = document.querySelector(".site__result");
var evenNumber = [];
var oddNumber = [];

elForm.addEventListener("submit" , function(evt){


  evt.preventDefault();

  var elInputValue = Number(elInput.value.trim());

  if(elInputValue <= 0 || isNaN(elInputValue) || elInputValue == 0){

    elResult.textContent = "0 dan katta raqam kiriting!!!";
    elResult.classList.add("site__eror");
    return

  }

  if(elInputValue % 2 == 0){

    elResult.textContent = `${elInputValue}   juft son `;
    elResult.classList.remove("site__eror");
    elResult.classList.add("site__add");
    evenNumber.push(`${elInputValue}  juft son`);
    console.log(evenNumber);

  }else{

    elResult.textContent = `${elInputValue}   toq son `;
    elResult.classList.remove("site__eror");
    elResult.classList.add("site__add");
    oddNumber.push(`${elInputValue}  toq son`);
    console.log(oddNumber);



  }

  elInput.value = "";




})
