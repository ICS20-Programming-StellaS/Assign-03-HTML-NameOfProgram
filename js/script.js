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

  // calculate to ounces to liters
  let waterIntake = ( bodyWeight / 2.2 * 40 / 28.3 ) * 0.0295735
  
  // display the results
  document.getElementById('water').innerHTML = 'You should drink: ' + waterIntake.toFixed(2)  + ' liters of water a day.'
}