const admin = require('firebase-admin');

const serviceAccount = require('./configAdm');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});