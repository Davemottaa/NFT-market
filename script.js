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
