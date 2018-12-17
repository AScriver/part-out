import React from "react";
import { Input, FormBtn } from "../Form";
import "./index.css";

function Sidebar(props) {
    return (
            <div className="sidebar-container">
                <p>Search Posts: {props.carMake}</p>
                <div className="field-wrap">
                    <Input
                        value={props.carMake}
                        onChange={props.handleInputChange}
                        name="carMake"
                        type="text"
                        placeholder={props.carMake ? props.carMake : "Manufacturer"}
                    />
                </div>
                <div className="field-wrap">
                    <Input
                        value={props.carModel}
                        onChange={props.handleInputChange}
                        disabled={!props.carMake}
                        name="carModel"
                        type="text"
                        placeholder={props.carModel ? props.carModel : "Model"}
                    />
                </div>
                <div className="field-wrap">
                    <Input
                        disabled={!props.carModel}
                        value={props.carYear}
                        onChange={props.handleInputChange}
                        name="carYear"
                        type="text"
                        placeholder={props.carYear ? props.carYear : "year"}
                    />
                </div>
                {/* <FormBtn
                    onClick={props.handleFormSubmit}
                    disabled
                    > Search 
                </FormBtn> */}
            </div>
    )
}


export default Sidebar;