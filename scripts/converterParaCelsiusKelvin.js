function converterParaCelsiusKelvin(){
    var fahrenheit = document.getElementById("f").value
    fahrenheit = parseInt(fahrenheit)
    var resultadoCelsius = 5 * (fahrenheit - 32) / 9
    var resultadoKelvin = (fahrenheit - 32) * 5/9 + 273.15
    document.getElementById("resultado").innerHTML = "O valor fahrenheit " + fahrenheit + " em Celsius é " + resultadoCelsius + " e em kelvin é " + resultadoKelvin
}