import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from "jquery";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



class ReqL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            profile: this.props.profile,
            local: false,
            loading : false,
            req : this.props.req
        }
        this.apiUrl = 'http://localhost:51298/api/Friends/';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/';
        }
    }


    Accept = (e) => {
        let friendId = e.target.id;
        swal({
            title: "?אתה בטוח",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    let url = this.apiUrl + "acceptFriend";
                    let ints = [this.state.id, friendId]
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(ints),
                        headers: new Headers({
                            'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
                        })

                    })
                        .then(res => {
                            console.log('res=', res);
                            return res.json()
                        })
                        .then(
                            (result) => {
                                console.log("fetch POST= ", result);
                                this.setState({
                                    loading: true
                                })
                                setTimeout(() => {
                                    let url2 = "";
                                    if (this.state.local) {
                                        url2 = "http://localhost:51298/api/Friends/";
                                    }
                                    else {
                                        url2 = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/";
                                    }
                                    url2 += "GetFriendReq/" + this.state.id;
                                    fetch(url2, {
                                        method: 'GET',
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
                                                    req: friendsReqList,
                                                    loading: false
                                                })
                                                swal("!בוצע", "הבקשה אושרה", "success");
                                                this.props.renderFriends();
                                            },
                                            (error) => {
                                                console.log("err post=", error);
                                            });
                                }, 3000);

                            },
                            (error) => {
                                console.log("err post=", error);
                            });
                } else {
                    swal("הבקשה לא אושרה");
                }
            });



    }

    Decline = (e) => {
        let friendId = e.target.id;
        swal({
            title: "?אתה בטוח",
            text: "לאחר המחיקה יצטרכו להוסיף אותך שוב",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    let url = this.apiUrl + "DeleteFriendReq";
                    let ints = [this.state.id, friendId]
                    fetch(url, {
                        method: 'Delete',
                        body: JSON.stringify(ints),
                        headers: new Headers({
                            'Content-type': 'application/json; charset=UTF-8' //very important to add the 'charset=UTF-8'!!!!
                        })

                    })
                        .then(res => {
                            console.log('res=', res);
                            return res.json()
                        })
                        .then(
                            (result) => {
                                this.setState({
                                    loading: true
                                })
                                setTimeout(() => {
                                    let url2 = "";
                                    if (this.state.local) {
                                        url2 = "http://localhost:51298/api/Friends/";
                                    }
                                    else {
                                        url2 = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/";
                                    }
                                    url2 += "GetFriendReq/" + this.state.id;
                                    fetch(url2, {
                                        method: 'GET',
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
                                                    req: friendsReqList,
                                                    loading:false
                                                })
                                                swal("!בוצע", "הבקשה נדחתה", "success");
                                                this.props.renderFriends();
                                            },
                                            (error) => {
                                                console.log("err post=", error);
                                            });
                                }, 3000);
                                console.log("fetch POST= ", result);

                            },
                            (error) => {
                                console.log("err post=", error);
                            });
                } else {
                    swal("הבקשה לא נמחקה");
                }
            });
    }

    render() {

        let req = this.state.req.map((req, index) => {
            return (
                <div>
                    <Row className="friend" >
                        <Col xs={2}><Button id={req.FriendId} variant="danger" onClick={this.Decline}><i id={req.FriendId} class="fas fa-times-circle"></i></Button></Col>
                        <Col xs={2}><Button id={req.FriendId} variant="success" onClick={this.Accept}><i id={req.FriendId} class="fas fa-check-circle"></i></Button></Col>
                        <Col xs={8}><p style={{ color: "white", float: "right", marginRight: "15px" }}><b style={{ color: "white", float: "right" }}>{req.FriendEmail}</b></p></Col>
                    </Row>
                </div>
            );
        });

        return (
            <div id="reqLToFill">
                {this.state.loading?
                (
                    <div>
                    <Spinner animation="border" />
                    <p>loading...</p>
                  </div>
                )
                :
                (
                    req.length > 0 ? req : <h5>אין בקשות חדשות</h5>
                )}
                
            </div>
        );
    }
}
export default withRouter(ReqL);

