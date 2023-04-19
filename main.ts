basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    225
    )
    if (input.lightLevel() < 20) {
    	
    } else {
    	
    }
    basic.pause(2000)
})
