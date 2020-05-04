function converterParaFahrenheitsKelvin(){
    var celsius = document.getElementById("c").value
    celsius = parseInt(celsius)
    var resultadoFahrenheit = (celsius * 9/5) + 32
    var resultadoKelvin = celsius + 273.15
    document.getElementById("resultado").innerHTML = "O valor celsius " + celsius + " em Fahrenheit é " + resultadoFahrenheit + " e em kelvin é " + resultadoKelvin
}