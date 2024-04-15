import { Bubble } from '../Controllers/Bubble.js';
import { Contact } from '../Models/Contact.js'
import { LinkedList } from '../Models/LinkedList.js';

let linkedList = new LinkedList;

document.getElementById("btn_add").addEventListener("click", function() {
    let contactName = document.getElementById("contactName").value;
    let number = document.getElementById("number").value;
    
    if(contactName !=='' && number !==''){
        if(number.length != 10){
            alert("Ingrese un número de teléfono de 10 dígitos");
        } else {
            if (isDuplicate(contactName, number)) {
                alert("El nombre o el número de teléfono ya están en la lista");
            } else {
                let contact = new Contact(contactName, number);
                linkedList.push(contact);
                Bubble.sort(linkedList); 
                displayContacts();
            }
        }
    } else {
        alert("Llene todos los campos");
    }
});

function isDuplicate(contactName, number) {
    let currentContact = linkedList.head;
    while (currentContact) {
        if (currentContact.contact.name === contactName || currentContact.contact.number === number) {
            return true;
        }
        currentContact = currentContact.next;
    }
    return false;
}

function deleteContact(index) {
    linkedList.removeAt(index);
    displayContacts();
}

function displayContacts() {
    let contactListDiv = document.getElementById("contactList");
    contactListDiv.innerHTML = "";
    let currentContact = linkedList.head;
    let index = 0;
    while (currentContact) {
        let contactItem = document.createElement("div");
        let nameDiv = document.createElement("div");
        let numberDiv = document.createElement("div");
        let deleteButton = document.createElement("button"); 
        nameDiv.textContent = `Nombre: ${currentContact.contact.name}`;
        numberDiv.textContent = `Número: ${currentContact.contact.number}`;
        deleteButton.textContent = "Eliminar";
        (function(index) {
            deleteButton.addEventListener("click", () => deleteContact(index));
        })(index);
        contactItem.appendChild(nameDiv);
        contactItem.appendChild(numberDiv);
        contactItem.appendChild(deleteButton); 
        contactListDiv.appendChild(contactItem);
        currentContact = currentContact.next;
        index++;
    }
}
