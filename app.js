// Init UI Class
const ui = new UI;
// UI variables
const nameUI = document.getElementById("name");
const zipCodeUI = document.getElementById("zip");
const emailUI = document.getElementById("email");
const phoneUI = document.getElementById("phone");
const submitUI = document.getElementById("submit");

// Form Input field Event Listener
nameUI.addEventListener("blur", validateName);
zipCodeUI.addEventListener("blur", validateZip);
emailUI.addEventListener("blur", validateEmail);
phoneUI.addEventListener("blur", validatePhone);
submitUI.addEventListener("click", formSubmit);
document.addEventListener("DOMContentLoaded", ui.showUser())
// Validate Name
function validateName() {
    const name = nameUI.value;
    const re = /^[a-zA-Z ]{2,15}$/;
    if(!re.test(name)) {
        nameUI.classList.add("is-invalid");
    } else {
        nameUI.classList.remove("is-invalid");
    }
}
// Validate ZipCode
function validateZip() {
    const zip = zipCodeUI.value;
    const re = /^[\d]{5}(\-[\d]{4})?$/; // 5555 OR 5555-4444
    if(!re.test(zip)) {
        zipCodeUI.classList.add("is-invalid");
    } else {
        zipCodeUI.classList.remove("is-invalid");
    }
}
// Validate ZipCode
function validateEmail() {
    const email = emailUI.value;
    // const re = /^[\w\W]+\@[\w\W]+\.[a-zA-Z]{2,5}$/; // mdrashed1351@gmial.com
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!re.test(email)) {
        emailUI.classList.add("is-invalid");
    } else {
        emailUI.classList.remove("is-invalid");
    }
}

// Validate ZipCode
function validatePhone() {
    const phone = phoneUI.value;    
    const re = /^\(?\d{3}\)?[ \-\.]?\d{3}[ \-\.]?\d{4}$/; // (326) 759-8928
    if(!re.test(phone)) {
        phoneUI.classList.add("is-invalid");
    } else {
        phoneUI.classList.remove("is-invalid");
    }
}

// Form Submit 
function formSubmit(e) {
    e.preventDefault();
   (nameUI.value === "") && validateName();
   (zipCodeUI.value === "") && validateZip();
   (emailUI.value === "") && validateEmail();
   (phoneUI.value === "") && validatePhone();
   if(nameUI.value === "" || zipCodeUI.value === "" || emailUI.value === "" || phoneUI.value === "") {
       ui.showMsg("Please Fill all the input field", "alert alert-danger");
   } else {
        const user = new User(nameUI.value, zipCodeUI.value, emailUI.value, phoneUI.value);
        ui.showMsg("User Created", "alert alert-success");
        try {        
            Storage.storeUser(user);
            clearInput();
            ui.showUser();
            
        } catch(err) {
            console.log(err.message);
        }
   }
   
//    console.log(user);
}

// Clear Input Field
function clearInput() {
    nameUI.value = '';
    zipCodeUI.value = "";
    emailUI.value = "";
    phoneUI.value = "";
}
