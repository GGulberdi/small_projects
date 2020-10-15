function calculateBMI(mass, height){
  
    let bmi = mass/(height*height);
     
    return bmi
    
  }
    console.log(`John's BMI is ${calculateBMI(80,1.70).toFixed(2)} 
  and Mark's BMI is ${calculateBMI(95,1.55).toFixed(2)}`);
   
  function statusBMI(bmistatus,name=0){
      if(bmistatus < 18.5) {return "Underweight";
    } else if( bmistatus>18.5 && bmistatus<24.9){
        return "Normal weight";
    } else if(bmistatus > 25){
        return "Owerweight"
    } else if( bmistatus > 30){
        return "Obese"
    }
  }
  console.log(`John's BMI condition is ${statusBMI(27.68)} and Mark's BMI condition is ${statusBMI(39.54)}`)

  // Rice day

   function allowance(age, earlyRegister){
   if (earlyRegister === "early" && age > 16){ return `You total price for ticket is $15`;}
   else if (age > 16) { return `You total price for ticket is $20`;}
   else {return `Sorry , you are not allowed to join our rice programm`;} 
   }
   console.log(allowance(25));


  // function scores
  function lessThan100 (a,b) {
    return (a+b < 100);
  }
console.log(lessThan100(20,70));
console.log(lessThan100(40,70));

// Score to Grade Converter
/**
 * A -> 90-100
 * B -> 80-89
 * C -> 70-79
 * D -> 60-69
 * E -> 50-59
 * F -> 0-49
 */
function studentGrade( name, note){

  if (note < 49) {return `${name}, you score is ${note} and your grade is'F'.`}
  else if (note < 60) {return `${name}, you score is ${note} and your grade is'E'.`}
  else if ( note < 70) {return `${name}, you score is ${note} and your grade is'D'.`}
  else if ( note < 80) {return `${name}, you score is ${note} and your grade is'C'.`}
  else if ( note < 90) {return `${name}, you score is ${note} and your grade is'B'.`} 
  else if ( note < 100) {return `${name}, you score is ${note} and your grade is'A'.`}
  else if ( note > 100) {return `${name}, you have entered invalid number, please enter valid number.`}
  else{return 'invalid number'}
}

console.log(studentGrade('Gulsenem', 103));