function formatWords(words){
    if (words === null||words.length <= 0){return ""};
    let filterArr = words.filter(x => x);
    let answer = (filterArr.length >= 1) ? filterArr.join(", ").replace(/,(?=[^,]*$)/,' and') : filterArr.join(" and ");
    return answer;
    }