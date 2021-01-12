"use strict";

function border(){
    let topLeftCorner = document.getElementById("topLeftCorner").value;
    let topLeftCorners = document.getElementById("topLeftCorners").value = topLeftCorner;
    let topRightCorner = document.getElementById("topRightCorner").value;
    let topRightCorners = document.getElementById("topRightCorners").value = topRightCorner; 
    let bottomRightCorner = document.getElementById("bottomRightCorner").value;
    let bottomRightCorners = document.getElementById("bottomRightCorners").value = bottomRightCorner;
    let bottomLeftCorner = document.getElementById("bottomLeftCorner").value;
    let bottomLeftCorners = document.getElementById("bottomLeftCorners").value = bottomLeftCorner;

    let block__element = document.getElementById("block__element");

    block__element.style.borderRadius = topLeftCorners + "px " + topRightCorners + "px " + bottomRightCorners + "px " + bottomLeftCorners + "px ";
}