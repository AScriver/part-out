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
        console.log("==================CREATE POST FRONTEND====================");
        return axios.post('/api/post', post);
    },
    getAllPosts: function() {
        console.log("==================GET ALL POSTS FRONTEND====================");
        return axios.get('/api/post')
    },
    getPostByMake: function(carMake) {
        console.log("==================GET POSTS BY MAKE FRONTEND====================");
        console.log(carMake)
        return axios.get('/api/post/' + carMake)
    },
    getPostByMakeModel: function(carMake, carModel) {
        console.log("==================GET POSTS BY MAKE MODEL FRONTEND====================");
        return axios.get('/api/post/' + carMake + '/' + carModel)
    },
    getPostByMakeModelYear: function(carMake, carModel, carYear) {
        console.log("==================GET POSTS BY MAKE MODEL YEAR FRONTEND====================");
        return axios.get('/api/post/' + carMake + '/' + carModel + '/' + carYear)
    },
    getPostById: function(id) {
        console.log("==================GET POST BY ID FRONTEND====================");
        return axios.get('/api/item/' + id);
    }
}