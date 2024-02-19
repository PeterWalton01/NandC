# Noughts and Crosses

## Description:

The rest of my deployed sites are, simple responsive web sites, programs that exercise an api, or full stack applications. This site is a bit more fun as it is a simple implementation of noughts and crosses.

This projects is an exercise in the interaction between style sheets and JavaScript. The implementation details given below provide more information.

### Some implementation details

The board is an array of div elements. These will respond to click events to put in place a nought or a cross.

To begin (or a the start of a new game), these elements have a class of cell. Each element has an event handler associated with it. The click handler will add the class of CIRCLE_CLASS or X_CLASS to the cell. The board will be updated to reflect the click. Cells that already have a class added will be ignored. The ':hover' is use to show whose turn it is and to anticipate the result of a click.

There is a variable that toggles to keep track of whose turn it is.

After each turn there is a check to find a winner or detect a draw. Wins are checked using an array of winning combinations This uses the 'some' array function. Draws are detected using an array function 'every' applied to the array of cells.

## How to use

Click to place your cross or nought. The JavaScript will track who has won or if the game is drawn.

## License

The code in this project can be freely copied and distributed.
