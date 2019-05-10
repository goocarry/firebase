import firebase from 'react-native-firebase';

state = {
    users: []
}

export const 

export const createUser = (email, password) => {
    console.log(this.email);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        firebase.database().ref('users/' + res.user.uid).set({
            firstName: "firstname",
            lastName: "lastname"
        })
    })
    .catch((error) => {
    console.log('create user error:', error);
    alert(error);
});
}