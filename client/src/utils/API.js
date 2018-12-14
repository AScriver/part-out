import axios from 'axios';

export default {
    // Signup a new user
    signup: function (user) {
        console.log("==================USER SIGNUP - SENT TO API/SIGNUP====================");
        console.log(user);
        return axios.post('/api/signup', user);
    },
    // Login existing user
    signin: function (user) {
        console.log("==================USER LOGIN - SENT TO API/LOGIN====================");
        console.log(user);
        return axios.post('/api/login', user);
    },
    createPost: function (post){
        console.log("==================CREATE POST====================");
        return axios.post('/api/post', post);
    },
    getAllPosts: function() {
        return axios.get('/api/post')
    }
}