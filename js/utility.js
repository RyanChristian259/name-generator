  //gets first letter from first name
  //and first letter from last name
  function getNameLetters(nameInput){
    firstNameLetter = nameInput.split(' ')[0].slice(0, 1).toLowerCase();
    lastNameLetter = nameInput.split(' ')[1].slice(0, 1).toLowerCase();
    return firstNameLetter, lastNameLetter;
  }

  function matchFirstNameToKey(firstNameLetter, selectedKey){
    firstName = selectedKey[firstNameLetter];
    return firstName;
  }

  function matchLastNameToKey(lastNameLetter, selectedKey){
    lastName = selectedKey[lastNameLetter];
    return lastName;
  }




