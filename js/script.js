
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["kwasi", "kwandwoa", "kwabenaa", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","AMa" ];
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const calculateDay = () => {
    event.preventDefault()

   const year = document.getElementById("year").value
    const CC = parseInt[year.substring(0 , 2)];
    const YY = parseInt[year.substring(2 ,4)];
    const MM = parseInt(document.getElementById["month"].value);
    const DD = parseInt(document.getElementById["date"].value);
    console.log(year)
    const d = Math.round( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 
    console.log[d];
    return d;

};
const getGender = () => {
  const maleName = document.getElementById("male"); 
   const femaleName= document.getElementById("female");
  
      
  }

       
