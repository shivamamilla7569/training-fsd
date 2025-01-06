// Function to display a greeting message
window.onload = function () {
    const now = new Date();
    const hours = now.getHours();
    let greeting = "";
  
    if (hours < 12) {
      greeting = "Good morning!";
    } else if (hours < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    document.getElementById("greeting").innerText = greeting;
  };
  
  // Function to change the text dynamically
  function changeText() {
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.innerText = "You clicked the button! Nice!";
  }
  