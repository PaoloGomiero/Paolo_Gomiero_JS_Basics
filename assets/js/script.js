let result = document.getElementById('result')
let Add = document.getElementById('Add')
let Dec = document.getElementById('Dec')
let Reset = document.getElementById("Reset")

let value = parseFloat(result.innerHTML);


function plus(){
    let newValue = (value+=1);
    result.innerHTML = newValue;
}


Add.addEventListener('click', () => {
    plus();
})

function minus(){
    let newValue = (value-=1);
    result.innerHTML=newValue;
}


Dec.addEventListener('click', () => {
    minus();
})

function reset() {
    value = 0;
    newValue = 0;
    result.innerHTML = newValue;
}

Reset.addEventListener('click', () => {
    reset();
})


