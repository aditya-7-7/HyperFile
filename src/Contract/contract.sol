// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract upload{
    //0xqwerty
    struct Access{
        address user;
        bool access;// true or false
    }
    mapping (address=>string[]) value;
    mapping (address=>mapping (address=>bool)) ownership;
    mapping (address=>Access[]) accesslist;
    mapping (address=>mapping (address=>bool)) previousdata;

    function add(address _user, string memory url) external {
        value[_user].push(url);
    }
    function allow(address user) external {
        ownership[msg.sender][user]=true;
        if(previousdata[msg.sender][user]){
            for (uint i=0; i<accesslist[msg.sender].length;i++){
                if(accesslist[msg.sender][i].user==user){
                    accesslist[msg.sender][i].access=true;
                }
            }
        } else{
            accesslist[msg.sender].push(Access(user,true));
            previousdata[msg.sender][user]=true;
        }
    }
    function disallow(address user) public{
        ownership[msg.sender][user]=false;
        for (uint i=0; i<accesslist[msg.sender].length;i++){
            if(accesslist[msg.sender][i].user==user){
                accesslist[msg.sender][i].access=false;
            }
        }
    }

    function display(address _user) external  view returns(string[] memory){
        require(_user==msg.sender || ownership[_user][msg.sender], "You don't have access");
        return value[_user];
    }

    function  shareAccess() public view returns (Access[] memory){
        return accesslist[msg.sender];
    }
}