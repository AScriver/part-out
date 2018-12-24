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
    findUserById: function(id){
        console.log("==================GET USER BY ID FRONTEND====================");
        return axios.get('/api/user/' + id);
    },
    createPost: function (post){
        console.log("==================CREATE POST FRONTEND====================");
        return axios.post('/api/post', post);
    },
    getAllPosts: function(cancelToken) {
        console.log("==================GET ALL POSTS FRONTEND====================");
        return axios.get('/api/post', cancelToken)
    },
    getPostById: function(id) {
        console.log("==================GET POST BY ID FRONTEND====================");
        return axios.get('/api/item/' + id);
    },
    submitComment: function(data) {
        console.log("================== SUBMITTING COMMENT ====================");
        return axios.post('/api/comments', data)
    },
    deleteComment: function(id) {
        console.log("Delete: " + id)
        return axios.delete('/api/comments/' + id);
    },
    deletePost: function(id) {
        return axios.delete('/api/post/' + id);
    },
    getAllUsers: function(){
        return axios.get('/api/user/');
    },
    updateUserStatus: function(id, data){
        return axios.put('/api/user/' + id, data)
    }
}