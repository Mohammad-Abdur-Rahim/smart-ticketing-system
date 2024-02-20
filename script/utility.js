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

function play(){
    console.log('test');
    setBackgroundColor('test-fn1');
    addItem('increase-seat');
    removeItem('decrease-seat');
    //---main solution for return functions ---
    addItem('totalSum');
    hideElement('totalSum');
    const totalPrice = calculateSum('totalSum');
    document.getElementById('PriceTotal').innerText = totalPrice;
 
}
