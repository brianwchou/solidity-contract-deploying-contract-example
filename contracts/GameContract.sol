pragma solidity >=0.4.25 <0.6.0;

contract GameContract {
    string public word;
    constructor(string memory _word) public {
        word = _word;
    }
}
