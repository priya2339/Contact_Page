const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addContactbtn = document.getElementById('add-contact-btn');
const contactTablebody = document.querySelector('#contact-table');


document.addEventListener('DOMContentLoaded', loadContacts);


addContactbtn.addEventListener('click', addContact);

function addContact(){

    const name = nameInput.value .trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if(name === "" || email === "" || phone === ""){
        alert("Please fill all the fields");
        return;
    }

    const contact = {
        id: Date.now(),
        name,
        email,
        phone
    };

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}