var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function getOptions() {
    var length = parseInt(prompt('How many characters do you want in password?'));
    if (Number.isNaN(length)) {
      alert('Password length must be provided as a number');
      return null;
    }
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return null;
    }
    if (length > 128) {
      alert('Length must less than 129 characters');
      return null;
    }
    var special = confirm('Include special characters?');

    var num = confirm('Include numeric characters?');
  
    var lower = confirm('Include lowercase characters?');
  
    var upper = confirm('Include uppercase characters?');
    
    if (special === false && num === false && lower === false && upper === false) {
      alert('Select at least one character type');
      return null;
    }

    var options = {
      length: length,
      special: special,
      num: num,
      lower: lower,
      upper: upper,
    };
    return options;
  }
  
  function getRandom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    var element = arr[index];
    return element;
  }
  
  function generatePassword() {
    var select = getOptions();

    var result = [];
  
    var possible = [];
  
    var guaranteed = [];
  
    if (!select) return null;

    if (select.special) {
      possible = possible.concat(specialCharacters);
      guaranteed.push(getRandom(specialCharacters));
    }

    if (select.num) {
      possible = possible.concat(numericCharacters);
      guaranteed.push(getRandom(numericCharacters));
    }
  
    if (select.lower) {
      possible = possible.concat(lowerCasedCharacters);
      guaranteed.push(getRandom(lowerCasedCharacters));
    }
  
    if (select.upper) {
      possible = possible.concat(upperCasedCharacters);
      guaranteed.push(getRandom(upperCasedCharacters));
    }
  
    for (var i = 0; i < select.length; i++) {
      var choice = getRandom(possible);
  
      result.push(choice);
    }
  
    for (var i = 0; i < guaranteed.length; i++) {
      result[i] = guaranteed[i];
    }
  
    return result.join('');
  }  

var generateBtn = document.querySelector('#generate');

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);
  
