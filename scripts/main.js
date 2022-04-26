// image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/blue-baboon-1.jpg') {
        myImage.setAttribute('src', 'images/blue-baboon-2.jpg');
    } else {
        myImage.setAttribute('src', 'images/blue-baboon-1.jpg');
    }
}

//personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter yout name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Tarantulas are cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Tarantulas are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

