function calculator(w, h) {
    return w / Math.pow(h, 2);
}

console.log(calculator(65, 1.8));




// If we want rounded:

function calculator(w, h) {
    return Math.round(w / Math.pow(h, 2));
}

console.log(calculator(65, 1.8));