/* Global Variables */
const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=9cd516f943e04f38086109db535cfba9&units=imperial';
document.getElementById('generate').addEventListener('click',getData);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

//post client side
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },        
        body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

//get web API data
const getWeather = async (URL,Zip, apiKey) => {
    const response = await fetch(URL + Zip + apiKey)
    console.log(response);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.log('error', error);
    }
  }

  //getData
function getData(e) {
    const Zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    console.log(newDate);

    getWeather(URL, Zip, apiKey)
      .then(function (userData) {
        postData('http://localhost:3000/addData', { date: newDate, temp: userData.main.temp, user_response: content });
      }).then(function () {
        updateUI();
      });
  }

//update UI
const updateUI = async () => {
    const request = await fetch('http://localhost:3000/all');
    try {
      const allData = await request.json();
      
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temp;
      document.getElementById('content').innerHTML = allData.user_response;
    }
    catch (error) {
      console.log("error", error);
    }
  }