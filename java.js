function checkAge(){
  // Get Html Element
  let AgeDate = document.getElementById('AgeDate');
  let result = document.getElementById('result'); 
  // this is current Date
  let CurrAge = new Date();
  let birthAge = new Date(AgeDate.value);
  console.log(birthAge);
  // Substract Birth year to Current Year
  const age = CurrAge.getFullYear() - birthAge.getFullYear() -
   (CurrAge.getMonth() < birthAge.getMonth() ||
    (CurrAge.getMonth() === birthAge.getMonth() && CurrAge.getDate()
    < birthAge.getDate()) ? 1 : 0);

    result.innerHTML ="Your Age Is " + age;


    if(age >= 40){
      alert("You are " + age + " years old\nYou are a old");
    }else if(age >=18){
      alert("you are" + age + " years old\nYou are a adult");
    }else{
      alert("you are" + age + " years old\nYou are a child");
    }
}