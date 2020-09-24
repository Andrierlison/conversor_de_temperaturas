function convertToKelvinFahrenheits(){
    let celsius = document.getElementById("c").value

    celsius = parseInt(celsius)

    let fahrenheitResult = (celsius * 9/5) + 32

    let kelvinResult = celsius + 273.15

    document.getElementById("result").innerHTML= `The celsius value ${celsius} in Fahrenheit is ${fahrenheitResult} and in kelvin it is ${kelvinResult}`
  }
