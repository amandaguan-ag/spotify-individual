// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function includesRarestLetter(word) {
    if (word.toLowerCase().includes("q")) {
      return true;
    }
    return false;
  }

  function includeOffensive(text) {
    const offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    if (text.toLowerCase().includes(offensiveWord)) {
      return true;
    }
    return false;
  }
  includeOffensive("There are 17 zoinks.");

  function omitOffensive(text) {
    const textArray = text.split(" ");
    const offensiveWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    for (i = 0; i < textArray.length; i++) {
      if (offensiveWord.includes(textArray[i])) {
        delete textArray[i]
        console.log(textArray);
    } else {
        console.log("There is no offensive word");
      }
    }
  }
    omitOffensive("There are 17 zoinks.");