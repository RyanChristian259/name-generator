#Name Generator App

##A Project by Ryan Ciecalone

###Objective and description
The objective of Name Generator is to create a fun app that allows the end user to enter their name and select from several categories that will generate a new themed name based on entered value.

For example: If I tell the app that I want a pirate name and I enter "Ryan Ciecalone" it might return "Rrrrrgh Captain!" or "Pirate Ferdinand the Fearless."

I also have a stretch goal of testing a generated name to see if the name is available as a domain name.
More than one list.  Pig latin type naming...  Possibly anagram solver for names.

###A list of technologies that you plan to use
-Bootstrap and CSS structure and styling.
-HTML for text content.
-Javascript for the name generator program and DOM manipulation.
 -TDD with Jasmine, JSON, AJAX, and (possibly) a domain name API.

###A well-defined and written-out feature list

###Project Requirements

 Who this product for? What problem does it attempt to solve?
     Who - For all ages, fun. Provides entertainment. Can be used a revenue generator through advertising or domain name sales.
  May also give ideas for a legitimate business name.
<<<<<<< HEAD

###Interactivity
- Interactivity is accomplished when user selects a list, enters their name, and receives an answer returned to them.

////////////////////////////////////////////////
Start app by creating a place on the web page to enter names.

Create test key with a few pirate names.

Slice first letter off of first and last names.

Compare letters to list and output new name.

Check if name is available as a domain name.
Need help with purchasing your domain or building a site for it? Ask Ryan Christian Media!

Easter Egg = screen opens up and shows a game when a predesignated key name is entered. The key name will be a combination of the first name of a g11 student and the last name of another g11 student.

Have a create your own list section?

Credit to Sarah Turek as guest programmer

Create randomizer for middle names?

Male and female options?

Pull top hit pic from google?

Share on Facebook.

Email to your friends



********Revised function*********
  //gets first letter from first name
  //and first letter from last name
  function getNameLetters(nameInput){
    firstNameLetter = nameInput.trimLeft().split(' ')[0].slice(0, 1).toLowerCase();
    lastNameLetter = nameInput.split(' ')[1].slice(0, 1).toLowerCase();

// .replace(/^\s+|\s+$/gm,'');

    console.log(firstNameLetter + ' firstNameLetter');
    console.log(nameInput + ' nameInput');
    console.log(lastNameLetter + ' lastNameLetter');
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
=======
>>>>>>> 01a5a8e1b8d7e67559f111382c0c3cab132fd9d3
