let select = document.querySelectorAll("select");
let input=document.querySelector("#input");
let btn=document.querySelector("#btn");
let fromcurrselect = document.querySelector("#from select"); 
let tocurrselect = document.querySelector("#to select");
let msg=document.querySelector("#msg");

 
select.forEach((selects)=>{   //both select tag 
for (currencycode in countryList ){
// console.log(currencycode); //keyvariables

   newoption =  document.createElement("option");
   newoption.innerText=currencycode;
   newoption.value=currencycode;// newoption.setAttribute("value","code") ;
    if (currencycode=="USD" && selects.name =="from"){
    newoption.selected="selected";
    }
    else  if(currencycode=="PKR" && selects.name =="to"){
 newoption.selected="selected";
    }

   selects.append(newoption); //select tag append options
     
   selects.addEventListener("change",(evt)=>{   //flags change according to the code 
        flag(evt.target);   //option tag 
})
}
})

 let flag=(optiontag)=>{
//  console.log(optiontag.value);//keyvariables currency code
//    console.log( countryList[optiontag.value]); //value  country code
  let img=optiontag.parentElement.querySelector("img"); // <div class = "select" >
   img.src= `https://flagsapi.com/${countryList[optiontag.value]}/flat/64.png`;
 }

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
   //   console.log(input.value);
 
    if(input.value=="" || input.value<1){
     input.value="1";
  }
// console.log(fromcurrselect.value,tocurrselect.value); //option tag currency code
 from = fromcurrselect.value.toLowerCase();
  to= tocurrselect.value.toLowerCase();

  let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
   let respromise = await fetch(url);
   let data= await respromise.json();
//   console.log(data);

 let rate=data[from][to];
   final=rate*input.value;
   msg.innerText=`${input.value}${from}=${final}${to}`;

})
    
// now we move for currency ai calling# 
