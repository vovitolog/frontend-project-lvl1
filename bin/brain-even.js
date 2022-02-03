#!/usr/bin/env node
import { greeting, gameEven } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
// greeting();
gameEven(name);
