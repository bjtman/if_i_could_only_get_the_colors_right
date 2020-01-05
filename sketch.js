/*
 * Written by: Brian Tice
 * @name If I Could Just Get The Colors Right
 * @description (Expansion of the work of Sanzo Wada. .
 */

let STATE = 0;




function setup() {
  createCanvas(710, 400);
  noStroke();
  
  
  button = createButton('Change');
  button.position(20, 20);
  button.mousePressed(change_state);

  //let inside = color(204, 102, 0);
  //let middle = color(204, 153, 0);
  //let outside = color(153, 51, 0);
  let raw_sienna = color('#b85e00');
  let ivory_buff = color('#a4986b');
  let olive_green = color('#556934');
  let slate_color = color('#1b3644');
  
  let apricot_yellow = color('ffe600');
  let yellow_orange = color('ff8c00');
  let cossack_green = color('328e13');
  // These statements are equivalent to the statements above.
  // Programmers may use the format they prefer.
  
  
  background(color('#a4986b'));
  
  push();
  translate(60, 80);
  fill(raw_sienna);
  rect(0, 0, 100, 400);
  fill(ivory_buff);
  rect(40, 60, 120, 120);
  fill(olive_green);
  rect(60, 90, 80, 80);
  fill(slate_color);
  rect(0,-7,100,-10);
  pop();

  push();
  translate(250, 80);
  fill(slate_color);
  rect(0, 0, 100, 400);
  fill(ivory_buff);
  rect(40, 60, 120, 120);
  fill(raw_sienna);
  rect(60, 90, 80, 80);
  fill(olive_green);
  rect(0,-7,100,-10);
  pop();
  
  push();
  translate(440, 80);
  fill(olive_green);
  rect(0, 0, 100, 400);
  fill(ivory_buff);
  rect(40, 60, 120, 120);
  fill(ivory_buff);
  rect(60, 90, 80, 80);
  fill(raw_sienna);
  rect(0,-7,100,-10);
  pop();
  
  
}


function change_state() {
  
  let raw_sienna = color('#b85e00');
  let ivory_buff = color('#a4986b');
  let olive_green = color('#556934');
  let slate_color = color('#1b3644');
  
  let apricot_yellow = color('#ffe600');
  let yellow_orange = color('#ff8c00');
  let cossack_green = color('#328e13');
  
  
  if(STATE == 0) {
    
    
    
    background(color('#328e13'));
  
    push();
    translate(60, 80);
    fill(apricot_yellow);
    rect(0, 0, 100, 400);
    fill(cossack_green);
    rect(40, 60, 120, 120);
    fill(raw_sienna);
    rect(60, 90, 80, 80);
    fill(yellow_orange);
    rect(0,-7,100,-10);
    pop();

    push();
    translate(250, 80);
    fill(yellow_orange);
    rect(0, 0, 100, 400);
    fill(cossack_green);
    rect(40, 60, 120, 120);
    fill(cossack_green);
    rect(60, 90, 80, 80);
    fill(raw_sienna);
    rect(0,-7,100,-10);
    pop();
  
    push();
    translate(440, 80);
    fill(raw_sienna);
    rect(0, 0, 100, 400);
    fill(cossack_green);
    rect(40, 60, 120, 120);
    fill(yellow_orange);
    rect(60, 90, 80, 80);
    fill(apricot_yellow);
    rect(0,-7,100,-10);
    pop();
      
    
    text('state change to 1, translation from dblodorn',10,10);
    STATE = 1;
  }
  else if(STATE == 1) {
    
    
    background(color('#a4986b'));
  
    push();
    translate(60, 80);
    fill(raw_sienna);
    rect(0, 0, 100, 400);
    fill(ivory_buff);
    rect(40, 60, 120, 120);
    fill(olive_green);
    rect(60, 90, 80, 80);
    fill(slate_color);
    rect(0,-7,100,-10);
    pop();

    push();
    translate(250, 80);
    fill(slate_color);
    rect(0, 0, 100, 400);
    fill(ivory_buff);
    rect(40, 60, 120, 120);
    fill(raw_sienna);
    rect(60, 90, 80, 80);
    fill(olive_green);
    rect(0,-7,100,-10);
    pop();
  
    push();
    translate(440, 80);
    fill(olive_green);
    rect(0, 0, 100, 400);
    fill(ivory_buff);
    rect(40, 60, 120, 120);
    fill(ivory_buff);
    rect(60, 90, 80, 80);
    fill(raw_sienna);
    rect(0,-7,100,-10);
    pop();
  
    text('state change to 0, hand translation',10,10);
    STATE = 0;
  }
  
}  
  