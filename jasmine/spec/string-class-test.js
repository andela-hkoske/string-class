describe("String Class", function() {
  // Tests for hasVowels()
  describe("HAS VOWELS - hasVowels()", function() {
    // Return type test
    describe("Should return a value of type Boolean", function() {
      it("Should return \"boolean\" for typeof(\"prototype\".hasVowels())", function() {
        expect(typeof("prototype".hasVowels())).toBe("boolean");
      });
    });

    // Functionality tests
    describe("Should take the String instance calling it and determine if it contains vowels.", function() {
      // True value tests
      describe("Should return true if the String contains a vowel(s).", function() {
        it("Should return true for \"Camel\"", function() {
          expect("Camel".hasVowels()).toBe(true);
        });
        it("Should return true for \"Queueing\"", function() {
          expect("Queueing".hasVowels()).toBe(true);
        });
      });

      // False value tests
      describe("Should return false if the String does not contain a vowel(s).", function() {
        it("Should return false for \"Sky\"", function() {
          expect("Sky".hasVowels()).toBe(false);
        });
        it("Should return false for \"122345\"", function() {
          expect("122345".hasVowels()).toBe(false);
        });
        it("Should return false for \"Twyndyllyngs *!#\"", function() {
          expect("Twyndyllyngs *!#".hasVowels()).toBe(false);
        });
      });
    });
  });

  // Tests for toUpper()
  describe("TO UPPER - toUpper()", function() {
    // Return type tests
    describe("Should return a value of type String", function() {
      it("Should return \"string\" for typeof(\"prototype\".toUpper())", function() {
        expect(typeof("prototype".toUpper())).toBe("string");
      });
    });

    // Functionality tests
    describe("Should convert the String instance calling it to uppercase.", function() {
      // Mixed case conversion tests
      describe("Should convert any String with different mixed cases to upper case ", function() {
        it("Should return \"IS THE PLAINTIFF HERE?\" for \"Is tHe PLAINtiff HeRe?\"", function() {
          expect("Is tHe PLAINtiff HeRe?".toUpper()).toBe("IS THE PLAINTIFF HERE?");
        });
        it("Should return \"FLABBERGASTED\" for \"fLaBbErGaStEd\"", function() {
          expect("fLaBbErGaStEd".toUpper()).toBe("FLABBERGASTED");
        });
        it("Should return \"BAROMETER\" for \"BAROmeter\"", function() {
          expect("BAROmeter".toUpper()).toBe("BAROMETER");
        });
      });

      // Lower case conversion tests
      describe("Should convert any String with all lower case letters to upper case ", function() {
        it("Should return \"MERCENERY\" for \"mercenery\"", function() {
          expect("mercenery".toUpper()).toBe("MERCENERY");
        });
      });

      // Non-alphabetical character conversion test
      describe("Should not alter non-alpahbetical characters i.e should return the characters as they are", function() {
        it("Should return \"122345\" for \"122345\"", function() {
          expect("122345".toUpper()).toBe("122345");
        });
        it("Should return \"$!@#$%A&B^C*D&(*&%*(\" for \"$!@#$%a&b^c*d&(*&%*(\"", function() {
          expect("$!@#$%a&b^c*d&(*&%*(".toUpper()).toBe("$!@#$%A&B^C*D&(*&%*(");
        });
      });
    });
  });

  // Tests for toLower()
  describe("TO LOWER - toLower()", function() {
    // Return type tests
    describe("Should return a value of type String", function() {
      it("Should return \"string\" for typeof(\"prototype\".toLower())", function() {
        expect(typeof("prototype".toLower())).toBe("string");
      });
    });

    //Functionality tests
    describe("Should convert the String instance calling it to lowercase.", function() {
      // Mixed case conversion tests
      describe("Should convert any String with different mixed cases to lower case ", function() {
        it("Should return \"glamorous!\" for \"glamOROUS!\"", function() {
          expect("glamOROUS!".toLower()).toBe("glamorous!");
        });
        it("Should return \"belligerent\" for \"BeLlIgErEnT\"", function() {
          expect("BeLlIgErEnT".toLower()).toBe("belligerent");
        });
        it("Should return \"propeller\" for \"PROPeller\"", function() {
          expect("PROPeller".toLower()).toBe("propeller");
        });
      });

      // Upper case conversion tests
      describe("Should convert any String with all lower case letters to upper case ", function() {
        it("Should return \"lucrative*\" for \"LUCARTIVE*\"", function() {
          expect("LUCRATIVE*".toLower()).toBe("lucrative*");
        });
      });

      // Non-alphabetical character conversion tests
      describe("Should not alter non-alpahbetical characters i.e should return the characters as they are", function() {
        it("Should return \"122345\" for \"122345\"", function() {
          expect("122345".toLower()).toBe("122345");
        });
        it("Should return \"$!@#$%a&b^c*d&(*&%*(\" for \"$!@#$%A&B^C*D&(*&%*(\"", function() {
          expect("$!@#$%A&B^C*D&(*&%*(".toLower()).toBe("$!@#$%a&b^c*d&(*&%*(");
        });
      });
    });
  });

  // Tests for ucFirst()
  describe("UC FIRST - ucFirst()", function() {
    // Return Type tests
    describe("Should return a value of type String", function() {
      it("Should return \"string\" for typeof(\"prototype\".ucFirst())", function() {
        expect(typeof("prototype".ucFirst())).toBe("string");
      });
    });

    // Functionality tests
    describe("Should convert the first letter of the String instance calling it to uppercase.", function() {
      // Mixed case conversion tests
      describe("Should convert any String with different mixed cases to sentence case", function() {
        it("Should return \"Hellebore!\" for \"hElLeBoRe!\"", function() {
          expect("hElLeBoRe!".ucFirst()).toBe("Hellebore!");
        });
        it("Should return \"Encephalon - 112*\" for \"encePHALON - 112*\"", function() {
          expect("encePHALON - 112*".ucFirst()).toBe("Encephalon - 112*");
        });
        it("Should return \"She sells seashells by the seashore\" for \"sHe SELLS sEAshELLS By ThE SEashORE\"", function() {
          expect("sHe SELLS sEAshELLS By ThE SEashORE".ucFirst()).toBe("She sells seashells by the seashore");
        });
        it("Should return \"I scream, you scream, we all scream for ice cream\" for \"i SCreaM, YoU scREAm, We aLL sCREAM fOR ICE creaM\"", function() {
          expect("i SCreaM, YoU scREAm, We aLL sCREAM fOR ICE creaM".ucFirst()).toBe("I scream, you scream, we all scream for ice cream");
        });
        it("Should return \"I     went to the market\" with mutliple spaces for \"i     WeNt tO ThE MaRkEt\"", function() {
          expect("i     WeNt tO ThE MaRkEt".ucFirst()).toBe("I     went to the market");
        });
      });
    });

    // Non-alphabetical character conversion tests
    describe("Should not alter non-alpahbetical characters i.e should return the characters as they are", function() {
      it("Should return \"122345\" for \"122345\"", function() {
        expect("122345".ucFirst()).toBe("122345");
      });
      it("Should return \"$!@#$%a&b^c*d&(*&%*(\" for \"$!@#$%A&B^C*D&(*&%*(\"", function() {
        expect("$!@#$%A&B^C*D&(*&%*(".ucFirst()).toBe("$!@#$%a&b^c*d&(*&%*(");
      });
    });

    // Trailing whitespaces tests
    describe("Should convert a String to sentence case even with trailing whitespaces", function() {
      it("Should return \"Yesterday was a good day.\" for \"      yesterday was a good day.    \")", function() {
        expect("      yesterday was a good day.    ".ucFirst()).toBe("Yesterday was a good day.");
      });
    });
  });

  // Tests for isQuestion()
  describe("IS QUESTION - isQuestion()", function() {
    // Return type tests
    describe("Should return a value of type Boolean", function() {
      it("Should return \"boolean\" for typeof(\"prototype\".isQuestion())", function() {
        expect(typeof("prototype".isQuestion())).toBe("boolean");
      });
    });

    // Functionality tests
    describe("Should test whether a string is a question (ending with a question mark).", function() {
      // True value tests
      describe("Should return true if the last non-whitespace character of the String is a question mark", function() {
        it("Should return true for \"   How can a clam cram in a clean cream can?       \"", function() {
          expect("How can a clam cram in a clean cream can?       ".isQuestion()).toBe(true);
        });
      });

      // False value tests
      describe("Should return false if the last non-whitespace character of the String is not a question mark", function() {
        it("Should return false for \"Hey there!\"", function() {
          expect("Hey there!".isQuestion()).toBe(false);
        });
        it("Should return false for \"What is the meaning of life? I don't know.\"", function() {
          expect("What is the meaning of life? I don't know.".isQuestion()).toBe(false);
        });
        it("Should return false for \"?12213?21321 323sdsdsa?ad?sds \" with mutliple question marks", function() {
          expect("?12213?21321 323sdsdsa?ad?sds".isQuestion()).toBe(false);
        });
      });
    });
  });

  // Tests for toWords()
  describe("WORDS - words()", function() {
    // Return Type Tests
    describe("Should return a value of type Object", function() {
      it("Should return \"boolean\" for typeof(\"This is a prototyped method\".words())", function() {
        expect(typeof("This is a prototyped method".words())).toBe("object");
      });
    });
    describe("Should return a value of instance Array", function() {
      it("Should return true for \"This is a prototyped method\".words() instanceof Array", function() {
        expect("This is a prototyped method".words() instanceof Array).toBe(true);
      });
    });

    // Functionality tests
    // Unpunctuated string tests
    describe("Should return a list of the words in the string, as an Array.", function() {
      it("Should return [\"Bananas\",\"are\",\"yellow.\"] with multiple spaces for \"   Bananas      are         yellow.\"", function() {
        expect("   Bananas      are         yellow.".words()).toEqual(["Bananas", "are", "yellow"]);
      });
      it("Should return [\"1\",\"2\",\"3\",\"one\",\"two\",\"three\"] for \"1 2 3 one two three\"", function() {
        expect("1 2 3 one two three".words()).toEqual(["1", "2", "3", "one", "three", "two"]);
      });
      it("Should return [] for \"\"", function() {
        expect("".words()).toEqual([]);
      });
    });

    // Punctuated string tests
    describe("Should return a list of the words in the string, as an Array and remove punctuation.", function() {
      it("Should return [ 'Are', 'No', 'Really', 'That', 'What', 'sure', 'you' ] for \"What! No! Really? Are you sure? That @#@%@$#&*%##%*&*^^@##@$^\"", function() {
        expect("What! No! Really? Are you sure? That @#@%@$#&*%##%*&*^^@##@$^".words()).toEqual(['Are', 'No', 'Really', 'That', 'What', 'sure', 'you']);
      });
    });
  });

  // Tests for wordCount()
  describe("WORD COUNT - wordCount()", function() {
    // Return Type Tests
    describe("Should return a value of type number", function() {
      it("Should return \"number\" for typeof(\"This is a prototyped method\".wordCount())", function() {
        expect(typeof("This is a prototyped method".wordCount())).toBe("number");
      });
    });

    // Functionality tests
    // Unpunctuated string tests
    describe("Should return the number of words in the string.", function() {
      it("Should return 3 for \"   Bananas      are         yellow.\"", function() {
        expect("   Bananas      are         yellow.".wordCount()).toEqual(3);
      });
      it("Should return 6 for \"1 2 3 one two three\"", function() {
        expect("1 2 3 one two three".wordCount()).toEqual(6);
      });
      it("Should return 0 for \"\"", function() {
        expect("".wordCount()).toEqual(0);
      });
    });

    // Punctuated string tests
    describe("Should return the length of the array of words without punctuation", function() {
      it("Should return 7 for \"What! No! Really? Are you sure? That @#@%@$#&*%##%*&*^^@##@$^\"", function() {
        expect("What! No! Really? Are you sure? That @#@%@$#&*%##%*&*^^@##@$^".wordCount()).toEqual(7);
      });
    });
  });

  // Tests for toCurrency()
  describe("TO CURRENCY - toCurrency()", function() {
    // Return type test
    describe("Should return a value of type string", function() {
      it("Should return string for typeof('1234567.89'.toCurrency())", function() {
        expect(typeof('1234567.89'.toCurrency())).toBe("string");
      });
    });

    // Functionality tests
    describe("Should returns a currency representation of the String.", function() {
      // Number strings conversion tests
      it("Should return \"12,345,678\" for \"123455678\"", function() {
        expect("12345678".toCurrency()).toEqual("12,345,678");
      });
      it("Should return \"12,345,678.91\" for \"123455678.910\"", function() {
        expect("12345678.910".toCurrency()).toEqual("12,345,678.91");
      });
    });

    // NaN string conversion tests
    describe("Should returns NaN for a non-number string conversion.", function() {
      it("Should return NaN for \"Make me into money\"", function() {
        expect("Make me into money".toCurrency()).toEqual(NaN);
      });
    });
  });

  // Tests for fromCurrency()
  describe("FROM CURRENCY - fromCurrency()", function() {
    // Return type test
    describe("Should return a value of type number", function() {
      it("Should return number for typeof('1,234,567.89'.toCurrency())", function() {
        expect(typeof('1,234,567.89'.fromCurrency())).toBe("number");
      });
    });

    // Functionality tests
    describe("Should returns a number representation of the Currency String.", function() {
      // Number strings conversion tests
      it("Should return 123455678 for \"12,345,678\"", function() {
        expect("12,345,678".fromCurrency()).toEqual(12345678);
      });
      it("Should return 123455678.91 for \"12,345,678.91\"", function() {
        expect("12,345,678.91".fromCurrency()).toEqual(12345678.91);
      });

    });

 // NaN string conversion tests
    describe("Should returns NaN for a non-number string conversion.", function() {
      it("Should return NaN for \"Make me into money\"", function() {
        expect("Make me into money".fromCurrency()).toEqual(NaN);
      });
    });

  });

});
