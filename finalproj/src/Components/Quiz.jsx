import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import $ from "jquery";
import swal from 'sweetalert';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            local: true,
            questions: ["what up?", "how you doing?"]
        }

        this.apiUrl = 'tbd';//Dont forget to change
        if (!this.state.local) {
          this.apiUrl = 'tbd';//Dont forget to change
        }
    }

  
    render() {
        return (
           <div>
                Test
           </div>
        );
    }
}
export default withRouter(Quiz);