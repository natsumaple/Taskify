importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBZ2DSnOWUnC5bRK6TS_uRKSSTrQpcu9yo",
    authDomain: "taskify-92a86.firebaseapp.com",
    projectId: "taskify-92a86",
    storageBucket: "taskify-92a86.firebasestorage.app",
    messagingSenderId: "1003689124923",
    appId: "1:1003689124923:web:866fd6561a1c8f98e3281e"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.ibb.co.com/dwBKNYP1/taskify.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
