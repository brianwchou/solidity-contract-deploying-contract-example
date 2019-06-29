const StartGame = artifacts.require("StartGame");
const GameContract = artifacts.require("GameContract");

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

contract('StartGame', (accounts) => {
  it('start game get contract address', async () => {
    let startGame = await StartGame.new();
    let addr = await startGame.HangmanGame.call();

    assert.notEqual(addr, EMPTY_ADDRESS ,"address is not equal to empty addres");
    assert.notEqual(addr, startGame.address, "address does not equal the starting contract")
  });

  it('retreived value from deployed contract', async () => {
    let startGame = await StartGame.new();
    let addr = await startGame.HangmanGame.call();

    let game = await GameContract.at(addr);
    let gameWord = await game.word();
   
    assert.equal(gameWord, "cheese" ,"gameWord should be cheese");
  });
});
