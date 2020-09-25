import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCXLyCv_NAXWbbpzamF6Fi_taS78VyVjOc',
  authDomain: 'nwitter-a7a0b.firebaseapp.com',
  databaseURL: 'https://nwitter-a7a0b.firebaseio.com',
  projectId: 'nwitter-a7a0b',
  storageBucket: 'nwitter-a7a0b.appspot.com',
  messagingSenderId: '909117376066',
  appId: '1:909117376066:web:52f5a12bfa790f7c61cfdb',
};

export default firebase.initializeApp(firebaseConfig);
