function findLongestWord(str) {
    var strSplit = str.split(" ")
    let longestword = 0;
 
    for (let i = 0; i <strSplit.length; i++){
        if(strSplit[i].length > longestword){
            longestword = strSplit[i].length
        }
    }
    return longestword;
  }
//   findLongestWord("The quick brown fox jumped over the lazy dog")
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));