const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white'];
//                    index0  index1  index2  index3   index4   index5     index6   index7  index8   index9

function runGame() { // High order function <----- why ? function checkGuess is inside
  let guess = "";
  let correct = false;
  let numTries = 0;
  let target = null;
  
  do {
      let targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
      Math.max(1,2);
      console.log(Math)
      target = COLORS_ARRAY[targetIndex]; 
      // console.log(targetIndex + " random number generated");

      guess = prompt('I am thinking of one of these colors:' + COLORS_ARRAY.sort().join(", ") + '\n\nWhat color am I thinking of?\n');
      
      if(guess === null) {
          return;
        }

        numTries += 1;
        
        correct = checkGuess(guess, target);
    }
    
    while(!correct) 

    alert('Congratulations the color was ' + target + ' It took you ' + numTries + ' tries to guess correctly.');
    
}

function checkGuess (guess, target) {
    let isCorrect = false;
    results = COLORS_ARRAY.includes(guess);
    
    console.log(results + " results");
    
    if(results) { //// ONLY IF TRUE WILL LINES 39 THROUGH 50 WILL EXECUTE
        alert("Color does exist");
        
        if (guess > target) {
            alert('Your guess of '+ guess.toUpperCase() + ' is HIGHER than the target color: ' + target.toUpperCase());
        }
        else if(guess < target){
            alert(' Your guess of ' + guess.toUpperCase() + ' is LOWER than the target color: ' + target.toUpperCase());
        }
        else {
            background = guess;
            outcome = true;
        }    
    } 

    else {
        alert("Color does not exist");
    } 

    return  isCorrect;
}








