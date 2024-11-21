const removeFromArray = function(array, ...theArgs) {

    for (const e of theArgs) {
        
        // get initial index 
        let indexOfInputArg = array.indexOf(e);

        // stops when indexOf() returns -1 (not found)
        while(indexOfInputArg !== -1) {
            array.splice(indexOfInputArg, 1);

            // after removal at the firs found index, start a new index search that matches input arg
            // at the current index
            indexOfInputArg = array.indexOf(e, indexOfInputArg);
        }
        console.log(array);
        // let indexOfObj = array.indexOf(sameNum);
        // array.splice(sameNum, 1);
    }
    
    return array;

}



// Do not edit below this line
module.exports = removeFromArray;
