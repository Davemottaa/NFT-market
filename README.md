Aqui está todo o projeto consolidado em um único bloco de texto.

Você pode copiar tudo abaixo, colar em um Bloco de Notas e salvar como PROJETO_COMPLETO.txt. Depois, basta separar o conteúdo nos arquivos indicados pelos separadores ===== NOME DO ARQUIVO =====.

Plaintext

==============================================================================
ARQUIVO 1: index.html
==============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Temtudo - Premier NFT Marketplace. Collect rare digital assets.">
    <title>Temtudo | NFT Marketplace</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="header">
        <div class="container header-container">
            <a href="#" class="logo">&lt;Temtudo.NFT/&gt;</a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#hero">Drops</a></li>
                    <li><a href="#products">Marketplace</a></li>
                    <li><a href="#benefits">Creators</a></li>
                    <li><button id="connect-wallet" class="nav-btn">Connect Wallet</button></li>
                </ul>
            </nav>

            <div class="hamburger"><i class="fas fa-bars"></i></div>
        </div>
    </header>

    <section id="hero" class="hero">
        <div class="container hero-content">
            <h1 class="hidden-element">Collect Digital <span class="highlight">Eternity</span>.</h1>
            <p class="hidden-element delay-1">Discover, collect, and sell extraordinary NFTs. The world's first matrix-based digital marketplace.</p>
            <div class="hero-btns hidden-element delay-2">
                <a href="#products" class="btn btn-primary">Explore Collection</a>
                <a href="#benefits" class="btn btn-outline">Create NFT</a>
            </div>
        </div>
        <div class="hero-bg-overlay"></div>
    </section>

    <section id="benefits" class="section benefits">
        <div class="container">
            <h2 class="section-title hidden-element">Market Features</h2>
            <div class="benefits-grid">
                <div class="card hidden-element">
                    <i class="fas fa-gem card-icon"></i>
                    <h3>Rare Items</h3>
                    <p>Verified scarcity. Own unique digital assets on the blockchain.</p>
                </div>
                <div class="card hidden-element delay-1">
                    <i class="fas fa-fingerprint card-icon"></i>
                    <h3>Proof of Ownership</h3>
                    <p>Smart contracts guarantee your rights and resale royalties.</p>
                </div>
                <div class="card hidden-element delay-2">
                    <i class="fas fa-rocket card-icon"></i>
                    <h3>Instant Launch</h3>
                    <p>Mint directly to your wallet with low gas fees.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="products" class="section products">
        <div class="container">
            
            <div class="market-section">
                <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">
                    <i class="fas fa-fire" style="color: #ff4444;"></i> Trending Collections
                </h2>
                <div id="trending-container" class="products-grid">
                    </div>
            </div>

            <hr style="border-color: #222; margin: 60px 0;">

            <div class="market-section">
                <div class="section-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 class="section-title" style="text-align: left; margin-bottom: 0; font-size: 1.5rem;">
                        New Mints <span class="live-dot"></span>
                    </h2>
                    <span id="timer-display" style="color: #666; font-family: monospace;">Updating in 30s</span>
                </div>
                
                <div id="live-container" class="products-grid">
                    </div>
            </div>

        </div>
    </section>

    <section id="cta-final" class="section cta-final">
        <div class="container cta-content hidden-element">
            <h2>Join the Metaverse.</h2>
            <p>Start your collection today.</p>
            <a href="#products" class="btn btn-primary btn-large">View Drops</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container footer-content">
            <div class="footer-logo">
                <a href="#">&lt;Temtudo.NFT/&gt;</a>
                <p>Digital Art & Collectibles.</p>
            </div>
            <div class="footer-links">
                <h3>Chains</h3>
                <ul>
                    <li><a href="#">Ethereum</a></li>
                    <li><a href="#">Solana</a></li>
                    <li><a href="#">Polygon</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Temtudo.NFT. All rights reserved.</p>
        </div>
    </footer>

    <div id="product-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            
            <div class="modal-grid">
                <div class="modal-img-container">
                    <img id="modal-img" src="" alt="NFT Preview">
                </div>
                
                <div class="modal-info">
                    <div class="modal-header">
                        <span id="modal-rarity" class="rarity-badge">Legendary</span>
                        <h2 id="modal-title">NFT Name</h2>
                    </div>
                    
                    <p id="modal-desc" class="modal-desc">Description goes here...</p>
                    
                    <div class="modal-meta">
                        <div class="meta-item">
                            <span>Creator</span>
                            <p>Temtudo Labs</p>
                        </div>
                        <div class="meta-item">
                            <span>Blockchain</span>
                            <p>Ethereum</p>
                        </div>
                    </div>

                    <div class="modal-action">
                        <div class="price-display">
                            <span>Current Price</span>
                            <h3 id="modal-price">0.00 ETH</h3>
                        </div>
                        <button class="btn btn-primary btn-block">Mint Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.2/ethers.umd.min.js"></script>
    <script src="script.js"></script>
</body>
</html>


==============================================================================
ARQUIVO 2: style.css
==============================================================================
/* --- VARIABLES --- */
:root {
    --primary-color: #00ff41; 
    --primary-hover: #00cc33;
    --bg-color: #050505;
    --card-bg: #111;
    --modal-bg: #0f0f0f;
    --text-color: #e0e0e0;
    --font-heading: 'Space Mono', monospace;
    --font-body: 'Inter', sans-serif;
    --transition: all 0.3s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { background: var(--bg-color); color: var(--text-color); font-family: var(--font-body); overflow-x: hidden; }
a { text-decoration: none; color: inherit; transition: var(--transition); }
img { max-width: 100%; display: block; }
ul { list-style: none; }

/* --- UTILITIES & SECTIONS --- */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.section { padding: 80px 0; }
.section-title { font-family: var(--font-heading); color: var(--primary-color); font-size: 2rem; text-align: center; margin-bottom: 50px; text-transform: uppercase; letter-spacing: 2px; }

/* --- BUTTONS --- */
.btn { display: inline-block; padding: 12px 30px; border-radius: 4px; font-family: var(--font-heading); font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; border: none; }
.btn-primary { background: var(--primary-color); color: #000; box-shadow: 0 0 15px rgba(0, 255, 65, 0.3); }
.btn-primary:hover { background: var(--primary-hover); transform: translateY(-2px); box-shadow: 0 0 25px rgba(0, 255, 65, 0.5); }
.btn-outline { border: 1px solid var(--primary-color); color: var(--primary-color); margin-left: 15px; background: transparent; }
.btn-outline:hover { background: rgba(0, 255, 65, 0.1); }
.btn-block { width: 100%; text-align: center; margin-top: 10px; }

/* --- HEADER --- */
.header { background: rgba(5, 5, 5, 0.9); padding: 20px 0; position: fixed; width: 100%; top: 0; z-index: 1000; border-bottom: 1px solid rgba(0, 255, 65, 0.15); backdrop-filter: blur(10px); }
.header-container { display: flex; justify-content: space-between; align-items: center; }
.logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--primary-color); }
.nav-list { display: flex; align-items: center; gap: 30px; }
.nav-list a:hover { color: var(--primary-color); }
.nav-btn { border: 1px solid var(--primary-color); background: transparent; color: var(--primary-color); padding: 8px 15px; border-radius: 4px; font-family: var(--font-heading); cursor: pointer; transition: var(--transition); }
.nav-btn:hover { background: rgba(0, 255, 65, 0.1); }
.hamburger { display: none; font-size: 1.5rem; color: var(--primary-color); cursor: pointer; }

/* --- HERO --- */
.hero { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; background: radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); text-align: center; padding-top: 80px; }
.hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
.hero-content { position: relative; z-index: 1; max-width: 800px; }
.hero h1 { font-family: var(--font-heading); font-size: 3.5rem; line-height: 1.2; margin-bottom: 20px; }
.highlight { color: var(--primary-color); text-shadow: 0 0 10px rgba(0, 255, 65, 0.3); }
.hero p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 40px; }

/* --- MARKETPLACE GRID (NFT Style) --- */
.products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; min-height: 400px; }
.product-card { background: #0f0f0f; border: 1px solid #222; border-radius: 12px; overflow: hidden; transition: transform 0.3s ease; display: flex; flex-direction: column; cursor: pointer; position: relative; }
.product-card:hover { border-color: var(--primary-color); transform: translateY(-7px); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); }
.img-wrapper { width: 100%; height: 240px; background: #000; overflow: hidden; }
.product-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.product-card:hover img { transform: scale(1.1); }
.product-info { padding: 15px 20px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; border-top: 1px solid #1a1a1a; }
.product-info h4 { font-size: 1.1rem; color: #fff; margin-bottom: 5px; font-weight: 600; }
.product-info span.creator { font-size: 0.8rem; color: #666; display: block; margin-bottom: 10px; }
.price-tag { font-family: var(--font-heading); color: var(--primary-color); font-size: 1.1rem; font-weight: bold; display: block; margin-top: auto; }

/* --- LIVE & TRENDING STYLES --- */
.live-dot { display: inline-block; width: 10px; height: 10px; background-color: #00ff41; border-radius: 50%; margin-left: 10px; box-shadow: 0 0 10px #00ff41; animation: blink 2s infinite; }
@keyframes blink { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
.trending-card { border: 1px solid #ffaa00 !important; box-shadow: 0 0 15px rgba(255, 170, 0, 0.15) !important; }
.trending-card .price-tag { color: #ffaa00 !important; }
.trending-badge { position: absolute; top: 10px; right: 10px; background: #ffaa00; color: #000; font-weight: bold; font-size: 0.7rem; padding: 3px 8px; border-radius: 4px; z-index: 2; font-family: var(--font-heading); }
@keyframes slideIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
.new-item-anim { animation: slideIn 0.6s ease forwards; }

/* --- MODAL (POPUP) STYLES --- */
.modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
.modal.show { display: flex; opacity: 1; }
.modal-content { background-color: var(--modal-bg); border: 1px solid var(--primary-color); box-shadow: 0 0 40px rgba(0, 255, 65, 0.15); width: 90%; max-width: 900px; border-radius: 12px; position: relative; padding: 30px; animation: slideUp 0.4s ease; }
.close-modal { position: absolute; top: 15px; right: 25px; color: #aaa; font-size: 28px; font-weight: bold; cursor: pointer; transition: 0.2s; z-index: 10; }
.close-modal:hover { color: var(--primary-color); }
.modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.modal-img-container { height: 400px; border-radius: 8px; overflow: hidden; background: #000; }
.modal-img-container img { width: 100%; height: 100%; object-fit: cover; }
.modal-header h2 { font-size: 2rem; margin-bottom: 10px; font-family: var(--font-heading); }
.rarity-badge { background: rgba(0, 255, 65, 0.15); color: var(--primary-color); padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; text-transform: uppercase; font-weight: bold; margin-bottom: 10px; display: inline-block; border: 1px solid var(--primary-color); }
.modal-desc { color: #aaa; margin-bottom: 25px; line-height: 1.6; font-size: 0.95rem; }
.modal-meta { display: flex; gap: 30px; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #222; }
.meta-item span { font-size: 0.8rem; color: #666; text-transform: uppercase; }
.meta-item p { font-size: 1.1rem; color: #fff; font-weight: 600; }
.modal-action { background: #151515; padding: 20px; border-radius: 8px; }
.price-display span { font-size: 0.9rem; color: #888; }
.price-display h3 { font-size: 1.8rem; color: #fff; font-family: var(--font-heading); margin-bottom: 15px; }
@keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

/* --- REST (Footer, Benefits, Responsive) --- */
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.card { background-color: var(--card-bg); padding: 40px; border: 1px solid #222; border-radius: 8px; transition: var(--transition); text-align: center; }
.card:hover { border-color: var(--primary-color); transform: translateY(-5px); }
.card-icon { font-size: 2.5rem; color: var(--primary-color); margin-bottom: 20px; }
.cta-final { text-align: center; background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop'); background-size: cover; background-attachment: fixed; }
.cta-content h2 { font-size: 2.5rem; font-family: var(--font-heading); margin-bottom: 15px; }
.footer { background: #050505; padding: 60px 0 20px; border-top: 1px solid #222; }
.footer-content { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; }
.footer-logo a { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: #fff; }
.footer-links h3 { color: var(--primary-color); font-family: var(--font-heading); margin-bottom: 20px; }
.footer-social a { font-size: 1.5rem; margin-right: 15px; color: var(--text-muted); }
.footer-bottom { text-align: center; padding-top: 20px; border-top: 1px solid #111; color: #555; }

/* Responsive */
@media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
    .products-grid { grid-template-columns: 1fr 1fr; }
    .modal-grid { grid-template-columns: 1fr; }
    .modal-img-container { height: 250px; }
    .nav { position: fixed; top: 70px; right: -100%; width: 100%; height: calc(100vh - 70px); background: #0a0a0a; flex-direction: column; transition: 0.4s; border-top: 1px solid var(--primary-color); }
    .nav.active { right: 0; }
    .nav-list { flex-direction: column; }
    .hamburger { display: block; }
}
@media (max-width: 500px) { .products-grid { grid-template-columns: 1fr; } }


==============================================================================
ARQUIVO 3: script.js
==============================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 0. CONFIGURATION (SMART CONTRACT)
    // ==========================================
    
    // 1. PASTE YOUR DEPLOYED CONTRACT ADDRESS HERE
    const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"; 
    
    // 2. ABI (Interface to communicate with Solidity)
    const contractABI = [
        "function mint() public payable", 
        "function totalSupply() public view returns (uint256)",
        "function mintPrice() public view returns (uint256)"
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


==============================================================================
ARQUIVO 4: TemtudoNFT.sol (Smart Contract)
==============================================================================
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

        // Safe transfer using .call
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


==============================================================================
ARQUIVO 5: README.md
==============================================================================
# Temtudo.NFT | Web3 Marketplace

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Network](https://img.shields.io/badge/Network-Sepolia_Testnet-blue)
![Tech](https://img.shields.io/badge/Tech-HTML_CSS_JS_Solidity-orange)

> A decentralized application (dApp) for minting and collecting unique digital assets. Built with a "Matrix/Cyberpunk" aesthetic, focusing on conversion, UI/UX, and real-time blockchain interaction.

## 🚀 Features

### 🟢 Frontend (UI/UX)
- **Matrix/Dark Aesthetic:** Immersive design using neon greens and deep blacks.
- **Dual Marketplace Feeds:**
  - 🔥 **Trending:** Highlights high-value, static assets.
  - ⚡ **Live Feed:** Simulates real-time minting updates every 30 seconds with auto-scroll animations.
- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
- **Interactive Modals:** Glassmorphism popups for detailed NFT viewing and minting.

### ⛓️ Backend (Web3 & Blockchain)
- **Wallet Connection:** Seamless integration with **MetaMask** using Ethers.js V6.
- **Smart Contract Integration:** connects directly to the Ethereum Blockchain (Sepolia Testnet).
- **Real-Time Minting:** Users can mint actual NFTs by paying gas fees + mint price.

## 🛠️ Tech Stack

- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Web3 Library:** [Ethers.js V6](https://docs.ethers.org/v6/).
- **Smart Contract:** Solidity (v0.8.20).
- **Standards:** ERC-721 (OpenZeppelin).

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/temtudo-nft.git](https://github.com/YOUR_USERNAME/temtudo-nft.git)
   cd temtudo-nft

2. Run locally:

    Use "Live Server" extension in VS Code.

    Or Python: python3 -m http.server

    Open in Browser: http://127.0.0.1:8000

Developed by Davi Mota