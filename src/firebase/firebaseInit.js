import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDkdoHQo4AQOpZcrqN0OOsXYLpTYEEPf1Q",
    authDomain: "fireblog-e9581.firebaseapp.com",
    projectId: "fireblog-e9581",
    storageBucket: "fireblog-e9581.appspot.com",
    messagingSenderId: "223362962718",
    appId: "1:223362962718:web:59cdf41ae3565f65a2e50f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()