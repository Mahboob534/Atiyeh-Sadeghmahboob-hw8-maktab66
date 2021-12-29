const ingExtractor = string => {
    return string
      .replace(/[^a-zA-Z ]/g, "")
      .split(" ")
      .filter((word) => {
        let temp = word.toLowerCase().replace("ing", "");
        if (temp.length === temp.replace(/[aeiou]/g, "").length) {
          return false;
        }
        if (word.toLowerCase().includes("ing")) {
          return true;
        }
      });
  }
  console.log(ingExtractor("coming bringing Letting sing"))
  console.log(ingExtractor("going Ping, king sHrink dOing"))
  console.log(ingExtractor("zing went ring, ding wing SINk"))