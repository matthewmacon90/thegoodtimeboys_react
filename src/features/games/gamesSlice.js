import { GAMES } from '../../app/shared/GAMES';

export const selectAllGames = () => {
    return GAMES;
};

//to select a random game from the GAMES Array Object.
export const selectRandomGame = () => {
    return GAMES[Math.floor(GAMES.length * Math.random())];
};