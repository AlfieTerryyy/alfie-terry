var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var auth = firebase.auth();

db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            var message = change.doc.data();
            var chat = document.getElementById('chat');
            var newMessage = document.createElement('div');
            newMessage.textContent = message.content;
            chat.appendChild(newMessage);
            chat.scrollTop = chat.scrollHeight;
        }
    });
});

function sendMessage() {
    var message = document.getElementById('message').value;
    db.collection('messages').add({
        content: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    document.getElementById('message').value = '';
}
