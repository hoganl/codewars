function capitalize(s){
    let capArr = [];
    let evenArr = s.split('');
    let oddArr = s.split('');
    for (let i = 0; i < evenArr.length; i++) {
      if (i % 2 === 0){
       evenArr[i] = evenArr[i].toUpperCase();
      }
    }
    evenArr.join('');
    capArr.push(evenArr.join(''));
    
    for (let i = 0; i < oddArr.length; i++) {
      if (i % 2 === 1){
       oddArr[i] = oddArr[i].toUpperCase();
      }
    }
    oddArr.join('');
    capArr.push(oddArr.join(''));
      
    return capArr;
  };