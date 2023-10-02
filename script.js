const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const specialCharacters = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','/',']','^','_','`','{','|','}','~'];
const numeric = ['0','1','2','3','4','5','6','7','8','9'];

//takes users criteria and passes into genPassword. concatenates all characters into array then randomly selects character based on length
function genPassword (passLength, upper, lower, special, numeric) {
    var allSelectedChars;
    var password = '';

    //if the user chooses no characters, they need to try again
    if (!upper && !lower && !special && !numeric) {
        alert("Your password needs to consist of something! Try again.");
    }

    //(too) lengthy if/then block that determines all possibilities of which characters to use. (Can we do something more efficient to cover all possibilities... IDK?)
    //did I even cover all the cases? :0
    if (upper && lower && special && numeric) {
        allSelectedChars = upperCase.concat(lowerCase, specialCharacters, numeric);
    } else if (upper && !lower && special && numeric) {
        allSelectedChars = upperCase.concat(specialCharacters, numeric);
    } else if (upper && !lower && !special && numeric) {
        allSelectedChars = upperCase.concat(numeric);
    } else if (upper && !lower && !special && !numeric) {
        allSelectedChars = upperCase;
    } else if (upper && lower && !special && numeric) {
        allSelectedChars = upperCase.concat(lowerCase, numeric);
    } else if (upper && lower && special && !numeric) {
        allSelectedChars = upperCase.concat(lowerCase, specialCharacters);
    } else if (upper && !lower && special && !numeric) {
        allSelectedChars = upperCase.concat(specialCharacters);
    } else if (!upper && lower && special && numeric) {
        allSelectedChars = lowerCase.concat(specialCharacters, numeric);
    } else if (!upper && !lower && special && numeric) {
        allSelectedChars = specialCharacters.concat(numeric);
    } else if (!upper && !lower && !special && numeric) {
        allSelectedChars = numeric;
    } else if (!upper && lower && !special && numeric) {
        allSelectedChars = lowerCase.concat(numeric);
    } else if (!upper && lower && special && !numeric) {
        allSelectedChars = lowerCase.concat(specialCharacters);
    } else if (!upper && !lower && special && !numeric) {
        allSelectedChars = specialCharacters;
    }
    
    //uses all selected characters in a concatenated array to choose random characters based in length parameter
    for (i=0;i<passLength;i++){
        password += allSelectedChars[Math.floor(Math.random()*allSelectedChars.length)];
    }

    return password;
}

//prompts user on which characters to use, then calls genPassword based on criteria
function chooseCharacters() {
    var length = prompt("Choose a length for your password (8-128 characters)");
    while (length < 8 || length > 128) {
        length = prompt("Please choose a valid length (8-128 characters)");
    }
    var upper = confirm("Would you like uppercase characters?");
    var lower = confirm("Would you like lowercase characters?");
    var special = confirm("Would you like special characters?");
    var numeric = confirm("Would you like numbers?")
    
    document.getElementById("new-password").innerHTML=genPassword(length, upper, lower, special, numeric);
}