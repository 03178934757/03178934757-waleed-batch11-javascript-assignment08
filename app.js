var myInfo = alert ("Keep Your Password Secure! Dont Give It To AnyOne")
var info = prompt("Please Enter Your Name");
var myNameElement = document.getElementById("myName");
myNameElement.innerHTML ="WELCOME " + info.toUpperCase();




var upper = document.getElementById("upper")
var lower = document.getElementById("lower")
var num = document.getElementById("num")
var sym = document.getElementById("sym")
var inputslider = document.getElementById("inputslider");
var slidervalue = document.getElementById("slidervalue");
var generatebtn = document.getElementById("generatebtn")
var passbox = document.getElementById("passbox")
var inputbox = document.getElementById("inputbox")


inputbox.addEventListener ('click', ()=>{
    if(passbox.value != 0 | passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
    }
})


slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.textContent = inputslider.value;
});

generatebtn.addEventListener('click', () => {
    passbox.value = generatepassword()
})

var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercases = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatepassword(){
    var genpassword = "";
    var allchar = "";
    
    allchar += lower.checked ? lowercases : "";
    allchar += upper.checked ? uppercases : "";
    allchar += num.checked ? numbers : "";
    allchar += sym.checked ? symbols : "";

    if(allchar == "" || allchar.length == 0){
        var myAlert = alert ("Please Select Atleast One CheckBox")
    };

    for(var i = 1; i <= inputslider.value; i ++){
        genpassword += allchar.charAt(Math.floor(Math.random() * allchar.length));
    }

    return genpassword;
};
