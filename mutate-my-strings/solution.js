function mutateMyStrings(stringOne, stringTwo){
  let arrOne = stringOne.split('');
  let arrTwo = stringTwo.split('');
  let answer = [arrOne.join('')];
  for (let i = 0; i < arrOne.length; i++){
    if (arrOne[i] !== arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      answer.push(arrOne.join(''));
    };
  };
  return answer.join('\n')+'\n';
}