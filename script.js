document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. CONFIGURATION (SMART CONTRACT)
    // ==========================================
    
    // ⚠️ IMPORTANT: Paste your Remix Contract Address here
    // If you haven't deployed yet, you can leave it empty for UI testing, 
    // but the "Mint" button will return an error.
    const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; 
    
    // Minimal ABI (Interface to talk to the Solidity Contract)
    const contractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "NFTMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "baseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "toggleSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isSaleActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

    // Global Web3 Variables
    let provider;
    let signer;
    let contract;


    // ==========================================
    // 1. UI: MOBILE MENU & SCROLL ANIMATIONS
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list li a');

    // Toggle Menu
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.hidden-element').forEach(el => observer.observe(el));


    // ==========================================
    // 2. WEB3: CONNECTION LOGIC (METAMASK)
    // ==========================================
    const connectBtn = document.getElementById('connect-wallet');

    async function initWeb3() {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            try {
                // 1. Setup Provider (Ethers V6)
                provider = new ethers.BrowserProvider(window.ethereum);
                
                // 2. Get Signer (The user's wallet)
                signer = await provider.getSigner();
                
                // 3. Connect to the Contract
                if (contractAddress && contractAddress !== "YOUR_CONTRACT_ADDRESS_HERE") {
                    contract = new ethers.Contract(contractAddress, contractABI, signer);
                }

                // 4. Update UI Button
                const address = await signer.getAddress();
                const shortAddress = `${address.substring(0, 6)}...${address.substring(38)}`;
                
                connectBtn.innerText = shortAddress;
                connectBtn.style.borderColor = "#00ff41"; // Matrix Green
                connectBtn.style.background = "rgba(0, 255, 65, 0.1)";
                
                console.log("Web3 Connected. Address:", address);
                return true;

            } catch (error) {
                console.error("Web3 Connection Error:", error);
                alert("Connection failed. Please check your wallet.");
                return false;
            }
        } else {
            alert("MetaMask not found! Please install the extension.");
            window.open("https://metamask.io/download/", "_blank");
            return false;
        }
    }

    // Connect on button click
    connectBtn.addEventListener('click', initWeb3);


    // ==========================================
    // 3. MINTING LOGIC (BUYING NFT)
    // ==========================================
    
    // Select the button inside the Modal
    const mintBtn = document.querySelector('.modal-action .btn-primary');
    
    mintBtn.addEventListener('click', async () => {
        // Ensure we are connected
        if (!contract) {
            const connected = await initWeb3();
            if(!connected || !contract) {
                alert("Please connect your wallet and configure the Contract Address in script.js first.");
                return;
            }
        }

        try {
            // 1. UI Feedback
            mintBtn.innerText = "Processing...";
            mintBtn.disabled = true;

            // 2. Send Transaction
            // Note: Value must match the requirement in Solidity (0.001 ETH)
            const tx = await contract.mint({ 
                value: ethers.parseEther("0.001") 
            });

            console.log("Transaction Hash:", tx.hash);
            alert(`Transaction Sent!\nHash: ${tx.hash}\nWaiting for confirmation...`);

            // 3. Wait for confirmation
            await tx.wait();

            // 4. Success UI
            alert("SUCCESS! NFT Minted and sent to your wallet.");
            mintBtn.innerText = "Minted Successfully";
            mintBtn.style.background = "#fff";
            mintBtn.style.color = "#000";

        } catch (error) {
            console.error("Mint Error:", error);
            
            // Check for user rejection
            if (error.code === 'ACTION_REJECTED') {
                alert("Transaction rejected by user.");
            } else {
                alert("Transaction failed. Check console for details.");
            }

            // Reset Button
            mintBtn.innerText = "Mint Now";
            mintBtn.disabled = false;
        }
    });


    // ==========================================
    // 4. MARKETPLACE LOGIC (DATA & PAGINATION)
    // ==========================================
    
    // --- Configuration ---
    const totalItems = 36;
    const itemsPerPage = 6;
    let currentPage = 1;
    let allProducts = [];

    // --- References ---
    const gridContainer = document.getElementById('product-container');
    const paginationNumbers = document.getElementById('pagination-numbers');
    const pageInfo = document.getElementById('page-info');

    // --- Modal References ---
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalRarity = document.getElementById('modal-rarity');
    const closeModal = document.querySelector('.close-modal');

    // --- Mock Data Generators ---
    const collections = ["CyberPunk", "Bored Ape", "EtherRock", "Azuki", "Doodles", "CloneX", "Moonbird"];
    const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
    
    const nftImages = [
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1614728853970-32a2656d7088?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop"
    ];

    function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    // Generate 36 Unique NFTs
    for (let i = 1; i <= totalItems; i++) {
        const collection = getRandom(collections);
        const rarity = getRandom(rarities);
        // Price matches the smart contract for consistency
        const price = "0.001 ETH"; 
        
        allProducts.push({
            id: i,
            name: `${collection} #${1000 + i}`,
            price: price,
            img: getRandom(nftImages),
            rarity: rarity,
            description: `This is a unique digital asset from the ${collection} collection. Minted on the Ethereum blockchain, item #${1000+i} features distinct traits and verified ownership history. Rarity Class: ${rarity}.`
        });
    }

    // --- Open Modal Function ---
    function openModal(product) {
        modalImg.src = product.img;
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.description;
        modalPrice.innerText = product.price;
        modalRarity.innerText = product.rarity;
        
        // Rarity Colors
        if(product.rarity === 'Legendary') modalRarity.style.color = '#ffd700'; // Gold
        else if(product.rarity === 'Epic') modalRarity.style.color = '#a335ee'; // Purple
        else modalRarity.style.color = '#00ff41'; // Green

        // Show Modal
        modal.classList.add('show');
        
        // Reset Mint Button state when opening new item
        mintBtn.innerText = "Mint Now";
        mintBtn.disabled = false;
        mintBtn.style.background = "var(--primary-color)";
        mintBtn.style.color = "#000";
    }

    // --- Close Modal Logic ---
    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    // --- Display Grid Items ---
    function displayProducts(page) {
        gridContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = allProducts.slice(start, end);

        pageItems.forEach(product => {
            const card = document.createElement('article');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="img-wrapper">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="creator">Creator: Temtudo Labs</span>
                    <h4>${product.name}</h4>
                    <span class="price-tag">${product.price}</span>
                </div>
            `;
            
            // Add Click Event to Open Modal
            card.addEventListener('click', () => openModal(product));

            gridContainer.appendChild(card);
        });

        // Update Info Text
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pageInfo.innerText = `Page ${page} of ${totalPages}`;
    }

    // --- Pagination Setup ---
    function setupPagination() {
        paginationNumbers.innerHTML = "";
        const pageCount = Math.ceil(totalItems / itemsPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;
            btn.className = 'page-btn';
            
            btn.addEventListener('click', () => {
                currentPage = i;
                updateInterface();
            });
            paginationNumbers.appendChild(btn);
        }
    }

    // --- Update Interface Helper ---
    function updateInterface() {
        displayProducts(currentPage);
        
        // Update Number Buttons
        const buttons = document.querySelectorAll('.page-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        if(buttons[currentPage - 1]) buttons[currentPage - 1].classList.add('active');

        // Update Arrows
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        
        btnPrev.disabled = currentPage === 1;
        btnNext.disabled = currentPage === Math.ceil(totalItems / itemsPerPage);
    }

    // --- Prev/Next Listeners ---
    document.getElementById('btn-prev').addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; updateInterface(); }
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        if (currentPage < Math.ceil(totalItems / itemsPerPage)) { currentPage++; updateInterface(); }
    });

    // --- Initialization ---
    setupPagination();
    updateInterface();
});