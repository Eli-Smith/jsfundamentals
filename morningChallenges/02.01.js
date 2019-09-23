
        
        // SOLUTION
        
let sampleString = 'pig latin';

function pigLatin(str) {

    let wordsArr = str.split(" ");
    // split() method separates out string by word and returns them in an array and stores it in a new variable 'wordsArr'

    wordsArr.forEach((word, index) => {

        //taking the words our forEach method is looping over, and using the split method to separate it by individual characters
      
        let lettersArr = word.split('');

        while (lettersArr[0] !== "a" && lettersArr[0] !== 'e' && lettersArr[0] !== 'i' && lettersArr[0] !== 'o' && lettersArr[0] !== 'u'){
            lettersArr.push(lettersArr[0]);
            lettersArr.shift();
        }
        lettersArr.push('ay');
        wordsArr[index] = lettersArr.join('');
    });
    return wordsArr.join(' ')
}

let pigString = pigLatin(sampleString);
console.log(pigString);