let screen = document.getElementById('display');

function appendToDisplay(input){
  
   screen.value += input;

};

function clearDisplay(){

   screen.value="";

};

function calculate(){

  try {
    
   screen.value = eval(screen.value);

  } catch (error) {
     
    screen.value="error";

  }

};


