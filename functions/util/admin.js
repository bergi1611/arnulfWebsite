const admin = require('firebase-admin');
const serviceAccount = require("./arnulfbook-firebase-adminsdk-cibuw-0a92a6472b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://arnulfbook.firebaseio.com"
  });

const db = admin.firestore();  

module.exports = { admin, db };