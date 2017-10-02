function findShortestWordAmongMixedElements(arr) {

    if (arr.length === 0){
        return ""; }
        
    for(var i = 0; i < arr.length; i++){  
        if (typeof arr[i] == "number"){
            return "";
        }
    }

    var str = [];

    for(i = 0; i < arr.length; i++){
        if (typeof arr[i] == "string"){
        str.push(arr[i]);  
        }
    }
    
    var shorty = [];
    for(i = 0; i < str.length; i++) {
        if (str[i] < str[i+1]){
            shorty.push(str[i]);
        }
    }
    return shorty;
    }