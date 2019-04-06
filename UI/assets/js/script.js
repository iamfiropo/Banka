// transaction type modal
const modal = document.querySelector(".mymodal");
function openModal(bool){
    bool ? modal.style.display = "block"
    : modal.style.display = 'none';
}

//user status toggle
activatebtn = document.querySelector('.activatebtn');
function status(){
    if (activatebtn.value === 'Activate'){
        (activatebtn.style.color = 'red') && (activatebtn.value = 'Deactivate')
    }
    else {
        (activatebtn.style.color = 'black') && (activatebtn.value = 'Activate')
    }
}