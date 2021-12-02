function generateName() {
    var date = document.getElementById("birthday").value;
    // Get the value of the selected button
    var gender = document.querySelector('input[name="gender"]:checked').value;

    //Convert date into a date object
    var bdate = new Date(date);

    var MM = bdate.getMonth()+1;
    var DD = bdate.getDate();
    var YY = bdate.getFullYear();

    console.log("Gender is "+gender);
    console.log("Date is "+ bdate);
    console.log("Month is "+MM);
    console.log("Day is "+DD);
    console.log("Year is "+YY);
  }