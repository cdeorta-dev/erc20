// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MKT") {
     
        _mint(msg.sender, 100 * 10 ** decimals());
    }
    function decimals()  public pure override returns(uint8){
        return 6;
    }
}
