const firstname= document.getElementById("firstname");
const lastname= document.getElementById("lastname");
const number= document.getElementById("number");
const cityname= document.getElementById("cityname");
const aadhar= document.getElementById("aadhar");
const gender= document.getElementById("gender");
const age= document.getElementById("age");
const date=document.getElementById("date");
const email= document.getElementById("email");
const password= document.getElementById("password");
const bloodgroup= document.getElementById("bloodgroup");
const addbtn=document.getElementById("addbtn");
const negative=document.getElementById("negative");
const database= firebase.database();
const rootRef = database.ref('Donor');


addbtn.addEventListener('click', (e)=>{
    const mail=email.value;
    const pass=password.value;
    if (pass.length<7){
        alert("password too short");
    }
    else{
    const auth=firebase.auth();
    auth.createUserWithEmailAndPassword(mail,pass);
    e.preventDefault();
    rootRef.child(number.value).set({
        firstname:firstname.value,
        lastname:lastname.value,
        number:number.value,
        cityname:cityname.value,
        Aadharno:aadhar.value,
        gender:gender.value,
        age:age.value,
        date:date.value,
        bloodgroup:bloodgroup.value,
        negative_tested:negative.value,
        email:email.value,
        password:password.value,
        bloodgroup:bloodgroup.value,
        
    });
    alert("you have successfully made an account, login for more");
}
});