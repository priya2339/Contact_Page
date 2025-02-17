const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addContactbtn = document.getElementById('add-contact-btn');
const contactTablebody = document.querySelector('#contact-table');


document.addEventListener('DOMContentLoaded', loadContacts);


addContactbtn.addEventListener('click', addContact);

function addContact() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all the fields");
        return;
    }

    const contact = {
        id: Date.now(),
        name,
        email,
        phone
    };

    saveContactsToLocalStorage(contact);
    displayContact(contact);

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}

function loadContacts() {
    const contacts = getContactFromLocalStorage();
    contacts.forEach(contact => displayContact(contact));
}

function displayContact(contact) {
    const row = document.createElement('tr');
    row.dataset.id = contact.id;

    row.innerHTML = ` <td> ${contact.name}</td>
                      <td> ${contact.email}</td>
                      <td> ${contact.phone}</td>
                      <td class="actions">
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                     </td>`
        ;

    contactTablebody.appendChild(row);

    row.querySelector('.edit-btn').addEventListener("click", () => editContact(contact.id))
    row.querySelector('.delete-btn').addEventListener("click", () => deleteContact(contact.id));
}


function editContact(id){
    const contacts = getContactsFromLocalStorage();
    const contactToEdit = contacts.find(contact => contact.id === id);

    if(!contactToEdit) return;

    nameInput.value = contactToEdit.name;
    emailInput.value = contactToEdit.email;
    phoneInput.value = contactToEdit.phone;

    deleteContact(id, false);
}

function deleteContact(id, refresh = true){
    const contacts = getContactsFromLocalStorage();
    const updateContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(updateContacts));

   if (refresh) refreshContactList();
}

function getContactsFromLocalStorage(){
    return JSON.parse(localStorage.getItem("contacts")) || [];
}

function saveContactsToLocalStorage(contact){
    const contacts = getContactsFromLocalStorage();
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

    localStorage.setItem("contacts", JSON.stringify(contacts));

function refreshContactList(){
    contactTablebody.innerHTML = "";
    loadContacts();
}