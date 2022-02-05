#!/usr/bin/env node
import { greeting, gamePrime } from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
// greeting();
gamePrime(name);
