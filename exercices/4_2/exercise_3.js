let n = 5;
let string = null;

for (let index = 5; index > 0; index -= 1) {   //5
  string = '';
  
  for (let i = 1; i <= 5; i += 1) {         //4
    if (i >= index) {
      string = string + '*';
    }
    else {
      string = string + ' ';
    }
    
  }
  console.log(string);

}
