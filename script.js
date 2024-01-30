const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const country = document.getElementById('country');
const phoneNumber = document.getElementById('phoneNumber');
const state = document.getElementById('state');
const city = document.getElementById('city');
const village = document.getElementById('village');

const information = () => {
    const firstNameresult = prompt("Enter your first name:");
    const lastNameresult = prompt("Enter your last name:");
    const countryresult = prompt("Enter your country:");
    const phoneNumberresult = prompt("Enter your phone number:");
    const stateresult = prompt("Enter your state:");
    const cityresult = prompt("Enter your city:");
    const villageresult = prompt("Enter your village:");

    firstName.innerText = firstNameresult
    lastName.innerText = lastNameresult
    country.innerText = countryresult
    phoneNumber.innerText = phoneNumberresult
    state.innerText = stateresult
    city.innerText = cityresult
    village.innerText =villageresult


}
