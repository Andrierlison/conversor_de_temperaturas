function converterParaFahrenheitsCelsius(){
    var kelvin = document.getElementById("k").value
    kelvin = parseInt(kelvin)
    var resultadoFahrenheit = (kelvin - 273.15) * 9/5 + 32
    var resultadoCelsius = kelvin - 273.15
    document.getElementById("resultado").innerHTML = "O valor kelvin " + kelvin + " em Fahrenheit é " + resultadoFahrenheit + " e em celsius é " + resultadoCelsius
}