
 function ascii(string)
 {
 let sum = 0;
    for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-zA-Z]/)) {
        sum += string.charCodeAt(i);
      }
    }

    return sum
  }

const string = 'App'

console.log(ascii(string));
