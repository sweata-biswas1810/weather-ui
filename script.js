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

