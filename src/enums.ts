
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

function doSome(keyPressed: Direction){
    console.log('you pressed',keyPressed)
}

doSome(Direction.Up)
console.log(Direction.Up)