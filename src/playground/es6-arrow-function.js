/*
function square(x) {
    return x * x;
};

console.log(square(2));

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(squareArrow(6));
*/

const getFirstName = fullName => {
    return fullName.split(' ')[0];
};

const firstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Hard Mike'));