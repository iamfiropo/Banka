
const modal = document.querySelector(".mymodal");

function openModal(bool){
    bool ? modal.style.display = "block"
    : modal.style.display = 'none';
}