const name = "Bobby";
let num = 100;
var wizard = "High";

if (num > 10) {
  let num = 110;
  var wizard = "Low!";

  console.log("Let_inside", num);
  console.log("Var_inside", wizard);
}

console.log("Let_Outside", num);
console.log("Var_Outside", wizard);
