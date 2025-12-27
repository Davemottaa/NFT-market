document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. CONFIGURATION (SMART CONTRACT)
    // ==========================================
    
    // 1. PASTE YOUR DEPLOYED CONTRACT ADDRESS HERE
    const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138"; 
    
    // 2. ABI (Interface to communicate with Solidity)
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
    // 1. UI: MOBILE MENU & ANIMATIONS
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

    // Scroll Reveal Animation (Observer)
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
                // Setup Provider & Signer
                provider = new ethers.BrowserProvider(window.ethereum);
                signer = await provider.getSigner();
                
                // Initialize Contract Instance
                if (contractAddress && contractAddress !== "YOUR_CONTRACT_ADDRESS_HERE") {
                    contract = new ethers.Contract(contractAddress, contractABI, signer);
                }

                // Update UI Button with Wallet Address
                const address = await signer.getAddress();
                const shortAddress = `${address.substring(0, 6)}...${address.substring(38)}`;
                
                connectBtn.innerText = shortAddress;
                connectBtn.style.borderColor = "#00ff41"; // Matrix Green
                connectBtn.style.background = "rgba(0, 255, 65, 0.1)";
                
                console.log("Web3 Connected. User:", address);
                return true;

            } catch (error) {
                console.error("Connection Error:", error);
                return false;
            }
        } else {
            alert("MetaMask not found! Please install the extension.");
            window.open("https://metamask.io/download/", "_blank");
            return false;
        }
    }

    connectBtn.addEventListener('click', initWeb3);


    // ==========================================
    // 3. MODAL LOGIC (POPUP & MINTING)
    // ==========================================
    
    // Modal Elements
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const modalRarity = document.getElementById('modal-rarity');
    const closeModal = document.querySelector('.close-modal');
    const mintBtn = document.querySelector('.modal-action .btn-primary');

    // Function to Open Modal
    function openModal(product) {
        modalImg.src = product.img;
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.description;
        modalPrice.innerText = product.price;
        modalRarity.innerText = product.rarity;
        
        // Dynamic Rarity Colors
        if(product.rarity === 'Legendary') modalRarity.style.color = '#ffaa00'; // Gold
        else if(product.rarity === 'Epic') modalRarity.style.color = '#a335ee'; // Purple
        else modalRarity.style.color = '#00ff41'; // Green

        modal.classList.add('show');

        // Reset Mint Button state
        mintBtn.innerText = "Mint Now";
        mintBtn.disabled = false;
        mintBtn.style.background = "var(--primary-color)";
        mintBtn.style.color = "#000";
    }

    // Close Modal Events
    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

    // Minting Logic (Inside Modal)
    mintBtn.addEventListener('click', async () => {
        // Ensure Web3 is ready
        if (!contract) {
            const connected = await initWeb3();
            if(!connected || !contract) {
                alert("Please connect wallet and configure contract address in script.js");
                return;
            }
        }

        try {
            mintBtn.innerText = "Processing...";
            mintBtn.disabled = true;

            // Execute Transaction (0.001 ETH)
            const tx = await contract.mint({ 
                value: ethers.parseEther("0.001") 
            });

            console.log("Tx Sent:", tx.hash);
            alert(`Transaction Sent!\nHash: ${tx.hash}\nWaiting for confirmation...`);

            await tx.wait(); // Wait for Block Confirmation

            alert("SUCCESS! NFT Minted.");
            mintBtn.innerText = "Minted Successfully";
            mintBtn.style.background = "#fff";

        } catch (error) {
            console.error("Mint Error:", error);
            alert("Transaction failed or rejected.");
            mintBtn.innerText = "Mint Now";
            mintBtn.disabled = false;
        }
    });


    // ==========================================
    // 4. MARKETPLACE LOGIC (TRENDING + LIVE FEED)
    // ==========================================
    
    // --- DOM Containers ---
    const trendingContainer = document.getElementById('trending-container');
    const liveContainer = document.getElementById('live-container');
    const timerDisplay = document.getElementById('timer-display');

    // --- Mock Data Generators ---
    const collections = ["CyberPunk", "Bored Ape", "EtherRock", "Azuki", "Doodles", "CloneX"];
    const nftImages = [
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&auto=format&fit=crop"
    ];

    function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }


    // --- 1. RENDER TRENDING (Static High Value) ---
    function initTrending() {
        // Generate 3 static items
        for (let i = 1; i <= 3; i++) {
            const product = {
                id: `trend-${i}`,
                name: `Golden Ape #${i}99`,
                price: `${(Math.random() * 10 + 5).toFixed(1)} ETH`, // High Price
                img: nftImages[i % nftImages.length],
                rarity: "Legendary",
                description: "Top traded asset with verified volume on secondary market."
            };
            
            createCard(product, trendingContainer, true); // true = isTrending
        }
    }


    // --- 2. RENDER LIVE FEED (Dynamic) ---
    let liveProducts = [];

    function initLiveFeed() {
        // Generate 6 initial items
        for (let i = 1; i <= 6; i++) {
            addNewLiveItem(false); // false = no initial animation
        }
    }

    // Function to create ONE new item and push to top of array
    function addNewLiveItem(animate = true) {
        const id = Math.floor(Math.random() * 9000) + 1000;
        const collection = getRandom(collections);
        
        const newProduct = {
            id: `live-${Date.now()}`, // Unique ID based on timestamp
            name: `${collection} #${id}`,
            price: `${(Math.random() * 0.5).toFixed(3)} ETH`, // Normal Price
            img: getRandom(nftImages),
            rarity: Math.random() > 0.8 ? "Rare" : "Common",
            description: "Just minted on the blockchain via Temtudo Contract."
        };

        // Add to the beginning of the array
        liveProducts.unshift(newProduct);
        
        // Keep only 6 items to preserve layout
        if (liveProducts.length > 6) liveProducts.pop();

        // Render Grid
        renderLiveGrid(animate);
    }

    // Render Logic
    function renderLiveGrid(animate) {
        liveContainer.innerHTML = ""; // Clear container
        
        liveProducts.forEach((product, index) => {
            // Apply animation class if it's the first item and animation is enabled
            const isNew = (index === 0 && animate);
            createCard(product, liveContainer, false, isNew);
        });
    }


    // --- 3. HELPER: CREATE CARD ---
    function createCard(product, container, isTrending = false, isNew = false) {
        const card = document.createElement('article');
        
        // Add specific classes for styling
        card.className = `product-card ${isTrending ? 'trending-card' : ''} ${isNew ? 'new-item-anim' : ''}`;
        
        const badge = isTrending ? `<span class="trending-badge"><i class="fas fa-fire"></i> Hot</span>` : '';

        card.innerHTML = `
            ${badge}
            <div class="img-wrapper">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="creator">Temtudo Labs</span>
                <h4>${product.name}</h4>
                <span class="price-tag">${product.price}</span>
            </div>
        `;
        
        // Click event to open details
        card.addEventListener('click', () => openModal(product));
        container.appendChild(card);
    }


    // --- 4. TIMER LOGIC (30 Seconds Loop) ---
    let timeLeft = 30;
    
    setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Updating in ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            addNewLiveItem(true); // Add new item WITH animation
            timeLeft = 30; // Reset timer
            
            // Visual feedback on timer text
            timerDisplay.style.color = "#00ff41";
            setTimeout(() => timerDisplay.style.color = "#666", 1000);
        }
    }, 1000);


    // --- INITIALIZATION ---
    initTrending();
    initLiveFeed();
});