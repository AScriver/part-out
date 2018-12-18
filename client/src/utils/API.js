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
    getPostByMake: function(carMake, cancelToken) {
        console.log("==================GET POSTS BY MAKE FRONTEND====================");
        console.log(carMake)
        return axios.get('/api/post/' + carMake, cancelToken)
    },
    getPostByMakeModel: function(carMake, carModel, cancelToken) {
        console.log("==================GET POSTS BY MAKE MODEL FRONTEND====================");
        return axios.get('/api/post/' + carMake + '/' + carModel, cancelToken)
    },
    getPostByMakeModelYear: function(carMake, carModel, carYear, cancelToken) {
        console.log("==================GET POSTS BY MAKE MODEL YEAR FRONTEND====================");
        return axios.get('/api/post/' + carMake + '/' + carModel + '/' + carYear, cancelToken)
    },
    getPostById: function(id) {
        console.log("==================GET POST BY ID FRONTEND====================");
        return axios.get('/api/item/' + id);
    },
    getComments: function(id) {
        console.log("==================GET COMMENTS FRONTEND====================");
        return axios.get('/api/comments' + id)
    }
}