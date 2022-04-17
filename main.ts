radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(14)
basic.pause(100)
music.playMelody("C A E G D B E G ", 120)
basic.pause(100)
basic.showString("hola¡")
