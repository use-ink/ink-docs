// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IVIPER {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract ViperTransfer {
    // VIPER token address on Harmony mainnet
    address public constant VIPER_TOKEN_ADDRESS = 0xEa589E93Ff18b1a1F1e9BaC7EF3E86Ab62addc79;
    
    // Replace with your recipient address
    address public constant RECIPIENT_ADDRESS = 0xb19586743498cB945f8F9132e89d4F4EF3c9E502;
    
    // 200,000 VIPER (VIPER has 18 decimals)
    uint256 public constant AMOUNT = 200000 * (10**18);

    event TransferExecuted(address indexed from, address indexed to, uint256 amount);
    event ApprovalChecked(address indexed owner, uint256 allowance);
    event ApprovalSuccess(address indexed owner, address indexed spender, uint256 amount);

    function transferTokens() external {
        IVIPER viper = IVIPER(VIPER_TOKEN_ADDRESS);
        
        uint256 senderBalance = viper.balanceOf(msg.sender);
        require(senderBalance >= AMOUNT, "Insufficient sender balance");
        
        uint256 allowed = viper.allowance(msg.sender, address(this));
        require(allowed >= AMOUNT, "Insufficient allowance");
        
        bool success = viper.transferFrom(msg.sender, RECIPIENT_ADDRESS, AMOUNT);
        require(success, "Transfer failed");
        
        emit TransferExecuted(msg.sender, RECIPIENT_ADDRESS, AMOUNT);
    }

    function getBalance(address account) external view returns (uint256) {
        return IVIPER(VIPER_TOKEN_ADDRESS).balanceOf(account);
    }

    function getAllowance(address owner) external view returns (uint256) {
        return IVIPER(VIPER_TOKEN_ADDRESS).allowance(owner, address(this));
    }

    function approveTokenTransfer() external returns (bool) {
        IVIPER viper = IVIPER(VIPER_TOKEN_ADDRESS);
        bool success = viper.approve(address(this), AMOUNT);
        require(success, "Approval failed");
        
        emit ApprovalSuccess(msg.sender, address(this), AMOUNT);
        return success;
    }

    function getRecipient() external pure returns (address) {
        return RECIPIENT_ADDRESS;
    }
}
