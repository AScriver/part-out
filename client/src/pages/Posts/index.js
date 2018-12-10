import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import NavbarFix from '../../components/NavbarFix';
import Sidebar from '../../components/Sidebar';
import "./index.css";

// Use url to search through database and update accordingly


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [{
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }, {
                title: "Rio Robles",
                desc: "Cafe and Casino",
                itemImg: "exampleimg",
                price: 400.99,
                carYear: 2001,
                carMake: "Ford",
                carModel: "Mustang",
                category: "engine",
                location: "Phoenix, Az"
            }]
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <NavbarFix />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="col-10">
                            {this.state.posts.map(post => (
                                <div className="row posts-container mb-2" style={{ border: '1px solid black' }}>
                                    <div className="col-3">
                                        {post.itemImg}
                                        <p>{post.location}</p>
                                    </div>
                                    <div className="col-9">
                                        <p><h3>{post.title} - {post.category}</h3></p>
                                        <p>{post.desc}</p>
                                        <div className="row">
                                            <div className="col-3">
                                                <p>${post.price}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{post.carYear}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{post.carMake}</p>
                                            </div>
                                            <div className="col-3">
                                                <p>{post.carModel}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;


                // Will need to be passed down as props.

/*Here, ShoppingList is a React component class, or React component type. 
A component takes in parameters, called props (short for “properties”), 
and returns a hierarchy of views to display via the render method. */


// const postSeed = [{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     },{
//         title: "Rio Robles",
//         desc: "Cafe and Casino",
//         itemImg: "exampleimg",
//         price: 400.99,
//         carYear: 2001,
//         carMake: "Ford",
//         carModel: "Mustang",
//         location: "Phoenix, Az"
//     }] */


























