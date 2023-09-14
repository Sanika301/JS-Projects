let submit=document.getElementById('submit');
let users=[];

function Checker(email)
{
    
}

submit.addEventListener('click',()=>{
    let email=document.getElementById('email');
    let name=document.getElementById('name');
    console.log(Checker(email));
    if(email.value!="" && name.value!="")
    {
        let user={
            email:email.value,
            name:name.value
        }
        users.push(user);
    }
    else
    {
        console.log("user email repeated!!")
    }
    console.log(users);
})
