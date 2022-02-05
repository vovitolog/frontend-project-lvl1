#!/usr/bin/env node
import { greeting, gameProgression } from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
// greeting();
gameProgression(name);
