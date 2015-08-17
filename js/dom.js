$(document).on('ready', function() {

  //nameInput stores the user's entered name
  //entered in the DOM
  $('form').on('submit', function(e){
    //clear previous name and get name from DOM
    $('.yourNewName').html('');
    e.preventDefault();
    var nameInput = $('.name').val();



   var funnyName = $("#selectNameArray option:selected").val();
   var firstName;
   var lastName;
   for (var i = 0; i < allKeys.length; i++) {
    if (funnyName === allKeys[i].name){
      firstName1 = allKeys[i].keys[0][0];
      lastName1 = allKeys[i].keys[1][0];


    var selectedVal = $("#selectNameArray option:selected").text();
    }
   }


  //call getNameLetters to get info from DOM
  getNameLetters(nameInput);
  // call match functions to make new names
  var newFirstName = matchFirstNameToKey(firstNameLetter, firstName1);
  var newLastName = matchLastNameToKey(lastNameLetter, lastName1);
  newName = (newFirstName + ' ' +  newLastName);
   $('.yourNewName').append(newName);
   //append names to name list
   $('.nameResults').prepend('Your ' + selectedVal + ' is ' + newName + '<br>');
  });//end of "on submit" function


});//document ready
