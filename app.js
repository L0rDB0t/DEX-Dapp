// Configuración
const DEX_ADDRESS = "0xb551d5c0e5e9e9ef5ac7e3076a82677f98896504";
const TOKEN_ADDRESS = "0x53844F9577C2334e541Aec7Df7174ECe5dF1fCf0";

// ABI del MiniDEX (solo las funciones que usaremos)
const DEX_ABI = [ 
    [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
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
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
];

const TOKEN_ABI = [
    "function approve(address spender, uint256 amount) returns (bool)",
    "function balanceOf(address account) view returns (uint256)"
];

let dexContract, tokenContract, provider, signer;

// Inicialización
async function init() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    
    dexContract = new ethers.Contract(DEX_ADDRESS, DEX_ABI, signer);
    tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);
    
    document.getElementById("contractAddress").textContent = DEX_ADDRESS;
    updateReserves();
    
    // Actualizar cada 15 segundos
    setInterval(updateReserves, 15000);
}

// Mostrar notificación
function showAlert(message, isSuccess) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${isSuccess ? "success" : "error"}`;
    alert.textContent = message;
    document.querySelector(".container").prepend(alert);
    setTimeout(() => alert.remove(), 5000);
}

// Inicializar pool
async function initPool() {
    try {
        const tokenAmount = ethers.utils.parseEther(document.getElementById("initTokenAmount").value);
        const ethAmount = ethers.utils.parseEther(document.getElementById("initEthAmount").value);
        
        const tx = await dexContract.initializePool(tokenAmount, { value: ethAmount });
        await tx.wait();
        
        showAlert("✅ Pool inicializado con éxito", true);
        updateReserves();
    } catch (error) {
        showAlert(`❌ Error: ${error.message.split("(")[0]}`, false);
        console.error(error);
    }
}

// Ejecutar swap
async function doSwap() {
    try {
        const isEthToToken = document.getElementById("swapDirection").value === "true";
        const amountIn = ethers.utils.parseEther(document.getElementById("swapAmount").value);

        if (isEthToToken) {
            const tx = await dexContract.swap(true, amountIn, { value: amountIn });
            await tx.wait();
        } else {
            await tokenContract.approve(DEX_ADDRESS, amountIn);
            const tx = await dexContract.swap(false, amountIn);
            await tx.wait();
        }
        
        showAlert("✅ Swap ejecutado correctamente", true);
        updateReserves();
    } catch (error) {
        showAlert(`❌ Error: ${error.message.split("(")[0]}`, false);
        console.error(error);
    }
}

// Actualizar reservas
async function updateReserves() {
    try {
        const [ethReserve, tokenReserve] = await Promise.all([
            dexContract.ethReserve(),
            dexContract.tokenReserve()
        ]);
        
        document.getElementById("ethReserve").textContent = 
            parseFloat(ethers.utils.formatEther(ethReserve)).toFixed(4);
        document.getElementById("tokenReserve").textContent = 
            parseFloat(ethers.utils.formatEther(tokenReserve)).toFixed(4);
    } catch (error) {
        console.error("Error al actualizar reservas:", error);
    }
}

window.onload = init;