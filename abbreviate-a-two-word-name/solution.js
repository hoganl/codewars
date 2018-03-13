function abbrevName(name){

    let splits = name.split(' ');
    let initial1 = splits[0][0];
    let initial2 = splits[1][0];
    return `${initial1}.${initial2}`.toUpperCase();
  
  }