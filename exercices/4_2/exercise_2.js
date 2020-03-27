let n = 5;
let string = null;

for (let i = 0; i < n; i+=1) {
  let string = "";

  for (let index = 0; index <= i; index+=1) {
    string = string + '*'
    
  }
  console.log(string);
  
}