function generateName() {
    var date = document.getElementById("birthday").value;
    var list_gender = document.getElementsByName("gender");
    // Get the value of the selected button
    var gender = document.querySelector('input[name="gender"]:checked').value;
    // for(i=0;i<=list_gender.length;i++){
    //   if(list_gender[i].ariaChecked){
    //     var gender = list_gender[i].value;
    //   }
    // }
    console.log("Datetetet"+gender);
  }