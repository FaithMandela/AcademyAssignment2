function generateName() {
    var date = document.getElementById("birthday").value;
    // Get the value of the selected button
    var gender = document.querySelector('input[name="gender"]:checked').value;

    //Convert date into a date object
    var bdate = new Date(date);

    var MM = bdate.getMonth()+1;
    var DD = bdate.getDate();
    var YY1 = bdate.getFullYear();
    var YY = YY1.toString().substr(-2);
    //Get century digits
    var CC = Math.floor(YY1/100);

    //Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    //console.log(new Date().getFullYear().toString().substr(-2));
    var dayBorn = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

    console.log("Gender is "+gender);
    console.log("Date is "+ bdate);
    console.log("Month is "+MM);
    console.log("Day is "+DD);
    console.log("Year is "+YY);
    console.log("YY1 is "+YY1)
    console.log("Century is "+CC);
    console.log("Day born is "+dayBorn);
  }