<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBxUTSE2K1_B-Xl4dFZogjzWvZMHMZWOw0",
    authDomain: "hazalanlar-a9dca.firebaseapp.com",
    databaseURL: "https://hazalanlar-a9dca-default-rtdb.firebaseio.com",
    projectId: "hazalanlar-a9dca",
    storageBucket: "hazalanlar-a9dca.firebasestorage.app",
    messagingSenderId: "113722451618",
    appId: "1:113722451618:web:cac088b1218a19edbd59fb",
    measurementId: "G-6DDTWK16T9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>