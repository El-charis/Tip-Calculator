/// to select buttons
const fivePercent=document.getElementById('five')
const tenPercent=document.getElementById('ten')
const fifteenPercent=document.getElementById('fifteen')
const tweentyFivepercent=document.getElementById('twentyFive')
const fiftyPercent=document.getElementById('fifty')
const custom=document.getElementById('custom')
const firstInput=document.getElementById('firstinput')
const secondInput=document.getElementById('secondInput')
const resetButton=document.getElementById('Reset')
const tipInput=document.querySelector('.tipInput')
const tipAmount=document.querySelector('#tipAmount')
const errorparagraph=document.querySelector('.errorparagraph')

/// to set tip default value

///to select form
const theForm=document.querySelector('form')
//// to calculate tip amount
function getValue(e){
   const tipamount=(this.value*firstInput.value)/secondInput.value
   const Total=tipamount*secondInput.value
  
//  console.log(tipamount, Total)
   ///TO SET CALCULATED NUMBERS TO THE DOM
    tipInput.value=tipamount.toFixed(2)
    tipAmount.value=Total.toFixed(2)
      if(secondInput.value==0 || secondInput.value==null){
         errorparagraph.style.visibility='visible'
         secondInput.style.border='1px solid red'
         setTimeout(RemoveError, 5000)
         tipInput.value=0.00.toFixed(2)
         tipAmount.value=0.00.toFixed(2)
         
        
      }
      else{
         RemoveError()
      }
    e.preventDefault()
}
///to remove error after 5 secs
function RemoveError(){
   errorparagraph.style.visibility='hidden'
   secondInput.style.border='none'
}
///event listeners
fivePercent.addEventListener('click', getValue)
tenPercent.addEventListener('click', getValue)
fifteenPercent.addEventListener('click', getValue)
fiftyPercent.addEventListener('click', getValue)
tweentyFivepercent.addEventListener('click', getValue)
// event listner for custom
custom.addEventListener('keyup',Customvalue )
secondInput.addEventListener('keyup',Customvalue )
firstInput.addEventListener('keyup',Customvalue )
//// for custom
function Customvalue(e){
   let entry=custom.value
   entry=entry/100
   const tipamount=(entry*firstInput.value)/secondInput.value
   const Total=tipamount*secondInput.value
  
//  console.log(tipamount, Total)
   ///TO SET CALCULATED NUMBERS TO THE DOM
    tipInput.value=tipamount.toFixed(2)
    tipAmount.value=Total.toFixed(2)
   console.log(entry)
   
}

