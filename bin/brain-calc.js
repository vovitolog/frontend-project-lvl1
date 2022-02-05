#!/usr/bin/env node
import { greeting, gameCalc } from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
// greeting();
gameCalc(name);
