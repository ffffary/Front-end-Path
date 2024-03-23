

/*

notes:

Canvas API ---> a set of methods to draw graphics via JS and HTML canval element

ctx ---> short for "context"

checkpoints --- a barrier 关口/关卡

velocity --- speed


methods in the Player class:
-draw() ---> draw the player's shape

function reference: a function without ()
startBtn.addEventListener("click", startGame); // startGame is a function reference




steps:
1. get elements to use js on them
2. proportionalSize() to fix the player's position 
3. create Player class 
- constructor 
- draw()
-update()
4. create an object from Player class
5. startGame() - to hide the start screen and draw the player

keys{} object ==> to manipulate the player via keyboard

6. tells the browser to perform an animation:
-animate() ---> requestAnimationFrame(animate)

7. move the player across the screen:
movePlayer()
-deal with checkPoints - collision dectected

-keydown <--> call addEventListener on window object 


8. define a platform class


*/