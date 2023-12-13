let nameInput = document.querySelector('.name-input');
let numInput = document.querySelector('.num-input');
let monthInput = document.querySelector('.month-input');
let yearInput = document.querySelector('.year-input');
let cvcInput = document.querySelector('.cvc-input');
let confirmBtn = document.querySelector('.confirm');
let continumBtn = document.querySelector('#continue');
let thanks = document.querySelector('.thanks');
let form = document.querySelector('.form');


let nameCard = document.querySelector('.card-name');
let numCard = document.querySelector('.serial-num');
let monthCard = document.querySelector('.month');
let yearCard = document.querySelector('.year');
let cvcCard = document.querySelector('.card-cvc');

let error = 0;





// events
let f = 0;

nameInput.addEventListener('input',(e)=>{
    nameCard.textContent = nameInput.value;

    if(nameInput.value == ''){
        nameCard.textContent = 'jane applesedd';
    }
})

numInput.addEventListener('input',(e)=>{
    numCard.textContent = numInput.value;
    f++;
    if(f==4 || f==8 || f==12){
        numInput.value = numInput.value + ' ';
    }else if(f==16){
        numInput.value = numInput.value;
    }
    
    if(numInput.value == ''){
        numCard.textContent = '0000 0000 0000 0000';
    }
})

monthInput.addEventListener('input',(e)=>{
    monthInput.value = monthInput.value.trim();
    if(/^[0-9]+$/.test( monthInput.value)){
        monthCard.textContent = monthInput.value;
    } else{
        monthInput.value = monthInput.value.slice(0,-1);
        
    }

    if(monthInput.value >12){
        monthInput.value = 12;
        monthCard.textContent = monthInput.value;

    }

    if(monthInput.value == ''){
        monthCard.textContent = '00';
    }
})

yearInput.addEventListener('input',(e)=>{
    yearCard.value = yearInput.value.trim();
    if(/^[0-9]+$/.test( yearInput.value)){
        yearCard.textContent = yearInput.value
    } else{
        yearInput.value = yearInput.value.slice(0,-1);
    }

    if(yearInput.value == ''){
        yearCard.textContent = '00';
    }
})

cvcInput.addEventListener('input',(e)=>{
    cvcCard.textContent = cvcInput.value;
    if(cvcInput.value == ''){
        cvcCard.textContent = '000';
    }
})


// functions

function checkName(){
    let nameValue = nameInput.value;
    let nameSpan = document.querySelector('.namespan');
    if(nameValue.trim() == ''){
        nameSpan.textContent = "Can't Be Blank";
        nameInput.classList.add('inputred');
       return 1;
    } 
    else{
        nameSpan.textContent = "";
        nameInput.classList.remove('inputred');
        return 0;

    }
}

function checkNum(){
    let numValue = numInput.value.replace(/\s/g, '');
    // console.log(numValue);
    let numSpan = document.querySelector('.numspan');

    if(numValue.trim() == ''){
        numSpan.textContent = "Can't Be Blank";
        numInput.classList.add('inputred');
        return 1;
    }else if(numValue.trim().length < 16){
        // console.log('f');
        numSpan.textContent = "Number is too short";
        return 1;
        
    } else if(numValue.trim().length == 16 && /^[0-9]+$/.test(numValue.trim())== false){
        numSpan.textContent = "Wrong format, numbers only";
        return 1;

    }
    else{
        numSpan.textContent = "";
        numInput.classList.remove('inputred');
        return 0;


    }
}

function checkMonth(){
    let yearValue = yearInput.value;
    let monthValue = monthInput.value;
    let monthSpan = document.querySelector('.monthspan');
    if(monthValue.trim() == '' || yearValue.trim() == ''){
        monthSpan.textContent = "Can't Be Blank";
        monthInput.classList.add('inputred');
    }
    else{
        monthSpan.textContent = "";
        
    }

    if(monthValue.trim() == ''){
        monthInput.classList.add('inputred');
        return 1;
    }else{
        monthInput.classList.remove('inputred');
        return 0;
    }
    
    
   
}

function year(){
    let yearValue = yearInput.value;
    if(yearValue.trim() == ''){
        yearInput.classList.add('inputred');
        return 1;
    }else{
        yearInput.classList.remove('inputred');
        return 0;

    }
}



function checkCvc(){
    let cvcValue = cvcInput.value;
    let cvcSpan = document.querySelector('.cvcspan');
    if(cvcValue.trim() == ''){
        cvcSpan.textContent = "Can't Be Blank";
        // console.log('cvc');
        cvcInput.classList.add('inputred');
        return 1;
    }
    else{
        cvcSpan.textContent = "";
        cvcInput.classList.remove('inputred');
        error--;
        return 0;

    }
   
}

function clearDate(){
    nameInput.value = "";
    numInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    cvcInput.value = "";

    nameCard.textContent = 'jane appleseed';
    numCard.textContent = '0000 0000 0000 0000';
    monthCard.textContent = '00';
    yearCard.textContent = '00';
    cvcCard.textContent = '000';
}

confirmBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    checkName();
    checkNum();
    checkMonth();
    checkCvc();
    year();
    
    if(!checkCvc() && !checkMonth() && !checkName() && !checkNum() && !year()){
        form.style.display = 'none';
        thanks.style.display = 'flex';
    }
    // confirmBtn.style.backgroundColor = 'hsl(0, 100%, 66%)';
    confirmBtn.classList.add('shake')

    setTimeout(()=>{
    confirmBtn.classList.remove('shake');
    // confirmBtn.style.backgroundColor = 'hsl(278, 68%, 11%))';
        // console.log('set tim');
    },1000)
   
    
})

continumBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    thanks.style.display = 'none';
    form.style.display = 'flex';
    clearDate();
})




