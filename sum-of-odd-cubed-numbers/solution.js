function cubeOdd(arr) {
    let mapped = arr.map(x => x * x * x)
    if (mapped.includes(NaN) === true || arr.length === 0){return undefined};
    if (mapped.every(x => x % 2 === 0)){return 0};
    return mapped.filter(x => x & 1).reduce((acc, curr) => acc + curr);
  }