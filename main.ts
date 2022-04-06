radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(14)
basic.pause(100)
music.playMelody("C5 C C5 C C5 C C5 C ", 120)
basic.pause(100)
basic.showString("Hello!")
