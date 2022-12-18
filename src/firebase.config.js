import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOw6e9e7kx5LDhwCXiMTa6a2ZOwjcSIKU",
    authDomain: "uttardesi-a4a68.firebaseapp.com",
    databaseURL: "https://uttardesi-a4a68-default-rtdb.firebaseio.com",
    projectId: "uttardesi-a4a68",
    storageBucket: "uttardesi-a4a68.appspot.com",
    messagingSenderId: "477642744741",
    appId: "1:477642744741:web:011d7162a04538998afe4c",
    measurementId: "G-KWFQTVS8V9"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export {app,firestore, storage};