/*
  INSTRUCTIONS
    - Write all of your code inside the `main` function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - Make a copy of this file in this `js/` directory and name it e.g. `all-blue.js`
        - Clean out this `play.js` file so you can start fresh on a new challenge

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

1. 
var initial_state = ['.', '.', '.', '.', '.'];

function main (){

 for(let i = 0; i < initial_state.length; i++){

  if(i==0) {
    useBlue();
    draw();
  } else{

  useBlue();
  moveRight();
  draw();
}

 }

}


2.

var initial_state = ['b', '.', '.', '.', '.'];

function main (){

 for(let i = 0; i < initial_state.length; i++){

  if(i == 0 && onBlue()) {

    useBlue()
    moveRight();
    draw();

  } else if(i == 0 && onGreen())
  {

    useGreen();
    moveRight();
    draw();

  }
}
}

3. 

var initial_state = ['.', '.', '.', '.', '.'];

function main (){

  var n = 2;

 for(let i = 0; i < n; i++){

    useBlue()
    moveRight();
    draw();

  }


var initial_state = ['.', '.', '.', '.', '.'];

function main (){

  var n = 3;

 for(let i = 0; i < n; i++){

    useBlue()
    moveRight();
    draw();

  }

4. 

var initial_state = ['b', 'b', 'b', 'b', 'b'];

function main (){

for (let i = 0; i < initial_state.length; i++){

if( i % 2 == 0){

  erase();

} else{

  useBlue();
  draw();

}

moveRight();

}

5.

var initial_state = ['b', 'b', 'b', 'b', 'b'];

function main (){

for(let i = 0; i < initial_state.length; i++)  {

if( i % 2 !== 0){

  erase();

} else{

  useBlue();
  draw();

}

moveRight();

}
}

6.

var initial_state = ['b', 'b', 'b', 'b', 'b'];

function main (){

let n = 1
for (let i = 0; i < initial_state.length; i = i + n){


erase();
moveRight();

}

} 

var initial_state = ['b', 'b', 'b', 'b', 'b'];

function main (){

let n = 2
for (let i = 0; i < initial_state.length; i++){

if((i + 1) % n !== 0){

erase();
moveRight();

}

} 


  