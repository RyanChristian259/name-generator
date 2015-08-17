  //gets first letter from first name
  //and first letter from last name
  function getNameLetters(nameInput){
    firstNameLetter = nameInput.trimLeft().slice(0, 1);
    firstNameLetter = firstNameLetter.toLowerCase();
    //get first letter of last name
    for(var i = 0;i < nameInput.length;i ++){
      if (nameInput[i] === ' '){
        for(var j = i; j < (nameInput.length + i); j++){
          lastNameLetter = nameInput[j + 1];
          lastNameLetter = lastNameLetter.toLowerCase();
          // console.log(i, j);
          break;
       }
     }
   }
  }

  function matchFirstNameToKey(firstNameLetter, selectedKey){
    firstName = selectedKey[firstNameLetter];
    return firstName;
  }

  function matchLastNameToKey(lastNameLetter, selectedKey){
    lastName = selectedKey[lastNameLetter];
    return lastName;
  }









