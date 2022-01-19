import React from 'react'

const FooterComponent = (props) => {
    const {company , email} = props;
    return(
        <div className="containerr-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger">Company {company} </span> | <span className="text-muted"> Email {email} </span>
                </small>
            </div>
        </div>
    )
}

export default FooterComponent