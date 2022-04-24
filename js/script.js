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
  let Body Weight = parseFloat(document.getElementById('body_weight').value) 
  let Age = parseFloat(document.getElementById('person_age').value)

  // output
  const water_result_1 = (2.2 / weight)

  // output
  const water_result_2 = (water_result_1 * 35)

  // output
  const water = (water_result_2 / 28.3)
  
  // display the results
  document.getElementById('water').innerHTML = 'you should drink: ' + water.toFixed(2) 
}