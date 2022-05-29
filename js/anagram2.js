exports.anagramsFor = function(word, listOfWords) {
    // anagramsFor = function(word, listOfWords){
    //sorted word in alpha order
    let sortedWord = word.split('')
    sortedWord.sort(function (a,b){
        if(a < b){return -1}
        if(a > b){return 1}
        if(a == b){return 0}
    })
    sortedWord = sortedWord.join('')
    //made object with word as key and sorted word as value
    let wordListObj ={}
    for(let j = 0; j < listOfWords.length; j++){
        if(!wordListObj.hasOwnProperty(listOfWords[j])){
            wordListObj[listOfWords[j]] = listOfWords[j].split('').sort(function (a,b){
                if(a < b){return -1}
                if(a > b){return 1}
                if(a == b){return 0}
            }).join('')
        }
    }
    // console.log(wordListObj)
    let wordListArr = Object.entries(wordListObj)
    // console.log(wordListArr)

    //compare sortedWord to possible anagram
    let arrOfAnograms = []
    for(let k = 0; k < wordListArr.length; k++){
        if(wordListArr[k][1] === sortedWord){
            arrOfAnograms.push(wordListArr[k][0])
        }
    }
    // console.log(arrOfAnograms)
    return arrOfAnograms

};

// console.log(anagramsFor("saltier", ["cognac", "saltier", "realist", "retails"]))