const form = document.querySelector("form");// console.log(form);
const nameInput = document.querySelector("#name");// console.log(nameInput);
const PhoneInput = document.querySelector("#Phone");// console.log(PhoneInput);
const villageInput = document.querySelector("#village");// console.log(villageInput);
const cityInput = document.querySelector("#city");// console.log(cityInput);
const btnInput = document.querySelector("#btn");// console.log(btnInput);
const btn1 = document.querySelector("#light");//console.log(theme);
const btn2 = document.querySelector("#dark");
const userCard = document.querySelector(".userCard");

form.addEventListener('submit' , function(event){
    event.preventDefault();
    
    const name =  nameInput.value;//console.log(name);
    const phone = PhoneInput.value;//console.log(phone);
    const village = villageInput.value;//console.log(village);
    const city = cityInput.value;//console.log(city);

    const userData  = {name,phone,village,city};
    localStorage.setItem('userData', JSON.stringify(userData));

    userDataShowOnUserCard(userData);
});


btn2.addEventListener("click",  function(){
    document.body.className = 'dark-mode';
    userCard.className = 'dark-mode';
});
btn1.addEventListener("click",  function(){
    document.body.className = '';
    userCard.className = '';
});

//after filll all info userdata show on usercard (means display on screen)
function userDataShowOnUserCard(userData){
    userCard.innerHTML = `
    <h1>User Information</h1>
    <p><strong>Name :&nbsp;&nbsp;</strong>${userData.name}</p>
    <p><strong>Phone Number :&nbsp;&nbsp;</strong>${userData.phone}</p>
    <p><strong>Village :&nbsp;&nbsp;</strong>${userData.village}</p>
    <p><strong>City :&nbsp;&nbsp;</strong>${userData.city}</p>
    `;
}
