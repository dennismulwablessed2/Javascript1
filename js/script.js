const getGender = () => {
    let male = document.getElementById("male").value
    let female = document.getElementById("female").value
}
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["kwasi", "kwandwoa", "kwabenaa", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","AMa" ];

const calculateDay = () => {
    year = document.getElementById("year").value
    const CC = parseInt[year.substring(0 , 2)];
    const YY = parseInt[year.substring(2 ,4)];
    const MM = parseInt(document.getElementById["Month"].value);
    const DD = parseInt(document.getElementById["date"].value);
    const d = Math.round( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 
}
