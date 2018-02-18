import * as firebase from 'firebase';
import 'firebase/firestore';

const configureDatabase = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyBOfE743jVtmY3f5nKcPwFoTnRiXw0tVO8",
		authDomain: "slepen-f0b92.firebaseapp.com",
		databaseURL: "https://slepen-f0b92.firebaseio.com",
		projectId: "slepen-f0b92",
		storageBucket: "slepen-f0b92.appspot.com",
		messagingSenderId: "139545115895"
	};

	firebase.initializeApp(firebaseConfig);

	return firebase.firestore();
}

export default configureDatabase;