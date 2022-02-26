turtle.setPosition(1, 2)
turtle.turnRight()
basic.forever(function () {
    for (let Turtle = 0; Turtle <= 5; Turtle++) {
        turtle.forward(5 - Turtle)
        turtle.turnRight()
    }
    for (let Turtle = 0; Turtle <= 5; Turtle++) {
        turtle.turnLeft()
        turtle.back(Turtle)
    }
})
