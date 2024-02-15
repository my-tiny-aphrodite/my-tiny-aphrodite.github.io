var bg;
var el;
var kitty1;
var kitty2;
var kitty3;

var page;

var centerX, centerY;
var rect1X, rect1Y;
var rect2X, rect2Y;

var clickedOnce = false; //are you sure?
var clickedTwice = false; //are you really sure?
var clickedThrice = false; //are you sure you're sure?
var clicked4 = false; //Please?
var clicked5 = false; //
var clicked6 = false; //
var clicked7 = false; //
var clicked8 = false;

function preload() 
{
  bg = loadImage('hearts.png');
  el = loadImage('El.jpeg');
  kitty1 = loadImage('kitty4.gif');
  kitty2 = loadImage('kitty3.gif');
  kitty3 = loadImage('kitty2.gif');
}

function setup() 
{
  noStroke();
  createCanvas(windowWidth, windowHeight);

  page = 1;
  centerX = width / 2;
  centerY = height / 2;

  rect1X = centerX;
  rect1Y = centerY + 120;

  rect2X = centerX;
  rect2Y = centerY + 200;
}

function draw() {
  if (page == 1) {
    background(bg);

    fill(255, 159, 167);

    rectMode(CENTER);

    textSize(50);
    textFont("Courgette");
    text("Elodie Maria Ruskin, will you be my Valentine?", centerX, centerY-250);

    image(el,centerX-125, centerY-200);


    rect(rect1X, rect1Y, 160, 65, 10);

    rect(rect2X, rect2Y, 160, 65, 10);
    fill(255);
    textSize(20);
    textFont("Lexend");
    textAlign(CENTER, CENTER);

    if (mouseX > rect1X - 80 && mouseX < rect1X + 80 && mouseY > rect1Y - 32.5 && mouseY < rect1Y + 32.5) 
    {
      cursor(HAND);
    }

    else if (mouseX > rect2X - 80 && mouseX < rect2X + 80 && mouseY > rect2Y - 32.5 && mouseY < rect2Y + 32.5) 
    {
      cursor(HAND);
    }

    else
    {
      cursor(ARROW);
    }

    text("Yes", rect1X, rect1Y);

    if (clickedOnce) 
    {
      text("Are you sure?", rect2X, rect2Y);
    } 
    else if (clickedTwice) 
    {
      textSize(19);
      text("Are you ", rect2X, rect2Y-12);
      text("really sure?", rect2X, rect2Y+15)
    } 
    else if (clickedThrice) 
    {
      textSize(19);
      text("Are you sure ", rect2X, rect2Y-12);
      text("you're sure?", rect2X, rect2Y+15)
    } 
    else if (clicked4) 
    {
      text("Please?", rect2X, rect2Y);
    } 
    else if (clicked5) 
    {
      text("I'm gonna ", rect2X, rect2Y-12);
      text("be sad :(", rect2X, rect2Y+15);
    } 
    else if (clicked6) 
    {
      text("Now I'm sad :(", rect2X, rect2Y);
    } 
    else if (clicked7) 
    {
      textSize(18);
      text("Click again  ", rect2X+2, rect2Y-17);
      text("and I'm removing ", rect2X+2, rect2Y+1);
      text("this button >:)", rect2X+2,rect2Y +18);
    } 
    else if (clicked8)
    {
      text("");
    } 
    else 
    {
      text("I no no wanna", rect2X, rect2Y);
    }
    
  }

  if (page == 2) {
    background(bg);
    cursor(ARROW);

    rectMode(CENTER);

    textSize(50);
    fill(0);
    textFont("Lexend");
    text("YAY", centerX, centerY-250);
    textSize(40);
    text("I love you so much baby❤️❤️❤️", centerX, centerY+200);

    imageMode(CENTER);
    image(kitty1, centerX, centerY-15);
    image(kitty2, centerX- 260, centerY-15);
    image(kitty3, centerX+260, centerY-15);
  }
}




function mouseClicked() 
{
  if (page ==1)
  {
  if (mouseX > rect1X - 80 && mouseX < rect1X + 80 && mouseY > rect1Y - 32.5 && mouseY < rect1Y + 32.5) 
  {
    console.log('Clicked on the first rectangle!');
    page = 2;
  }

  if (mouseX > rect2X - 80 && mouseX < rect2X + 80 && mouseY > rect2Y - 32.5 && mouseY < rect2Y + 32.5) 
  {
    if (!clicked8)
    {
      if (clickedOnce) 
      {
        clickedOnce = false;
        clickedTwice = true;
      } 
      else if (clickedTwice) 
      {
        clickedTwice = false;
        clickedThrice = true;
      } 
      else if (clickedThrice) 
      {
        clickedThrice = false;
        clicked4 = true;
      } 
      else if (clicked4) 
      {
        clicked4 = false;
        clicked5 = true;
      } 
      else if (clicked5) 
      {
        clicked5 = false;
        clicked6 = true;
      } 
      else if (clicked6) 
      {
        clicked6 = false;
        clicked7 = true;
      } 
      else if (clicked7) 
      {
        clicked7 = false;
        clicked8 = true;
      } 
      else 
      {
        clickedOnce = true;
      }
    }
  }
}
}


function mouseClicked() 
{
  if (page ==1)
  {
  if (mouseX > rect1X - 80 && mouseX < rect1X + 80 && mouseY > rect1Y - 32.5 && mouseY < rect1Y + 32.5) 
  {
    console.log('Clicked on the first rectangle!');
    page = 2;
  }

  if (mouseX > rect2X - 80 && mouseX < rect2X + 80 && mouseY > rect2Y - 32.5 && mouseY < rect2Y + 32.5) 
  {
    if (!clicked8)
    {
      if (clickedOnce) 
      {
        clickedOnce = false;
        clickedTwice = true;
      } 
      else if (clickedTwice) 
      {
        clickedTwice = false;
        clickedThrice = true;
      } 
      else if (clickedThrice) 
      {
        clickedThrice = false;
        clicked4 = true;
      } 
      else if (clicked4) 
      {
        clicked4 = false;
        clicked5 = true;
      } 
      else if (clicked5) 
      {
        clicked5 = false;
        clicked6 = true;
      } 
      else if (clicked6) 
      {
        clicked6 = false;
        clicked7 = true;
      } 
      else if (clicked7) 
      {
        clicked7 = false;
        clicked8 = true;
      } 
      else 
      {
        clickedOnce = true;
      }
    }
  }
}
}