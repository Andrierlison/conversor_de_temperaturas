function convertToFahrenheitsCelsius(){
  
    let kelvin = document.getElementById("k").value

    kelvin = parseInt(kelvin)

    let fahrenheitResult = (kelvin - 273.15) * 9/5 + 32

    let celsiusResult = kelvin - 273.15
    
    document.getElementById("result").innerHTML = `The kelvin value ${kelvin} in Fahrenheit is ${fahrenheitResult} and in celsius it is ${celsiusResult}`
}
