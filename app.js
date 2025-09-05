console.log("Javascript connected!");

// Que:01..... Ans:01
var student = [];


// Que:02..... Ans:02
var stdNames = new Array();


// Que:03..... Ans:03
var cities = ["Karachi", "Hyderabad", "Quetta"];


// Que:04..... Ans:04
var nums = [10, 15, 20];


// Que:05..... Ans:05
var buttons = [true, false, false, true, true];


// Que:06..... Ans:06
var mixed = ["Hassaan", 19, true, 89.6, false, "Karachi"];


// Que:07..... Ans:07
// var degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// document.write("<b>Qualification:</b>");
// document.write("<ol>");
// document.write("<li>SSC</li>");
// document.write("<li>HSC</li>");
// document.write("<li>BSC</li>");
// document.write("<li>BS</li>");
// document.write("<li>BCOM</li>");
// document.write("<li>MS</li>");
// document.write("<li>M.Phill</li>");
// document.write("<li>PhD</li>");
// document.write("</ol>");


// Que:08..... Ans:08
// var stds = ["Salman", "Rayyan", "Rizwan"];
// var stdMarks = [332, 430, 410];
// var totalMarks = 500;

// document.write("Score of Salman is "+"<b>"+stdMarks[0]+"</b>"+"."+" Percentage: "+"<b>"+(stdMarks[0]/totalMarks*100).toFixed(2)+"</b>"+"%");
// document.write("<br>Score of Rayyan is "+"<b>"+stdMarks[1]+"</b>"+"."+" Percentage: "+"<b>"+(stdMarks[1]/totalMarks*100).toFixed(2)+"</b>"+"%");
// document.write("<br>Score of Rizwan is "+"<b>"+stdMarks[2]+"</b>"+"."+" Percentage: "+"<b>"+(stdMarks[2]/totalMarks*100).toFixed(2)+"</b>"+"%");


// Que:09..... Ans:09
// (a)
// var colors = [" Red", " Blue", " Yellow", " Orange"];
// var askColors = prompt("Enter a color you want to add in the beginning.");
// var addColor = colors.unshift(askColors);

// document.write("<br>Updated colors: "+"<b>"+colors+"</b>");


// Que:09..... Ans:09
// (b)
// var clrs = [" Red", " Blue", " Yellow", " Orange"];
// var askClrs = prompt("Enter a color you want to add in the end.");
// var addEnd = clrs.push(" "+askClrs);

// document.write("<br>Updated colors: "+"<b>"+clrs+"</b>");


// Que:09..... Ans:09
// (c)
// var colr = [" Red", " Blue", " Yellow", " Orange"];
// var addcolrs = colr.unshift("Violet, Brown");

//  document.write("<br>Updated colors: "+"<b>"+colr+"</b>");


// Que:09..... Ans:09
// (d)
// var colrs = [" Red", " Blue", " Yellow", " Orange"];
// var remove = colrs.shift();

//  document.write("<br>Updated colors: "+"<b>"+colrs+"</b>");


// Que:09..... Ans:09
// (e)
// var clr = [" Red", " Blue", " Yellow", " Orange"];
// var dlt = clr.pop();

// document.write("<br>Updated colors: "+"<b>"+clr+"</b>");


// Que:09..... Ans:09
// (f)
// var someClr = [" Red", " Blue", " Yellow", " Orange"];
// var userIndex = +prompt("Enter a index number where you want to add a color.");
// var userclr = prompt("Enter a color name, which add on index you given.");

// someClr.splice(" "+userIndex,+" "+ 0," " +userclr+" ");

// document.write("<br>Updated colors: "+"<b>"+someClr+"</b>");


// Que:09..... Ans:09
// (g)
var somecolrs = [" Red", " Blue", " Yellow", " Orange"];
var index = +prompt("Enter an index to remove color.");
var dltcount = +prompt("Enter a delete count that how many colors are remove.");

somecolrs.splice(" "+index, +" "+ dltcount);

document.write("<br>Updated colors: "+"<b>"+somecolrs+"</b>");

