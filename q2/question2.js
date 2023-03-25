function calculateNewArray(a) {
    let new_a = [];
    let sum = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      sum += a[i];
      new_a[i] = sum;
    }
    return new_a;
  }
    
const a = [10, 20, 30, 40, 50];
const new_a = calculateNewArray(a);
console.log(new_a); 