import React from "react";
import { Input } from "../Form";

function Sidebar(props) {
    return (
        <div className="col-2">
            <div className="form">
                <p>Search Posts: </p>
                <div className="field-wrap">
                    <Input
                        value={props.carMake}
                        onChange={props.handleInputChange}
                        name="carMake"
                        type="text"
                        placeholder="Manufacturer"
                    />
                </div>
                <div className="field-wrap">
                    <Input
                        value={props.carModel}
                        onChange={props.handleInputChange}
                        name="carModel"
                        type="text"
                        placeholder="Model"
                    />
                </div>
                <div className="field-wrap">
                    <Input
                        value={props.carYear}
                        onChange={props.handleInputChange}
                        name="carYear"
                        type="text"
                        placeholder="Year"
                    />
                </div>
            </div>
        </div>
    )
}


export default Sidebar;