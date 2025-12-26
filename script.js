document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. UI: MENU & ANIMATIONS
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list li a');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // ==========================================
    // 2. WEB3 CONNECTION
    // ==========================================
    const connectBtn = document.getElementById('connect-wallet');
    connectBtn.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                connectBtn.innerText = "Connecting...";
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                const account = accounts[0];
                connectBtn.innerText = `${account.substring(0, 6)}...${account.substring(38)}`;
                connectBtn.style.borderColor = "#00ff41";
                connectBtn.style.background = "rgba(0, 255, 65, 0.1)";
            } catch (error) {
                alert("Connection failed.");
                connectBtn.innerText = "Connect Wallet";
            }
        } else {
            alert("MetaMask not found!");
        }
    });

    // ==========================================
    // 3. NFT MARKETPLACE LOGIC
    // ==========================================
    
    // --- Data Configuration ---
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
    const collections = ["CyberPunk", "Bored Ape", "EtherRock", "Azuki", "Doodles", "CloneX", "Moonbird", "CryptoPunks"];
    const rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
    
    // NFT Images (Abstract/Digital Art)
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
        const price = (Math.random() * 2.5).toFixed(3);
        
        allProducts.push({
            id: i,
            name: `${collection} #${1000 + i}`,
            price: `${price} ETH`,
            img: getRandom(nftImages),
            rarity: rarity,
            // Description "Lore"
            description: `This is a unique digital asset from the ${collection} collection. Minted on the Ethereum blockchain, item #${1000+i} features distinct traits and verified ownership history. Rarity Class: ${rarity}.`
        });
    }

    // --- Functions ---

    // 1. Open Modal Function
    function openModal(product) {
        modalImg.src = product.img;
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.description;
        modalPrice.innerText = product.price;
        modalRarity.innerText = product.rarity;
        
        // Color code the rarity
        if(product.rarity === 'Legendary') modalRarity.style.color = '#ffd700'; // Gold
        else if(product.rarity === 'Epic') modalRarity.style.color = '#a335ee'; // Purple
        else modalRarity.style.color = '#00ff41'; // Green

        modal.classList.add('show');
    }

    // 2. Close Modal Functions
    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    // 3. Display Grid Items
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

        // Update Info
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pageInfo.innerText = `Page ${page} of ${totalPages}`;
    }

    // 4. Pagination Setup
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

    // 5. Update Interface Helper
    function updateInterface() {
        displayProducts(currentPage);
        
        const buttons = document.querySelectorAll('.page-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        if(buttons[currentPage - 1]) buttons[currentPage - 1].classList.add('active');

        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        
        btnPrev.disabled = currentPage === 1;
        btnNext.disabled = currentPage === Math.ceil(totalItems / itemsPerPage);
    }

    // 6. Prev/Next Listeners
    document.getElementById('btn-prev').addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; updateInterface(); }
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        if (currentPage < Math.ceil(totalItems / itemsPerPage)) { currentPage++; updateInterface(); }
    });

    // Init
    setupPagination();
    updateInterface();
});

document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURAÇÃO WEB3 REAL ---
    // Cole aqui o endereço do contrato que você criou no Remix
    const contractAddress = "COLE_SEU_ENDEREÇO_DO_REMIX_AQUI"; 
    
    // ABI Mínima (Interface para o JS entender as funções do Solidity)
    const contractABI = [
        "function mint() public payable",
        "function mintPrice() public view returns (uint256)"
    ];

    let provider;
    let signer;
    let contract;

    // ==========================================
    // 1. UI & MENU
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // ==========================================
    // 2. CONEXÃO WEB3 & SMART CONTRACT
    // ==========================================
    const connectBtn = document.getElementById('connect-wallet');

    async function initWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Configura Ethers.js
                provider = new ethers.BrowserProvider(window.ethereum);
                signer = await provider.getSigner();
                
                // Conecta ao Contrato
                contract = new ethers.Contract(contractAddress, contractABI, signer);

                // Atualiza Botão
                const address = await signer.getAddress();
                connectBtn.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;
                connectBtn.classList.add('connected');
                
                console.log("Web3 Inicializado. Contrato:", contractAddress);
                return true;
            } catch (error) {
                console.error("Usuário negou conexão ou erro:", error);
                return false;
            }
        } else {
            alert("MetaMask não encontrada!");
            return false;
        }
    }

    connectBtn.addEventListener('click', initWeb3);

    // ==========================================
    // 3. LÓGICA DE COMPRA (MINTING)
    // ==========================================
    
    // Botão dentro do Modal
    const mintBtn = document.querySelector('.modal-action .btn-primary');
    
    mintBtn.addEventListener('click', async () => {
        if (!contract) {
            const connected = await initWeb3();
            if(!connected) return;
        }

        try {
            mintBtn.innerText = "Processing...";
            mintBtn.disabled = true;

            // PREÇO: No contrato definimos 0.001 ETH.
            // Precisamos enviar esse valor na transação.
            const tx = await contract.mint({ 
                value: ethers.parseEther("0.001") 
            });

            console.log("Transação enviada:", tx.hash);
            alert(`Transação Enviada! Hash: ${tx.hash}\nAguardando confirmação...`);

            // Espera a confirmação do bloco
            await tx.wait();

            alert("SUCESSO! NFT Mintado e enviado para sua carteira.");
            mintBtn.innerText = "Minted Successfully";
            mintBtn.style.background = "#fff";
            mintBtn.style.color = "#000";

        } catch (error) {
            console.error("Erro no Mint:", error);
            alert("Erro na transação. Verifique o console (F12) ou seu saldo.");
            mintBtn.innerText = "Mint Now";
            mintBtn.disabled = false;
        }
    });

    // ==========================================
    // 4. DADOS E MODAL (VISUAL)
    // ==========================================
    // (Mantém a lógica visual de geração de cards e modal que já fizemos)
    
    const totalItems = 36;
    const itemsPerPage = 6;
    let currentPage = 1;
    let allProducts = [];
    const gridContainer = document.getElementById('product-container');
    const paginationNumbers = document.getElementById('pagination-numbers');
    
    // Elementos do Modal
    const modal = document.getElementById('product-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const closeModal = document.querySelector('.close-modal');

    // Dados Mockados
    const nftImages = [
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=600&auto=format&fit=crop"
    ];

    for (let i = 1; i <= totalItems; i++) {
        allProducts.push({
            id: i,
            name: `Genesis NFT #${1000 + i}`,
            price: `0.001 ETH`, // Deve bater com o contrato para não confundir o usuário
            img: nftImages[i % nftImages.length],
            desc: `Item exclusivo da coleção Genesis. Minting on-chain habilitado.`
        });
    }

    function openModal(product) {
        modalImg.src = product.img;
        modalTitle.innerText = product.name;
        modalDesc.innerText = product.desc;
        modalPrice.innerText = product.price;
        modal.classList.add('show');
        
        // Reseta o botão ao abrir novo modal
        mintBtn.innerText = "Mint Now (0.001 ETH)";
        mintBtn.disabled = false;
        mintBtn.style.background = "var(--primary-color)";
    }

    closeModal.addEventListener('click', () => modal.classList.remove('show'));
    window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('show'); });

    function displayProducts(page) {
        gridContainer.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const items = allProducts.slice(start, start + itemsPerPage);

        items.forEach(product => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="img-wrapper"><img src="${product.img}"></div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <span class="price-tag">${product.price}</span>
                </div>
            `;
            card.addEventListener('click', () => openModal(product));
            gridContainer.appendChild(card);
        });
        
        // Paginação simplificada para o exemplo
        paginationNumbers.innerHTML = `Página ${page}`;
    }
    
    // Inits
    displayProducts(1);
    
    // Listeners Paginação
    document.getElementById('btn-prev').addEventListener('click', () => { if(currentPage > 1) displayProducts(--currentPage); });
    document.getElementById('btn-next').addEventListener('click', () => { if(currentPage < 6) displayProducts(++currentPage); });
});