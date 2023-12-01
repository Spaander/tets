gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
gamerbit.onEvent(GamerBitPin.P11, GamerBitEvent.Click, function () {
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # # .
        # . . # .
        # # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
gamerbit.onEvent(GamerBitPin.P5, GamerBitEvent.Click, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        # . # . #
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
