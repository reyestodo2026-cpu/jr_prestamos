// ============================================
// FIREBASE CONFIGURATION - JR Prestamos
// ============================================

const firebaseConfig = {
    apiKey: "AIzaSyBFERXwYzqwWh1N3gKBr91DKyti6YBGFSM",
    authDomain: "jr-prestamos.firebaseapp.com",
    databaseURL: "https://jr-prestamos-default-rtdb.firebaseio.com",
    projectId: "jr-prestamos",
    storageBucket: "jr-prestamos.firebasestorage.app",
    messagingSenderId: "134802132735",
    appId: "1:134802132735:web:8c9772e4428e85b8cf06ca"
};

// Inicializar Firebase (formato compat para CDN)
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
