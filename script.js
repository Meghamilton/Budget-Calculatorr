function adduser()
{
    var user={
        usname:usnm.value,
        email:em.value,
        password:pss.value,
        confmpasswrd: cnpss.value
    };
    if(usnm.value==="" ||em.value==="" ||pss.value===""|| cnpss.value==="")
     {
        alert("Enter the details")
     }
     else{
        if(usnm.value in localStorage)
        {
            alert("Username already exists")
        }
        else{
            if(pss.value===cnpss.value)
            {
            localStorage.setItem(user.usname,JSON.stringify(user))
            alert("Your data has been entered successfully")
            window.location="./login.html"
            }
        }
     }
}

function logg()
{
    var name= use.value
    var enter= p.value
    if(name in localStorage)
    {
        user=JSON.parse(localStorage.getItem(name))
        console.log(user);
        if(p.value===user.password)
        {
            localStorage.setItem("current",name)
            window.location= './main.html';
        }
        else{
            alert("wrong password")
        }
    }
}

function welcome()
{
var currentuser= localStorage.getItem("current")
if(currentuser)
{
   user=JSON.parse(localStorage.getItem(currentuser))
    document.getElementById("wel").innerHTML=`<i class="fa-solid fa-user" style="color: #3f0df3;"></i> ${user.usname}`;
}
}
welcome();

function calcu()
{
    var cal={
    totalin: 0,
    rentin:parseFloat(rent.value),
    grocery:parseFloat(groc.value),
    transport:parseFloat(trans.value),
    entery:parseFloat(enter.value),
    expern:parseFloat(exp.value),
    bal:0
    };
    if(tin.valu===""|| rent.value===""||groc.value===""||trans.value===""||enter.value===""||exp.value==="")
    {
        alert("Enter the details")
    }
    else{
        cal.totalin=cal.rentin+cal.grocery+cal.transport+cal.entery+cal.expern
        cal.bal=parseFloat(tin.value)-cal.totalin
        document.getElementById("balance").innerHTML=`${cal.bal}`
        localStorage.setItem("total amount",JSON.stringify(cal))
        if(cal.bal>=1)
        {
            alert("CONGRATULATIONS!! You have sucessfully saved your amount")
        }
        else{
            alert("NO SAVINGS!! You have to look on more to saving money")
        }
    }
}