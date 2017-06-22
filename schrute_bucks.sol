pragma solidity ^0.4.0;

contract SchruteBucks {
    mapping (address => uint) public balanceOf;
    
    function SchruteBucks(){
        balanceOf[msg.sender] = 1000;
    }
    
    function transfer(address _to, uint _amount){
        if (balanceOf[msg.sender] < _amount) throw;
        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;
    }
}