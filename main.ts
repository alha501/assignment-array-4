input.onButtonPressed(Button.A, function () {
    number += -1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    list.push(number)
})
input.onButtonPressed(Button.B, function () {
    number += 1
    basic.showNumber(number)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let list: number[] = []
let number = 0
number = 0
basic.showNumber(number)
list = []
