// ╔══════════════════════════════════════════════════════════════╗
// ║  CONFIGURACIÓN DE FIREBASE — Árbol de los Deseos           ║
// ║                                                            ║
// ║  INSTRUCCIONES:                                            ║
// ║  1. Ve a https://console.firebase.google.com               ║
// ║  2. Crea un proyecto nuevo (o usa uno existente)           ║
// ║  3. En "Configuración del proyecto" > "Tus apps",          ║
// ║     agrega una app web (</>)                               ║
// ║  4. Copia los valores de firebaseConfig aquí abajo         ║
// ║  5. En Firestore Database, crea la base de datos           ║
// ║     (modo producción, región us-east1 o la más cercana)    ║
// ║  6. En Reglas de Firestore, pega las reglas de abajo       ║
// ║                                                            ║
// ║  REGLAS DE FIRESTORE (pegar en Firestore > Reglas):        ║
// ║                                                            ║
// ║  rules_version = '2';                                      ║
// ║  service cloud.firestore {                                 ║
// ║    match /databases/{database}/documents {                 ║
// ║      match /deseos/{deseoId} {                             ║
// ║        allow read: if true;                                ║
// ║        allow create: if request.resource.data.estado       ║
// ║                       == "pendiente";                      ║
// ║        allow update, delete: if true;                      ║
// ║      }                                                     ║
// ║    }                                                       ║
// ║  }                                                         ║
// ╚══════════════════════════════════════════════════════════════╝

export const firebaseConfig = {
    apiKey:            "TU_API_KEY_AQUI",
    authDomain:        "TU_PROYECTO.firebaseapp.com",
    projectId:         "TU_PROJECT_ID",
    storageBucket:     "TU_PROYECTO.firebasestorage.app",
    messagingSenderId: "TU_SENDER_ID",
    appId:             "TU_APP_ID"
};

// Nombre de la colección en Firestore
export const COLLECTION_NAME = "deseos";
