//utilit mane aki jinis bar bar use hocche

function HiddenElementID(elementId){
    const doHiddens=document.getElementById(elementId);
    doHiddens.classList.add('hidden'); //hidden class add korbe and oi section a ja ache hiddden hoye jabe
}

function showelementId(elementId){
    const showPage=document.getElementById(elementId);
    showPage.classList.remove('hidden'); // hidden class thakle seta remove hobe and ja chilo show korbe

}

function setBackGroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-red-400'); //bg-orange-400 class

}

function getRandomAlphabet(){
    // create array direct or string to array via split

    const stringAlphabet="abcdefghijklmnopqrstuvwxyz";
    const AlphabetArray=stringAlphabet.split('');
    //console.log(AlphabetArray);
    // get random index generate
    const randomNumberGenerate=Math.random()* 25 // alphabet 25 so generate 0 to 25 ,random(0-1)

    const indexAraryGenerate=Math.round(randomNumberGenerate); // round mane puron number

    const alphabet=AlphabetArray[indexAraryGenerate];
   // console.log(alphabet);
    return alphabet;
    
}