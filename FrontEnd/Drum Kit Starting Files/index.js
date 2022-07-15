// document.querySelector("button").addEventListener("click", handleClicked)  // we aren't calling the `handleClicked` fn. with parenthesis. If we do so, the function will get called straightaway. But we have to call the function on button click. So, we don't use parenthesis in such conditions of calling function.

// function handleClicked () {
//     alert("I got clicked")
// }


// Keyboard event listener for detecting key pressed...........................................................

// document.addEventListener("keydown", function (event) {
//     console.log(event.key);
// })

/*
// behined the scenes of `addEventListener` method...........................................................................................
function addAnotherEventListener(typeOfEvent, callBack) {
    var eventThatHappened = {
        eventType : "keyPressed",
        key : "w",
        eventDuration: 2
    }

    if(eventThatHappened.eventType === typeOfEvent) {
        callBack(eventThatHappened)
    }
}

// function calling.
addAnotherEventListener("keyPressed",function(event) {
    console.log(event)
})
*/


// Basic calculator project............................................................................................
/*
function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 > num2 ? num1 - num2 : num2 - num1 ;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return (num1>num2 && num2!==0) ? num1/num2 : num2/num1;
}

function calculator(num1, num2, operator) {
    return operator(num1,num2);
}


calculator(3,4,add)
*/




// Concept of constructor function..........    

// function Employee(name, age, yearsOfExperience) {
//     this.name = name;
//     this.age = age;
//     this.yrs = yearsOfExperience
//     this.clean = function () {
//         alert("cleaning in progress.......")
//     }
// }

// var employee1 = new Employee('Anupam', 24, 2);







// Drum Kit project..........................................................................................
function makeSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log(key);
    }
}


function makeButtonAnimation(currentKey) {
    document.querySelector(`.${currentKey}`).classList.add("pressed");
    setTimeout(function() {
        document.querySelector(`.${currentKey}`).classList.remove("pressed")
    }, 100);
}


// Drum Kit project using MouseClick event.....................................................................................
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(`${document.querySelectorAll(".drum")[i].textContent} got clicked`);
        // console.log(document.querySelector(".drum"))
        // console.log(`${this.innerHTML} got clicked`);
        makeSound(this.innerHTML);
        makeButtonAnimation(this.innerHTML)
    });
}



// Drum Kit project using keyPress.......................................................................................
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    makeButtonAnimation(event.key)
})