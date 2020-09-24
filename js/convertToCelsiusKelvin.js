function convertToCelsiusKelvin() {
  let fahrenheit = document.getElementById("f").value

  fahrenheit = parseInt(fahrenheit)

  let celsiusResult = 5 * (fahrenheit - 32) / 9

  let kelvinResult = (fahrenheit - 32) * 5 / 9 + 273.15

  document.getElementById("result").innerHTML = `The fahrenheit value ${fahrenheit} in Celsius is ${celsiusResult} and in kelvin it is ${kelvinResult}`
}
