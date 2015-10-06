// String Class - prototype methods that extend String Class
// Hannah Cherono Koske

// Checks whether the String contains vowels(a,e,i,o,u)
// HOW: Using regular expression /[a|e|i|o|u]/ig
String.prototype.hasVowels = function() {
  return /[a|e|i|o|u]/ig.test(this);
};

// Converts the String to upper case
// HOW: Converts only lower case letters to upper case, check omits non-alphabetical
//      characters and uppercase letters
String.prototype.toUpper = function() {
  var result = "",
    string = this.trim();
  for (var i = 0, j = string.length; i < j; i++) {
    if (/[a-z]/g.test(string[i])) {
      result = result.concat(String.fromCharCode(string.charCodeAt(i) - 32));
    } else {
      result = result.concat(string[i]);
    }
  }
  return result.valueOf();
};

// Converts the String to lower case
// HOW: Converts only upper case letters to lower case, check omits non-alphabetical
//      characters and lower case letters
String.prototype.toLower = function() {
  var result = "",
    string = this.trim();
  for (var i = 0, j = string.length; i < j; i++) {
    if (/[A-Z]/g.test(string[i])) {
      result = result.concat(String.fromCharCode(string.charCodeAt(i) + 32));
    } else {
      result = result.concat(string[i]);
    }
  }
  return result.valueOf();
};

// Converts the String to sentence case
// HOW: Uses toUpper to convert the first letter to upper case and uses to lower to
//      convert the rest of the string to lower case.
String.prototype.ucFirst = function() {
  var string = this.trim(),
    result = "";
  if (/[a-z]/g.test(string[0])) {
    result = string[0].toUpper();
  } else {
    result = string[0];
  }
  if (string[1] === ' ') {
    var spaceCount = string.indexOf(string.substr(1).trim()) - 1;
    for (var i = 0; i < spaceCount; i++) {
      result = result.concat(' ');
    }
  }
  result = result.concat(string.substr(1).toLower());
  return result.valueOf();
};

// Checks whether the String is a question i.e ends with a question mark
// HOW: uses regular expression /^.*\?$/
String.prototype.isQuestion = function() {
  return /^.*\?$/.test(this.trim());
};

// Coverts the String to an array of its constituent words
// HOW: By splitting the String along its space characters and removes empty string words
String.prototype.words = function() {
  var removeEmptyStrings = function(words) {
    words.sort();
    if (words[0] === '') {
      words.splice(0, words.lastIndexOf('') + 1);
    }
    return words;
  };
  return removeEmptyStrings(this.trim().replace(/[\W]/gi, ' ').split(/[\s]/));
};

// Counts the number of words in the String
// HOW: Uses words() method to get the array of words and returns its length
String.prototype.wordCount = function() {
  return this.trim().words().length;
};

// Converts the number String into a string representation of it as a currency
// HOW: Splits the number into threes or less(for remainders) using regular expression
//      /\B(?=(\d{3})+(?!\d))/g and places a comma between the divisions.
//      Places the fractional part to two decimal places.
//      Returns NaN if the String is not a number string
String.prototype.toCurrency = function() {
  if (!isNaN(parseInt(this))) {
    if (/[\.]/.test(this)) {
      return this.substring(0, this.indexOf(".")).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + this.substr(this.indexOf("."), 3);
    } else {
      return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  } else {
    return NaN;
  }
};

// Converts the currency respresenation of a number string to a number
// HOW: Replaces the comma in the string with an empty string and
//      converts it to a number.
//      Returns NaN if the String is not a number string.
String.prototype.fromCurrency = function() {
  return Number(this.replace(/\,+/g, "").toString());
};
