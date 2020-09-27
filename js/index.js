
function birth() {
    var birthday = document.getElementById("birthDate").value;
    var myGender = document.getElementById("gender").value
    var dateOfBirth = new Date(birthday);
    var dayOfTheWeek = dateOfBirth.getDay();
    var akan;
    var day;  
    
     if (myGender=="Female"){
         if(dayOfTheWeek==1){
             akan="Adwoa";
             day="Monday"
         }
         else if (dayOfTheWeek==2){
            akan="Abenaa"
            day="Tuesday"
         }
         else if(dayOfTheWeek==3){
             akan="Akua"
             day="Wednesday"
         }
         else if(dayOfTheWeek==4){
             akan="Yaa"
             day="Thursday"
         }
         else if (dayOfTheWeek==5){
             akan="Afua"
             day="Friday"
         }
         else if(dayOfTheWeek==6){
             akan="Ama"
             day="Saturday"
         }
         else {
             akan="Akosua"
             day="Sunday"
         }
     }
     else {
        if(dayOfTheWeek==1){
            akan="Kwadwo";
            day="Monday"
        }
        else if (dayOfTheWeek==2){
           akan="Kwabena"
           day="Tuesday"
        }
        else if(dayOfTheWeek==3){
            akan="Kwaku"
            day="Wednesday"
        }
        else if(dayOfTheWeek==4){
            akan="Yaw"
            day="Thursday"
        }
        else if (dayOfTheWeek==5){
            akan="Kofi"
            day="Friday"
        }
        else if(dayOfTheWeek==6){
            akan="Kwame"
            day="Saturday"
        }
        else {
            akan="Kwasi"
            day="Sunday"
        }
       }
      
    document.getElementById("result").innerHTML = "YOU WERE BORN ON" +" "+day +"and your akan name is"+" "+akan;


     
}

