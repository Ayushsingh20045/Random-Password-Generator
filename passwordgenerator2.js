const passwordBox=document.getElementById("password")
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let symbol="!@#$%^%^&*()_+=-'{\|><?/|";
const allCharacter=upperCase+lowerCase+number+symbol;
const length=14;
function generatePassword(){
    let password="";
password+=upperCase[Math.floor(Math.random()*upperCase.length)];
password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
password+=symbol[Math.floor(Math.random()*symbol.length)];
password+=number[Math.floor(Math.random()*number.length)];
while(length>password.length){
  password+=allCharacter[Math.floor(Math.random()*allCharacter.length)]
}
passwordBox.value=password;
}
function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied")

}
