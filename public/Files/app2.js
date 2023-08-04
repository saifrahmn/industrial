const email=document.getElementById("email");
const password=document.getElementById("password");
const addbtn=document.getElementById("addbtn");
const butt=document.getElementById("butt");
const database= firebase.database();
const category=document.getElementById("type");
const phone=document.getElementById("phone");

addbtn.addEventListener("click", (e)=>{
    const mail=email.value;
    const pass=password.value;
    const auth=firebase.auth();
    
    auth.signInWithEmailAndPassword(email, password)
  
  auth.onAuthStateChanged((user) => {
    if (user) {
      
      var uid = user.uid;
      console.log(uid);
    } else {
      console.log("not logged in");
    }
  });
});

butt.addEventListener("click", (e)=>{
    firebase.auth().signOut().then(() => {
        alert("loged out");
      })
    
});