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

function loadContacts(){
    const contacts = getContactFromLocalStorage();
    contacts.forEach(contact => displayContact(contact) );
}

function displayContact(contact){
    const row = document.createElement('tr');
    row.dataset.id = contact.id;

    row.innerHTML = ` <td> ${contact.name}<td/>
                      <td> ${contact.email}<td/>
                      <td> ${contact.phone}<td/>
                      <td class="actions">
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn>Delete</button>
                     </td>"`
                     ;
}