In this project, I implemented 3 different js functions: getOptions, getRandom, and generatePassword.
#getOptions
For the getOptions function, I prompted the user about how many characters they wanted for their password and made sure it met requirements with special cases. I added confirm functions to determine which character types the user wanted and made sure they picked at least 1. Then I created a list of variables under a variable options in order to call them into generate password later on. 
#getRandom
getRandom generates a random element inside an array and returns the element, which allows for complete random password.
#generatePassword
For generatePassword, there had to be different restrictions applied. First of all, all the character types have to be used, so I added a guarantee array to get a random element from each character type chosen. Then I added a possible array to allow random choices for the other elements. Using if statements, I was able to create both arrays and then recall them when making the password. An array called result was made to combine all the elements inside to create the final password. Using for statements, I was able to create a random password and then add the guaranteed character types inside by changing the element at certain index.
To start all this code, the generate button was formed and if clicked, it would run the writePassword function, which will change the text at the id password to match the random password generated.
