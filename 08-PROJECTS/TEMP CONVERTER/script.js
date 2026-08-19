// assign variables to the DOM elements.

const tempInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result_box");
const resetBtn = document.getElementById("resetBtn")

// the first select element in the DOM accept the input temp unit
// the second displays the output unit

// create an event listener for the btn click

convertBtn.addEventListener('click', function(){
    // validate the input
    if (
    tempInput.value === "" ||
    Number.isNaN(Number(tempInput.value))
        ) {
            result.textContent = "Please insert valid input";
            return;
        }

    // get temperature and convert to a number
    let temperature = Number(tempInput.value);
    // get from/initial unit
    let from = fromUnit.value;
    // get to/output unit
    let to = toUnit.value;

    // check for negative Kelvin
    if (from === "K" && temperature < 0) {
    result.textContent = "Kelvin cannot be below 0 K";
    return;
    }

    if(from === "K"){
        // convert from K to C
        temperature = temperature - 273.15;
    } else if (from === "F"){
        // convert from F to C
        temperature = (temperature - 32) * 5/9;
    }

    if( to === "F"){
        // convert from C to F
        temperature = (9/5 * temperature) + 32;
    } else if(to === "K"){
        // convert from C to K
        temperature = temperature + 273.15;
    }
    // same unit conversion
    if(from === to){
        result.textContent = "Please choose the preferred converted unit."
        return
    }

    // display the result
    result.textContent = `Result: ${temperature.toFixed(2)} ${to}`;
})

resetBtn.addEventListener('click', function(){
    tempInput.value = "";
    result.textContent = "";
})


// will add a swap button later
