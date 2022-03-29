input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
})
Kitronik_Robotics_Board.allOff()
let strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    basic.pause(24)
    strip.rotate(1)
    strip.show()
})
basic.forever(function () {
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
    basic.pause(800)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 98)
    basic.pause(800)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 180)
    basic.pause(800)
    Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 98)
    basic.pause(100)
})
