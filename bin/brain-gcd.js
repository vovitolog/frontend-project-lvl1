#!/usr/bin/env node
import { greeting, gameGcd } from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
// greeting();
gameGcd(name);
