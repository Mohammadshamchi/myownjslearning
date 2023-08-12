var age = prompt("Please Enter your Age :")
var age = prompt("What is your age?");
// function checkDriverAge (age){
    
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }


// var checkDriverAge2 = function (age){
    
//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }


function checkDriverAge(age){
    
    if (Number(age) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off"
    } else if (Number(age) > 18) {
        return "Powering On. Enjoy the ride!"
    } else if (Number(age) === 18) {
        return"Congratulations on your first year of driving. Enjoy the ride!"
    }
    
}


function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}