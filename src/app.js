import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();

loadGame();
saveGame();

const saveData = new GameSavingData();
console.log('Game saving data created:', saveData);
