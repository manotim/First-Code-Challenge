let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput
// write Code For the Code challenge
let finalGrade //initialize the varable that holds our grades

   
if (inputGrade <= 100 && inputGrade >= 80) {
  //assign grade A to all marks ranging (80 - 100)
    finalGrade = "A";
    
} else if (inputGrade <= 79 && inputGrade >= 60) {
  //assign grade B to all marks ranging (60 - 79)
    finalGrade = "B";
    
} else if (inputGrade <= 59 && inputGrade >= 50) {
  //assign grade C to all marks ranging (50 - 59)
    finalGrade = "C";
    
} else if (inputGrade <= 49 && inputGrade >= 40) {
  //assign grade D to all marks ranging (40 - 49)
    finalGrade = "D";
    
} else if (inputGrade <= 39 && inputGrade >= 0) {
  //assign grade E to all marks ranging (0 - 39)
    finalGrade = "E";
    
} else {
    finalGrade = 'Grade input NOT in range' // Message for any marks out of the (0 - 100) range
}

finalOutput = finalGrade //assigned my final grade to this variable
document.getElementById('marks-id').append(finalOutput)
// end of challenge one Code



})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
const speedLmt = 70; //initialized the speed limit to 70km/h
const pts = Math.floor((inputSpeed - speedLmt) / 5); //math function that calculates the demerit points and stores it in variable pts
let message //variable that will hold our message
  if (inputSpeed < speedLmt) {
    //when the speed is less than 70, outputs Ok
    message = "Ok";
  } else if (pts < 12) { 
    message = "Points: " + pts; //display the demerit points if they are less than 12
  } else 
   message = "License suspended"; //display License if points are more than 12

finalOutput = message
    document.getElementById('speed-id').append(finalOutput)
// end of challenge 2 Code



})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput

function calculateNetPay(taxablePay) {
  let taxableIncome = taxablePay - 2400; // remove personal relief of 2400 per month
  let paye = 0;           // initialize PAYE to 0
  let nssf = taxablePay * 0.06;         // calculaye 6% of the taxable pay
  let nhif = 0;           // initialize NHIF to 0

  // compute PAYE based on taxable income

  if (taxableIncome <= 24000) {
      paye = taxableIncome * 0.1 // outputs tax of 10% for the first 24000

  } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
      paye = taxableIncome * 0.25  // outputs tax of 25% for values 2400 - 323333

  } else if (taxableIncome > 32333) {
      paye = taxableIncome * 0.3 // outputs tax for 30% for values more than 32333

  }


  // compute NHIF based on NHIF rates in effect from 1 April 2015:
  if (taxablePay <= 5999) {
      nhif = 150
  } else if (taxablePay <= 7999) {
      nhif = 300
  } else if (taxablePay <= 11999) {
      nhif = 400
  } else if (taxablePay <= 14999) {
      nhif = 500
  } else if (taxablePay <= 19999) {
      nhif = 600
  } else if (taxablePay <= 24999) {
      nhif = 750
  } else if (taxablePay <= 29999) {
      nhif = 850
  } else if (taxablePay <= 34999) {
      nhif = 900
  } else if (taxablePay <= 39999) {
      nhif = 950
  } else if (taxablePay <= 44999) {
      nhif = 1000
  } else if (taxablePay <= 49999) {
      nhif = 1100
  } else if (taxablePay <= 59999) {
      nhif = 1200
  } else if (taxablePay <= 69999) {
      nhif = 1300
  } else if (taxablePay <= 79999) {
      nhif = 1400
  } else if (taxablePay <= 89999) {
      nhif = 1500
  } else if (taxablePay <= 99999) {
      nhif = 1600
  } else if (taxablePay > 100000) {
      nhif = 1700
  }


  // calculate the net salary
  let netSalary = taxablePay - paye - nssf - nhif;
  return netSalary

}



finalOutput = calculateNetPay(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
})