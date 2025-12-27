// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract TemtudoNFT is ERC721, Ownable {
    using Strings for uint256;

    uint256 private _nextTokenId;
    uint256 public mintPrice = 0.001 ether;
    uint256 public maxSupply = 10000;
    bool public isSaleActive = true;
    string private _baseTokenURI;

    event NFTMinted(address indexed minter, uint256 tokenId);
    event FundsWithdrawn(address indexed owner, uint256 amount);

    constructor() ERC721("Temtudo NFT Collection", "TMTD") Ownable(msg.sender) {
        _baseTokenURI = "https://ipfs.io/ipfs/QmYourIPFSHashHere/";
    }

    // --- MINT FUNCTION ---
    function mint() public payable {
        require(isSaleActive, "Sale is currently paused.");
        require(_nextTokenId < maxSupply, "Sold out!");
        require(msg.value >= mintPrice, "Insufficient ETH sent.");

        uint256 tokenId = _nextTokenId;
        _nextTokenId++;

        _safeMint(msg.sender, tokenId);
        emit NFTMinted(msg.sender, tokenId);
    }

    // --- READ FUNCTIONS ---
    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireOwned(tokenId);
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // --- OWNER FUNCTIONS ---

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");

        emit FundsWithdrawn(owner(), balance);
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        mintPrice = _newPrice;
    }

    function toggleSale(bool _state) public onlyOwner {
        isSaleActive = _state;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
}