// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin Contracts (Industry Standard Security)
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title TemtudoNFT Marketplace
 * @dev Smart Contract for minting unique digital assets
 */
contract TemtudoNFT is ERC721, Ownable {
    using Strings for uint256;

    // State Variables
    uint256 private _nextTokenId; // Counter for Token IDs
    uint256 public mintPrice = 0.001 ether; // Price per NFT
    uint256 public maxSupply = 10000; // Maximum number of NFTs
    bool public isSaleActive = true; // Switch to pause/active sale

    // Base URI for Metadata (IPFS link)
    string private _baseTokenURI;

    // Events (Logs for the frontend to listen to)
    event NFTMinted(address indexed minter, uint256 tokenId);
    event FundsWithdrawn(address indexed owner, uint256 amount);

    // Constructor: Sets the name (Temtudo NFT) and Symbol (TMTD)
    // Ownable(msg.sender) sets YOU as the owner
    constructor() ERC721("Temtudo NFT Collection", "TMTD") Ownable(msg.sender) {
        // Placeholder metadata (Optional: You can change this later)
        _baseTokenURI = "https://ipfs.io/ipfs/QmYourIPFSHashHere/";
    }

    // --- MAIN FUNCTION: MINT (BUY) ---
    function mint() public payable {
        require(isSaleActive, "Sale is currently paused.");
        require(_nextTokenId < maxSupply, "Sold out!");
        require(msg.value >= mintPrice, "Insufficient ETH sent. Price is 0.001 ETH.");

        uint256 tokenId = _nextTokenId;
        _nextTokenId++;

        _safeMint(msg.sender, tokenId);
        
        emit NFTMinted(msg.sender, tokenId);
    }

    // --- VIEW FUNCTIONS (Read Only) ---
    
    // Returns the total number of minted NFTs
    function totalSupply() public view returns (uint256) {
        return _nextTokenId;
    }

    // Returns the Metadata URL for a specific NFT
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireOwned(tokenId); // Check if token exists

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // --- OWNER FUNCTIONS (Only You Can Call) ---

    // 1. Withdraw the money from the contract to your wallet
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(owner()).transfer(balance);
        emit FundsWithdrawn(owner(), balance);
    }

    // 2. Change the price (in case ETH goes up/down)
    function setPrice(uint256 _newPrice) public onlyOwner {
        mintPrice = _newPrice;
    }

    // 3. Pause/Unpause the sale
    function toggleSale(bool _state) public onlyOwner {
        isSaleActive = _state;
    }

    // 4. Update the Metadata URL (if you upload new images to IPFS)
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
}