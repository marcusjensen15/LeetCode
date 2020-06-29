// Correct answers: (Extra candies)


// var kidsWithCandies = function(candies, extraCandies) {
//     let fun = Math.max(...candies);
//     let output = [];
//
//     candies.forEach(function(e){
//                     var temp = e + extraCandies;
//                     if (temp < fun) {output.push(false);}
//                     else {output.push(true)};
//     });
//
//
//     return output;
// };


// var smallerNumbersThanCurrent = function(nums) {
//
//     let output = [];
//
//     for(i=0; i<nums.length;i++){
//         counter = 0;
//         for(j=0;j<nums.length;j++){
//             if(nums[i] > nums[j]){
//                 counter += 1;
//             }
//         }
//         output.push(counter);
//     }
//     return output;
//
// };


var runningSum = function(nums) {

    let output = [];
    let counter = 0;

    for(i=0;i<nums.length;i++){
        if (nums[i-1] === "undefined"){
            counter = nums[i];
        }
        else {counter = counter + nums[i]}

        output.push(counter);
    }
    return output;
};
