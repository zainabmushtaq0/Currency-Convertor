console.log("hi currency convertor");
let BASEURL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.min.json"


let dropdowns=document.querySelectorAll(".cbox select");
for (let select of dropdowns){
for (let currcode in countryList){
    // console.log(currcode);
   let newOption= document.createElement("option");
   newOption.innerText=currcode;
   newOption.value=currcode;
  
select.append(newOption);
// console.log(newOption.value);
}

select.addEventListener("change", (evt)=>{
    updateflag(evt.target);
})
}

// updating flag
const updateflag=(element)=>{
let currcode=element.value;
let countrycode=countryList[currcode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img=element.parentElement.querySelector("img");
// let img=document.querySelector("img");
img.src=newsrc;
};



let msg=document.querySelector("#msg");
let btn=document.querySelector("#btn");
 

btn.addEventListener("click", ()=>{
    let amount=document.querySelector(".amount input");
console.log(amount.value);

let amountval=amount.value;

})