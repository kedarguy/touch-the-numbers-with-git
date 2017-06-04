// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns a matrix with the requested dimensions, with random numbers at the rows*cols range
function getRandomNumsMatrix(rows, cols) {

    // Create an array of the numbers that we need for the mat
    var nums = []
    for (var n=1; n <= rows*cols; n++) {
        nums.push(n);
    }

    var mat = [];
    for (var i=0; i< rows; i++) {
        mat[i] = [];
        for (var j=0; j< cols; j++) {
            // get and remove a random element from the nums array
            var randIdx = getRandomIntInclusive(0, nums.length-1);
            mat[i][j] = nums.splice(randIdx, 1)[0];
        }
        
    }
    console.table(mat);
    return mat;




}