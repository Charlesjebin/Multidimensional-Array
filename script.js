var CarBrand = [
    ["BMW", "Ferrari", "Ford"],
    ["Honda", "Hyundai", "MG"],
    ["Lamborghini", "TATA", "Audi"]
];

var Cartoon = [
    ["Ben 10", "Tom and Jerry", "Doraemon"],
    ["Phineas and Ferb", "Pokemon", "Adventure Time"],
    ["Johnny Test", "Jackie Chan Adventures", "Chhota Bheem"]
];

function printArrayValues(arr, outputElementId, title) {
    var outputElement = document.getElementById(outputElementId).getElementsByClassName('output-content')[0];
    outputElement.innerHTML = ''; // Clear previous content
    outputElement.innerHTML += "<strong>" + title + "</strong>"; // Display title
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var message = "Element at position [" + i + "][" + j + "]: " + arr[i][j];
            outputElement.innerHTML += "<span>" + message + "</span>";
            console.log(message); // Display in console
        }
    }
}

// Printing array values
console.log("Car Brand:")
printArrayValues(CarBrand, 'car-brand-output', 'Car Brand:');
console.log("Cartoon:")
printArrayValues(Cartoon, 'cartoon-output', 'Cartoon:');