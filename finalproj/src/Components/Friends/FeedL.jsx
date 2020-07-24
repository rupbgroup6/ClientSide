import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from "jquery";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';



class FeedL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            profile: this.props.profile,
            local: true,
            feeds: this.props.feeds
        }
        this.apiUrl = 'http://localhost:51298/api/Friends/GetFeeds/';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/GetFeeds/';
        }
    }
    componentDidMount(){
        let url = "";
        if(this.state.local){
            url = "http://localhost:51298/api/Friends/GetFeeds/" + this.state.id;
        }
        else{
            url = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/GetFeeds/" + this.state.id;
        }
        

        fetch(url, {
            method: 'Post',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
            })
          })
            .then(res => {
              return res.json()
            })
            .then(
              (friendsReqList) => {
                this.setState({
                  feeds: friendsReqList
                })
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    render() {

        let feeds = this.state.feeds.map((f, index) => {
            let feed = "";
            if(f.FriendGuess === undefined){
                feed = "עדיין לא ניחש"
            }
            else{
                feed = f.FriendGuess
            }
            if(f.Status === "Verified"){
                return (
                    <div>
                        <Row>
                            <Col style={{ textAlign: "left" }}>{f.FriendEmail}</Col>
                            <Col style={{ textAlign: "right" }}>{feed}</Col>
                        </Row>
                    </div>
                );
            }
            
        });

        return (
            <div>
                {feeds}
            </div>
        );
    }
}
export default withRouter(FeedL);

