function insertDash(num) {
  let numArr = num.toString().split('');
  let flag = false;
   for (let i=0; i < numArr.length; i++) {
    if (numArr[i]%2===0){
    flag = false;
    } else if (flag === true){
      numArr.splice(i, 0, '-');
      i++;
      continue;
    } else{
      flag = true;
    }
  }
    return numArr.join('');
}  