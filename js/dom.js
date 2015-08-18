$(document).on( 'ready' , function() {
  //nameInput stores user's entered name
  $( 'form' ).on( 'submit' , function(e){
    //clear previous name and get new name from DOM
    $('.yourNewName').html('');
    e.preventDefault();
    var nameInput = $('.name').val();
    var selected = $("#selectNameArray option:selected").val();
    var firstName;
    var lastName;
     for (var i = 0; i < allKeys.length; i++) {
      if (selected === allKeys[i].name){
       firstName1 = allKeys[i].keys[0][0];
       lastName1 = allKeys[i].keys[1][0];
      //retrieve selection from drop down menu
       var selectedVal = $("#selectNameArray option:selected").text();
    }
   }

  //call getNameLetters to get userInputName from DOM
  getNameLetters(nameInput);
  // call match functions to make generated names
  var newFirstName = matchFirstNameToKey(firstNameLetter, firstName1);
  var newLastName = matchLastNameToKey(lastNameLetter, lastName1);
  newName = (newFirstName + ' ' +  newLastName);
  //append generated name to DOM
   $( '.yourNewName' ).append(newName);
   //append generated name to name list
   $( '.nameResults' ).prepend('Your ' + selectedVal + ' is ' + newName + '<br>');
   //clear name from name list
   $( ".clearButton" ).click(function() {
   $( ".nameResults" ).html('');
  });
 });//end of "on submit" function


});//document ready
