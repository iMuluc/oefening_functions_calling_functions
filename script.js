// Hey kiddo
let checkVolwassen = function (leeftijd) {
    if (leeftijd >= 18) {
        return true;
    } else {
        return false;
    }
}
checkVolwassen();

const call = function (leeftijd) {
    if (leeftijd >= 18) {
        return console.log("Hello there");
    } else {
        return console.log("Hey kiddo");
    }
};

console.log(call(18));
console.log("---");
console.log(call(10));

console.log("-----------");


// VAT calculations

let main = function (basePrice, VATper) {
    let VATfac = VATper / 100;
    let answer = basePrice * (1 + VATfac);
};

let result = function () {
    main();
};
result(100, 21);
