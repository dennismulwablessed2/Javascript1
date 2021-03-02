const calculateDayBorn = () =>{
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
if(gender === "male"&& dayOfTheWeek === "Sunday"){
  console.log(male[dayBorn],"kwasi");
  elseif(gender === "male"&& dayOfTheWeek === "Monday")
    console.log(male[dayBorn],"kwandwoa");
    elseif(gender === "male"&& dayOfTheWeek === "Tuesday")
    console.log(male[dayBorn],"kwabenaa");
    elseif(gender === "male"&& dayOfTheWeek === "Wednesday")
    console.log(male[dayBorn],"kwaku");
    elseif(gender === "male"&& dayOfTheWeek === "Thursday")
    console.log(male[dayBorn],"yaw");
    elseif(gender === "male"&& dayOfTheWeek === "Friday")
    console.log(male[dayBorn],"kofi");
    elseif(gender === "male"&& dayOfTheWeek === "Saturday")
    console.log(male[dayBorn],"kwame");
}
if(gender === "female"&& dayOfTheWeek === "Sunday"){
  console.log(female[dayBorn],"Akosua");} {
  elseif(gender === "female"&& dayOfTheWeek === "Monday")
    console.log(female[dayBorn],"Adwoa");} {
    elseif(gender === "female"&& dayOfTheWeek === "Tuesday")
    console.log(female[dayBorn],"Abenaa");} {
    elseif(gender === "female"&& dayOfTheWeek === "Wednesday")
    console.log(female[dayBorn],"Akua");} {
    elseif(gender === "female"&& dayOfTheWeek === "Thursday")
    console.log(female[dayBorn],"Yaa");} {
    elseif(gender === "female"&& dayOfTheWeek === "Friday")
    console.log(female[dayBorn],"Afua");} {
    elseif(gender === "female"&& dayOfTheWeek === "Saturday")
    console.log(male[dayBorn],"Ama");}
}
 }
