const year = document.getElementById("year").value
    const CC = parseInt[year.substring(0 , 2)];
    const YY = parseInt[year.substring(2 ,4)];
    let DD = parseInt("month");
    console.log(year)
    const getGender = () => {
      const maleName = document.getElementById("male"); 
       const femaleName= document.getElementById("female");
      console.log(male,female)
    let gender = document.getElementById("gender").value
    const dayBorn= parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    console.log(dayBorn)
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysOfTheWeek[dayBorn])
let dayOfTheWeek = daysOfTheWeek[dayBorn]
const maleNames = ["kwasi", "kwandwoa", "kwabenaa", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","AMa" ];
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]

   



      
  }

       
