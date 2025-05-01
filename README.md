markdown
# 🚀 MiniDEX - Interfaz Web3 para Swap de Tokens

![MiniDEX Preview](https://i.imgur.com/JyhxQN2.png)  
*Interfaz descentralizada para intercambio de tokens en Ethereum (Sepolia Testnet)*

## 🌟 Características Principales
- ✅ Swap entre ETH y tokens ERC-20
- ✅ Visualización en tiempo real de reservas del pool
- ✅ Conexión con MetaMask
- ✅ Diseño responsive (mobile/desktop)
- ✅ Despliegue automático en Vercel

## 🛠 Tecnologías Utilizadas
| Tecnología | Uso |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | Estructura base |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | Estilos y efectos visuales |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | Lógica de interacción |
| ![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white) | Contrato inteligente |
| ![Ethers.js](https://img.shields.io/badge/Ethers.js-3C3C3D) | Conexión con blockchain |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) | Hosting y despliegue |

## 📦 Estructura del Proyecto
dex-dapp/
├── index.html # Interfaz principal
├── styles.css # Estilos personalizados
├── app.js # Lógica de conexión Web3
├── vercel.json # Configuración de despliegue
└── README.md # Este archivo


## 🚀 Despliegue en Vercel
1. **Pre-requisitos**:
   - Cuenta en [Vercel](https://vercel.com)
   - Repositorio en GitHub con el proyecto

2. **Pasos**:
   ```bash
   # 1. Conectar repositorio a Vercel
   # 2. Configurar como proyecto estático:
   #    - Framework Preset: "Other"
   #    - Build Command: (dejar vacío)
   #    - Output Directory: .
   # 3. Hacer clic en "Deploy"
Configuración recomendada:

Añadir variable de entorno VITE_NETWORK=sepolia

Dominio personalizado (opcional)

🔧 Configuración Local
bash
git clone https://github.com/tu-usuario/dex-dapp.git
cd dex-dapp
# Abrir index.html con Live Server (VS Code)
📄 Contrato Inteligente
Dirección en Sepolia: 0xb551d5...96504

Token DAI de prueba: 0x53844F...1fCf0

🌐 Demo en Vivo
🔗 https://dex-dapp-navy.vercel.app

🛠 Troubleshooting
Problema	Solución
CSS no carga	Verificar ruta en <link href="/styles.css">
Error 404	Asegurar que index.html esté en raíz
Transacción fallida	Verificar conexión a Sepolia en MetaMask
🤝 Cómo Contribuir
Haz fork del proyecto

Crea una rama (git checkout -b feature/nueva-funcion)

Haz commit de tus cambios (git commit -m 'Add some feature')

Haz push a la rama (git push origin feature/nueva-funcion)

Abre un Pull Request

📜 Licencia
MIT - Libre para uso y modificación

Nota: Proyecto para fines educativos. Usar en mainnet bajo tu propio riesgo.


### 💡 **Recomendaciones adicionales**:
1. **Para la imagen preview**:
   - Reemplaza la URL por una captura real de tu proyecto
   - Puedes subirla a [Imgur](https://imgur.com/) y actualizar el enlace

2. **Para los badges**:
   - Los íconos se generan automáticamente con [Shields.io](https://shields.io/)
   - Puedes agregar más tecnologías si necesitas

3. **Para la sección de troubleshooting**:
   - Actualiza con los errores específicos que hayas encontrado

4. **Si añades backend**:
   - Incluye una sección de "Variables de Entorno" con ejemplos

Este README está optimizado para:
- ✅ Claridad técnica
- ✅ Estructura visual
- ✅ Compatibilidad con GitHub/Vercel
- ✅ Atractivo para reclutadores

¿Necesitas ajustar alguna sección en particular?
