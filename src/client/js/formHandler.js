const apiKey = '&appid=74c3de506cd0392c67d65851ac5d0cc8';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const weatherFormat = '&units=imperial';

let d = new Date();
let newDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
console.log(newDate);

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = 'whatever';
    });
}

export { handleSubmit };