pragma ton-solidity >=0.47.0;

interface IForeverToken {
    function addStamp(address owner, uint8 place) external;
}