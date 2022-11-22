let shape = 0
input.onGesture(Gesture.Shake, function () {
    shape = randint(1, 3)
    if (shape == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (shape == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # . .
            `)
    }
    if (shape == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # #
            # # # . .
            . # . . .
            `)
    }
})
