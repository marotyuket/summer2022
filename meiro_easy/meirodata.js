'use strict';

let map = [
  [' ',' ',' ','DX',' ','┌','┐',' ',' ',' '],
  [' ',' ',' ','│',' ','├','┼','┐',' ',' '],
  [' ','┌','┬','┴','─','┤','└','┼','┐','D'],
  ['K','┴','┘',' ',' ','│',' ','UX','└','┘'],
  [' ',' ','RX','─','─','┤','┌','─','─','LX'],
  [' ',' ',' ',' ',' ','├','┼','LX',' ',' '],
  [' ',' ',' ',' ',' ','│','S',' ',' ',' '],
  [' ',' ',' ',' ','RX','┼','┐',' ',' ',' '],
  [' ',' ',' ',' ',' ','│','│',' ',' ',' '],
  [' ',' ',' ',' ',' ','└','┴','LX',' ',' '],
];



let images = {
  '─': 'left_right',
  '│': 'up_down',
  '┐': 'left_down',
  '└': 'up_right',
  '┘': 'left_up',
  '┌': 'down_right',
  '├': 'up_right_down',
  '┤': 'up_left_down',
  '┬': 'left_down_right',
  '┴': 'left_up_right',
  '┼': 'left_up_right_down',
  'G': 'goal',
  'D': 'down_door',
  'RX': 'right_stop',
  'K': 'key',
  'LX': 'left_stop',
  'UX': 'up_stop',
  'DX': 'down_stop',
  'S': 'up_start',
  'K2': 'key2',
  'K3' : 'right_key3',
  'DD' : 'door',
  'C' : 'congratulations'
}

let x = 6;
let y = 6;
let keyflag = false;