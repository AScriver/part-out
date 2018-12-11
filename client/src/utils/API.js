import axios from 'axios';

export default {
    // Signup a new user
    signUp: function (user) {
        console.log("==================USER SIGNUP - SENT TO API/SIGNUP====================");
        console.log(user);
        return axios.post('/api/signup', user);
    },
    // Login existing user
    login: function (user) {
        console.log("==================USER LOGIN - SENT TO API/LOGIN====================");
        console.log(user);
        return axios.post('/api/login', user);
    }
}