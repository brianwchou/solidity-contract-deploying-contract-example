pragma solidity >=0.4.25 <0.6.0;

import "./GameContract.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract StartGame {
    GameContract public HangmanGame;

    constructor() public {
        HangmanGame = new GameContract("cheese");
    }
}
