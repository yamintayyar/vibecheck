
function tokenize(str) {
    var arr = [];
    var j = 0; //keeps track of the position of the first character in the sentence

    for (var i = 0; i < str.length; i++) {
        if (".?!:;".indexOf(str[i]) >= 0) {
            arr.push(str.slice(j, i + 1));
            j = i + 1;
        }

    }
    
    console.log(arr);
};

tokenize("hei. er du ? gey?");