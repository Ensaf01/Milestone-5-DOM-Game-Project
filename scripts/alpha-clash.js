// function play(){
//     //hide the home screen when play start,hide by hidden class
//     const homeId=document.getElementById('home-screen');
//     //console.log(homeId.classList)
//     homeId.classList.add('hidden');

//     //2nd task--> show play screen
//     const playId=document.getElementById('play-screen');
//     playId.classList.remove('hidden'); //hidden remove hobe mane ja ache ta show korbe that it

// }

// utility moddhe showelementId and hiddenElementID function ache 

function continueGame(){
    // step -1 -> generate random alphabet
    const alphabet=getRandomAlphabet();
    console.log(alphabet);

    // show alphabet in display

    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
}
function play(){
   HiddenElementID('home-screen'); 
   showelementId('play-screen');
   continueGame();
}

