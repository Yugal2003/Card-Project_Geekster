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







// chatgpt code

// const userForm = document.getElementById('userForm');
// const nameInput = document.getElementById('name');
// const phoneNumberInput = document.getElementById('phoneNumber');
// const villageInput = document.getElementById('village');
// const cityInput = document.getElementById('city');
// const userCard = document.getElementById('userCard');
// const theme = document.getElementById('theme');

//   // Event listener for form submission
//   userForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get user input values
//     const name = nameInput.value;
//     const phoneNumber = phoneNumberInput.value;
//     const village = villageInput.value;
//     const city = cityInput.value;

//     // Save data to local storage
//     const userData = { name, phoneNumber, village, city };
//     localStorage.setItem('userData', JSON.stringify(userData));

//     // Update UI with user data
//     updateUserCard(userData);
//   });

//   // Event listener for theme selection
//   theme.addEventListener('change', function () {
//     const selectedTheme = theme.value;
//     if (selectedTheme === 'dark') {
//         document.body.className = 'dark-mode';
//         userCard.className = 'dark-mode';
//     } 
//     else {
//         document.body.className = '';
//         userCard.className = '';
//     }
//   });

//   // Function to update UI with user data
//   function updateUserCard(userData) {
//     userCard.innerHTML = `
//       <h2>User Information</h2>
//       <p><strong>Name:</strong> ${userData.name}</p>
//       <p><strong>Phone Number:</strong> ${userData.phoneNumber}</p>
//       <p><strong>Village:</strong> ${userData.village}</p>
//       <p><strong>City:</strong> ${userData.city}</p>
//     `;
//   }