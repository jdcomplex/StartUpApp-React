import React, { Component } from 'react'
import ScriptTag from 'react-script-tag';

export default class ExternalJs extends Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "/js/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);

        const script1 = document.createElement("script");
        script1.src = "/js/bootstrap.bundle.min.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "/js/adminlte.min.js";
        script2.async = true;
        document.body.appendChild(script2);
    }
    render() {
        return(
       <div>

       </div>)
    }
}
