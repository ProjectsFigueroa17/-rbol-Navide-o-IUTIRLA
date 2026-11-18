import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-check.js";

export const firebaseConfig = {
    apiKey: "AIzaSyCIIJayJodpW_4pGMGDvd35QTr3MnAOaq0",
    authDomain: "arbol-de-los-deseos-73f8a.firebaseapp.com",
    projectId: "arbol-de-los-deseos-73f8a",
    storageBucket: "arbol-de-los-deseos-73f8a.firebasestorage.app",
    messagingSenderId: "272720207465",
    appId: "1:272720207465:web:b9a523d8ebba46d5c50cf8",
    measurementId: "G-5B2DWMV06Q",
    databaseURL: "https://arbol-de-los-deseos-73f8a-default-rtdb.firebaseio.com",
    appCheckSiteKey: "6LficyUuAAAAAITDfWildysJaQFJbrR9MHzgj2vq"
};

export const COLLECTION_NAME = "publicWishes";
export const app = initializeApp(firebaseConfig);

if (firebaseConfig.appCheckSiteKey) {
    initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(firebaseConfig.appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
    });
} else {
    console.warn("Configura la clave de sitio de App Check para proteger las conexiones a Firebase.");
}

export const auth = getAuth(app);
export const database = getDatabase(app);

