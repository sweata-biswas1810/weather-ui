function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // if hour is 0, show 12
  const timeString = `${hours}:${minutes} ${ampm}`;

  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function updateDate() {
  const now = new Date();

  const options = {
    weekday: 'long',  // e.g., Monday, Tuesday
    day: 'numeric',   // 1, 2, 3...
    month: 'long',    // January, February...
    year: 'numeric'   // 2025
  };

  const dateString = now.toLocaleDateString('en-US', options);
  document.getElementById('wed').textContent = dateString;
}

updateDate();

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning, Sweata!";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon, Sweata!";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening, Sweata!";
  } else {
    greeting = "Good Night, Sweata!";
  }

  document.getElementById("greeting").textContent = greeting;
}

getGreeting();

function updatetoday() {
  const now = new Date();

  const options = {

    day: 'numeric',   // 1, 2, 3...
    month: 'long',    // January, February...

  };

  const todaystring = now.toLocaleDateString('en-US', options);
  const today = `Today, ${todaystring}`;
  document.getElementById('today').textContent = today;
}

updatetoday();


const apiKey = '08924e661d0277afab9c2e640ffdbac0';



function getlocaion() {
  if (!navigator.geolocation) {
    alert("location cannot be fetching");
  }

  navigator.geolocation.getCurrentPosition(showlocation, showerror);

  async function showlocation(position) {
   
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

     const apiKey = '08924e661d0277afab9c2e640ffdbac0';
    const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + lat + "," + lon;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.success === false) {
        console.log("data is not fetching");
        return;
      }
      updatelocation(data);
    }
    catch(error) {
      console.log("there have some error");
    }
  }
  function showerror() {
    console.log("loaction access denied");
  }
}

function updatelocation(data){

  const temp=document.querySelector(".sunny_temp h2");
  const description=document.querySelector(".footer_sunny_heading h2");
  const wind=document.querySelector("#wind_id");
  const hum=document.querySelector("#hum_id");

  const temp_data=data.current.temperature;
  const desc_data=data.current.weather_descriptions[0];
  const wind_data=data.current.wind_speed;
  const hum_data=data.current.humidity;

  temp.textContent=`${temp_data}°C`;
  description.textContent=desc_data;
  wind.textContent=`${wind_data}km/h`;
  hum.textContent=`${hum_data}%`;

}


document.addEventListener("DOMContentLoaded", () => {
  getlocaion();

});




















