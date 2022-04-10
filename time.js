//const express = require('express');
function timer()
{
let time = new Date();

let hours = time.getHours();
let minutes = time.getMinutes();
return hours+":"+minutes;
}
module.exports = {timer}