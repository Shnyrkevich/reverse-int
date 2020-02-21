module.exports = function reverse (n) {
  let strNumber = String(n);
  let rever = "";
  for(let i = strNumber.length-1; i >= 0; i--){
      rever += strNumber[i];
  }
  return parseInt(rever);
}
