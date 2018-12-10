import axios from 'axios';

export default {
    // Gets all posts
    getPosts: function () {
        return axios.get("/api/posts");
    },
    // Gets post with a given id
    getPost: function (id) {
        return axios.get('/api/posts/' + id);
    },
    getPostByMake: function (make) {
        return axios.get('/api/posts/' + make);
    },
    getPostByMakeModel: function (make, model) {
        return axios.get('/api/posts/' + make + '/' + model);
    },
    getPostByMakeModelYear: function (make, model, year) {
        if (!model && !year) {
            return axios.get('/api/posts/' + make);
        } else if (!year) {
            return axios.get('/api/posts/' + make + '/' + model);
        } else {
            return axios.get('/api/posts/' + make + '/' + model + '/' + year);
        }
    },
    // Deletes users own post, given its ID
    deletePost: function (id) {
        return axios.delete('/api/posts/' + id);
    },
    // Signup a new user
    signUp: function (user) {
        return axios.post('/api/signup', user);
    },
    // Login existing user
    login: function (user) {
        console.log(user);
        return axios.post('/api/login', user);
    }
}