const inputSlider =  document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-Lengthnumber]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const uppercaseCheck=document.querySelector("[#uppercase");
const lowercase=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("[#numbers]");
const symbolscheck=document.querySelector("[#symbols]");
const indicator=document.queryselector("[data-indicator]");
const generateBtn=document.queryselector("[.generateBtn");
const allcheckBox=document.queryselector("input[type=checkbox");


let password="";
let passwordLength=8;
let checkCount=0;
handleSlider();
//set streength circle color to gray



//set passwordlength

function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
}
function setIndicator(color){
    indicator.style.backgroundColor=color;

}

function getRndInteger(min,max){

   return Math.floor( Math.random()*(max-min)) +min; 

}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91))

}

function generateSymbol(){
    const randNum=getRandInteger(0,symbols.length);
    return symbolscheck.charAt(randNum);
}

function calcstrength(){

    let hasUpper=false;
    let hasLower=false;
    let hasSys=false;
    let hasNum=false;
    if (uppercaseCheck.chacked) hasUpper=true;
    if(lowercasecheck.checked) hasLower=true;
    if(numbersCheck.checked) hasNum=true;
    if(symbolscheck.checked) hasSys=true;

    if(hasUpper && hasLower && (hasNum || hasSys) && passwordLength >=8){
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper)&&
        (hasNum || hasSys)&&
        passwordLength>=6
    )
     {
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");

    }

}

 async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";

    }
    catch(e){
        copyMsg.innerText="failed";
    }

    copyMsg.classList.add("active");
    setTimeout( ()=> {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array){

    for(let i=array.lenghth-1;i>0;i--){
        const j=math.floor(math.random()*(i+1));
        const temp =array[i];
        array[i]=array[j];
        array[j]=temp;
    }

    let str ="";
    array.forEach((el) => (str+=el));
    return str;



}
function handleCheckBoxChange(){
    checkCount=0;
    allCheckBiox.forEach( (checkbox) =>{
        if(checkbox.checked)
        checkCount++;
    });
}

allcheckBox.forEach( (chackbox)=>{
    chackbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();
})

generateBtn.addEventListener('click',() =>{

    if(checkCount<=0) return;

    if(passwordLength<checCount){
        passwordLength= checkCount;
        handleSlider();
    }

    console.log("starting the journey");

    password="";

    let funcArr=[];

    if(uppercaseCheck.checked)
    funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
    funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
    funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
    funcArr.push(generateSymbol);


    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i]();
    }
    console.log("compulsory addition done");

 for(let i=0;i<passwordLength-funcArr.length;i++){
    let randIndex=getRndInteger(0,funcArr.length);
    password+=funcArr[randIndex]();
 }


 password=shufflepassword(Array.from(password));

 passwordDisplay.value=passsword;

 calcstrength();
    
})



