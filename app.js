// Demo for objects-to-constructors
'use strict';

function Portfolio(opt) { //eslint-disable-line
  this.projectTitle = opt.projectTitle;
  this.projectDescription = opt.projectDescription;
  console.log('My project is ' + this.projectTitle + ' and my description is ' + this.projectDescription);
}
// Portfolio.push(this)into portfolio;

// And then, what if I had an array where I could store all of you?
var portfolio  = []; //slint-disable-line

// Instances
new Portfolio(this);//i need to insert the data//
