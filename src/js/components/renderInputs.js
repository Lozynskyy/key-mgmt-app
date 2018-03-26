import React from "react";
export const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div className="vvp-input">
        <div className={"form-group"}>
            <label className="control-label" htmlFor={label}>{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type} id={label}
                aria-describedby={"help-block_" + label}/>
            {touched && (error && <span id={"help-block_" + label} className="help-block">{error}</span>)}
        </div>
    </div>
);