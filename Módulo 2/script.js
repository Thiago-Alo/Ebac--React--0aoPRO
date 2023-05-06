let result = document.querySelector('.result');
function addToScreen(value){
    result.innerHTML += value;
}
function calculate(){
    let total = eval(result.innerHTML);
    result.innerHTML = total.toFixed(2);
}
function clearAll(){
    result.innerHTML = '';
}