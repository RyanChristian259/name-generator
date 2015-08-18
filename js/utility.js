//gets first letter from first name
//and first letter from last name
function getNameLetters(nameInput){
  if(nameInput === "charlie muttel"){
    alert('Proceed with caution! Turn up the volume, click the button and try to stay calm...');
    $('.easterIsland').html('<button type="button" style="background:blue; height:100px"><a href=\'http://chickenonaraft.com\' onclick="return popitup("http://chickenonaraft.com")">Click Me!</a></button>');
    }
    else{
    firstNameLetter = nameInput.trimLeft().slice(0, 1);
    firstNameLetter = firstNameLetter.toLowerCase();
    //get first letter of last name
      for(var i = 0;i < nameInput.length;i ++){
        if (nameInput[i] === ' '){
          for(var j = i; j < (nameInput.length + i); j++){
            lastNameLetter = nameInput[j + 1];
            lastNameLetter = lastNameLetter.toLowerCase();
            break;
        }
       }
     }
   }
  }

//matches first name letter to name key
function matchFirstNameToKey(firstNameLetter, selectedKey){
  firstName = selectedKey[firstNameLetter];
  return firstName;
  }

//matches last name letter to name key
function matchLastNameToKey(lastNameLetter, selectedKey){
  lastName = selectedKey[lastNameLetter];
  return lastName;
  }








