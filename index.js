// code your solution here


function superbowlWin(array) {
    let resultt = array.find(record => {
        if (record["result"] === "W") {
            return record;
        };
    });
    if (resultt != undefined) {
        return resultt.year
    };
    // return undefined
}



// const ages = [3, 10, 18, 20];

// function checkAge(age) {
//   return age > 18;
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML = ages.find(checkAge);
// }