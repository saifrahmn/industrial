const first= document.getElementById("first");
const last= document.getElementById("last");
const number= document.getElementById("number");
const email= document.getElementById("email");
const msg= document.getElementById("msg");
const addbtn= document.getElementById("addbtn");
const database= firebase.database();
const rootRef = database.ref('Contacts_msg');


addbtn.addEventListener('click', (e)=>{
   
    rootRef.child(first.value).set({
        firstname:first.value,
        lastname:last.value,
        number:number.value,
        email:email.value,
        message:msg.value,
        
        
    });
    alert("you have successfully given us a message we would contact you as soon as possible");
}
);