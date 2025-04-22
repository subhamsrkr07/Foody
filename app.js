
// const Login=document.getElementById("loginform");


//  Login.addEventListener("click",function(e){
//     e.preventDefault();
//     const Email =  document.querySelector("input[name=email]").value;
//     const Password = document.querySelector("input[name=password]").value;
//     console.log(Email);
//     console.log(Password);
// })


const BTN=document.getElementById("submit");

BTN.addEventListener("click",function(e){
    e.preventDefault();
    const Nameinput=document.querySelector("input[name=ame]").value;
    const Emailinput=document.querySelector("input[name=email]").value;
    const Passwordinput=document.querySelector("input[name=password]").value;
    const Addressinput=document.querySelector("textarea[name=address]").value;
    console.log(Nameinput);
    console.log(Emailinput);
    console.log(Passwordinput);
    console.log(Addressinput);
    // BTN.textContent="submitting......."
      alert("Form was submitted")

})

