// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates cups of water you should drink
 */
function calculate () {
 
  // get user input
  let bodyWeight = parseFloat(document.getElementById('person_weight').value)
  let age = parseFloat(document.getElementById('person_age').value)

  // output
  let waterIntake = bodyWeight / 2.2 * 35 / 28.3
  
  // display the results
  document.getElementById('water').innerHTML = 'You should drink: ' + waterIntake.toFixed(2)  + ' in ounces'
}

// get ounces input
let liters = parseFloat(document.getElementById('liters').value)

// output
 let waterIntake = waterIntake * 0.0295735

  // display the results
  document.getElementById('liters').innerHTML = 'You should drink: ' + waterIntake.toFixed(2)  + ' in liters'
}
