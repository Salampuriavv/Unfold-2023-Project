// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserCounter {
    struct User {
        uint256 userId;
        uint256 counter;
    }

    mapping(address => User) public users;
    address[] public userAddresses;

    event CounterUpdated(address user, uint256 newValue);

    function createUser(uint256 _userId) public {
        require(users[msg.sender].userId == 0, "User already exists");
        users[msg.sender] = User(_userId, 0);
        userAddresses.push(msg.sender);
    }

    function updateCounter(uint256 _newValue) public {
        require(users[msg.sender].userId != 0, "User does not exist");
        users[msg.sender].counter = _newValue;
        emit CounterUpdated(msg.sender, _newValue);
    }

    function getUserCount() public view returns (uint256) {
        return userAddresses.length;
    }
}
