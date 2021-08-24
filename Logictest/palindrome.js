// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome
// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

function palindrome(input) {
    let newInput = input.toLowerCase();
    let temp = "";
  
    for (let i = newInput.length - 1; i >= 0; i--) {
      temp += newInput[i];
    }
  
    if (newInput === temp) {
      console.log("palindrome");
    } else {
      console.log("not palindrome");
    }
  }
  
  palindrome("Radar");
  palindrome("Malam");
  palindrome("Kasur ini rusak");
  palindrome("Ibu Ratna antar ubi");
  palindrome("Malas");
  palindrome("Makan Nasi Goreng");
  palindrome("Balonku ada lima");