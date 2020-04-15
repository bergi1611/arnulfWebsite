const functions = require('firebase-functions');
const admin = require('firebase-admin');


admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello guuuuysss firebase yeah");
});

exports.getPosts = functions.https.onRequest((req, res) => {
    admin
    .firestore()
    .collection('posts')
    .get()
    .then(data => {
        let posts = [];
        data.forEach(doc => {
            postMessage.push(doc.data());
        });
        return res.json(posts);
    })
    .catch(err => console.error(err));
});