/**
* LoginIntro.jsx
* Created by Kyle Fox 12/4/15
**/

import React from 'react';

export default class LoginIntro extends React.Component {
    render() {
        return (
            <div className="col-md-7 usa-da-text-white">
                <h1>USA Spending Data Broker</h1>
                <p>
                    Welcome to the USA Spending Data Broker--Alpha version.<br /><br />
                    Sign in to upload your agency financial data and validate it against the latest version of the DATA Act Schema.<br /><br />
                    Visit the <a href="https://community.max.gov/download/attachments/903971114/DataSubmission_page.pdf" target="_blank">Data Submission page</a> on
                    MAX for details on how to format your data.
                </p>
            </div>
        );
    }
}
