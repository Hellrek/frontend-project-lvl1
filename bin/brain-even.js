#!/usr/bin/env node
/* eslint-disable import/extensions */
import * as game from '../game/index.js';
import answer from './brain-games.js';
import src from '../src/cli.js';

src;
game.quest(answer);