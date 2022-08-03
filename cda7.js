// predict the output

var msg = 'codingdojo';

for (var x = -2; x < msg.length - 2; x += 2) {
  if (msg.length == 8) {
    for (var i = 2; i < 8; i++) {
      console.log(i);
    }
  } else {
    for (var i = msg.length; i > (msg.length - 4); i -= 3) {
      console.log(i);
    }
  }
}

// A: 10, 7, 10, 7, 10, 7, 10, 7, 10, 7