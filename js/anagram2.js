// exports.anagramsFor = function(word, listOfWords) {
    anagramsFor = function(word, listOfWords){
        //sorted word in alpha order
    let sortedWord = word.split('')
    sortedWord.sort(function (a,b){
        if(a < b){return -1}
        if(a > b){return 1}
        if(a == b){return 0}
    })
    sortedWord = sortedWord.join('')
    // sorted list of words in alpha order
    for(let i = 0; i < listOfWords.length; i++){
        listOfWords[i] = listOfWords[i].split('')
        listOfWords[i] = listOfWords[i].sort(function (a,b){
            if(a < b){return -1}
            if(a > b){return 1}
            if(a == b){return 0}
        })
        listOfWords[i] = listOfWords[i].join('')
    }
    //compare strings
    let anagramArray = []
    for(let k = 0; k < listOfWords.length; k++){
        if(sortedWord == listOfWords[k]){
            anagramArray.push(listOfWords[k])
        }
    }
    return anagramArray
};

console.log(anagramsFor("saltier", ["cognac", "saltier", "realist", "retails"]))