//utilit mane aki jinis bar bar use hocche

function HiddenElementID(elementId){
    const doHiddens=document.getElementById(elementId);
    doHiddens.classList.add('hidden'); //hidden class add korbe and oi section a ja ache hiddden hoye jabe
}

function showelementId(elementId){
    const showPage=document.getElementById(elementId);
    showPage.classList.remove('hidden'); // hidden class thakle seta remove hobe and ja chilo show korbe

}