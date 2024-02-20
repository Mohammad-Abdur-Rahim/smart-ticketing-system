function setBackgroundColor(elementId) {
    const color = document.getElementById(elementId);
    color.classList.add('bg-[#1DD100]');
};
function addItem(elementId){
    const set = document.getElementById(elementId);
    const set1=set.innerText;
    const set2 =parseInt(set1);
    const remainSeat = set2 +1;
    set.innerText=remainSeat;

}
function removeItem(elementId){
    const set = document.getElementById(elementId);
    const set1=set.innerText;
    const set2 =parseInt(set1);
    const remainSeat = set2 -1;
    set.innerText=remainSeat;

}
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

};
//calculate product sum----
function calculateSum(elementId){
    const perTicket = 550;
    const price = parseInt(document.getElementById(elementId).innerText);
    return perTicket * price;
}
//input discount and total sum----
document.getElementById('coupon').addEventListener('keyup',function(event){
    const text=event.target.value;
    //-----------------------------------
   const userText= document.getElementById('btn');
   if(text==='NEW50'){
    userText.removeAttribute('disabled');
   }else{
    Deletebtn.setAttribute('disabled',true);
   }
});

function play(){
    setBackgroundColor('test-fn1');
    addItem('increase-seat');
    removeItem('decrease-seat');
    //---main solution for return functions ---
    addItem('totalSum');
    hideElement('totalSum');
    const totalPrice = calculateSum('totalSum');
    document.getElementById('PriceTotal').innerText = totalPrice;
 
}
//50% discount 
function discount(elementId) {
    const sumOfTotalPrice = parseInt(document.getElementById(elementId).innerText);
    const discount = 0.50; // 50%
    const fDiscount = sumOfTotalPrice * discount;
        return fDiscount;
    
}

// SHOW 50%
function result() {
    hideElement('input-h');
hideElement('ticket-section');
    const dResult = discount('PriceTotal');
    document.getElementById('grand-total').innerText = dResult;
}
