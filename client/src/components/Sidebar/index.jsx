import React from "react";
import { Input, FormBtn } from "../Form";
import "./index.css";

function Sidebar(props) {
    return (
            <div className="sidebar-container">
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
                <FormBtn
                    className="button button-block"
                    // disabled={!(props.carMake && props.carModel && props.carYear)}
                    onClick={props.handleFormSubmit}> Search </FormBtn>
            </div>
    )
}


export default Sidebar;