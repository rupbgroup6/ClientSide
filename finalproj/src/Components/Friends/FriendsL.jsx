import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import { browserHistory } from "react-router";
import '../../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Images/ioLogo.png';
import $ from "jquery";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



class FriendL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            profile: this.props.profile,
            local: false,
            loading: false,
            friends: this.props.friends,
            friendId: ""

        }
        this.apiUrl = 'http://localhost:51298/api/Friends/';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/';//Dont forget to change
        }
    }

    DeleteFriend = (e) => {
        let friendId = e.target.id;
        swal({
            title: "?אתה בטוח",
            text: "אחרי שתמחק תצטרך להוסיף שוב",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let url = this.apiUrl + "DeleteFriend";
                    let f = {
                        UserId: this.state.id,
                        FriendId: friendId
                    }
                    fetch(url, {//registering the user to the system
                        method: 'Delete',
                        body: JSON.stringify(f),
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
                                let url = "";
                                if (this.state.local) {
                                    url = "http://localhost:51298/api/Friends/" + this.state.id;
                                }
                                else {
                                    url = "http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/" + this.state.id;
                                }
                                this.setState({
                                    loading: true
                                })
                                fetch(url, {
                                    method: 'GET',
                                    headers: new Headers({
                                        'Content-Type': 'application/json; charset=UTF-8',
                                    })
                                })
                                    .then(res => {
                                        return res.json()
                                    })
                                    .then(
                                        (friendsList) => {
                                            this.setState({
                                                friends: friendsList,
                                                loading: false
                                            });
                                            this.props.renderFriends();
                                        },
                                        (error) => {
                                            console.log("err post=", error);
                                        });
                            },
                            (error) => {
                                console.log("err post=", error);
                            });
                    swal("!בוצע", "החבר נמחק בהצלחה", "success");
                } else {
                    swal("החבר לא נמחק");
                }
            });
    }

    ShowFeedbackP = (e) => {
        let friendId = e.target.id;
        this.setState({
            friendId: friendId
        })
        $("#profileGuess").show(200)
    }

    cancelFeed = () => {
        $("#profileGuess").hide(200);
    }

    ApplyFeedback = () => {
        let friendId = this.state.friendId;
        let guess = $("#guess").val();
        if (guess === "") {
            swal("אנא בחר אופציה");
        }
        else {
            let url = this.apiUrl;
            let f = {
                UserId: this.state.id,
                FriendId: friendId,
                FriendsGuess: guess
            }
            swal({
                    title: "?אתה בטוח",
                    text: "לאחר מתן הפידבק לא תוכל לשנות",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            $("#profileGuess").hide(200);
                            this.setState({
                                loading: true
                            })
                            fetch(url, {
                                method: 'PUT',
                                body: JSON.stringify(f),
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
                                            loading: false
                                        });
                                        swal("!בוצע", "הפידבק התקבל בהצלחה, לחץ על רענן כדי לאתחל שינויים", "success");
                                    },
                                    (error) => {
                                        console.log("err post=", error);
                                    });
            
                        } else {
                            swal("הפידבק לא התקבל");
                        }
                    });
        }
    }
    
    componentDidMount() {
        $("#profileGuess").hide();
    }

    render() {

        let friends = this.state.friends.map((friend, index) => {
            if (friend.Status === "Verified") {
                return (
                    <div>
                        {friend.FriendsGuess != undefined ?
                            (
                                <div>
                                    <Row className="friend" >
                                        <Col style={{ paddingLeft: "0", paddingRight: "0" }} xs={1}><Button id={friend.FriendId} variant="danger" className="friendsDelBTN" onClick={this.DeleteFriend}><i id={friend.FriendId} class="fas fa-trash"></i></Button></Col>
                                        <Col style={{ paddingLeft: "0", paddingRight: "0" }} ></Col>
                                        <Col style={{ paddingLeft: "0", paddingRight: "0" }}><p style={{ color: "white", float: "right", marginRight: "15px" }}><b style={{ color: "white", float: "right" }}>{friend.FriendEmail}</b></p></Col>
                                    </Row>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <Row>
                                        <Col xs={1} style={{ paddingLeft: "0", paddingRight: "0" }}><Button id={friend.FriendId} variant="danger" className="friendsDelBTN" onClick={this.DeleteFriend}><i id={friend.FriendId} class="fas fa-trash"></i></Button></Col>
                                        <Col style={{ paddingLeft: "0", paddingRight: "0" }}><Button id={friend.FriendId} onClick={this.ShowFeedbackP}>Feedback</Button></Col>
                                        <Col style={{ paddingLeft: "0", paddingRight: "0" }}><p style={{ color: "white", float: "right", marginRight: "15px" }}><b style={{ color: "white", float: "right" }}>{friend.FriendEmail}</b></p></Col>
                                    </Row>
                                </div>
                            )}
                    </div >
                );
            }

        });

        return (
            <div id="fLToFill">
                {this.state.loading ?
                    (
                        <div>
                            <Spinner animation="border" />
                            <p>loading...</p>
                        </div>
                    )
                    :
                    (
                        friends
                    )}
                <br />
                <br />
                <form>
                    <Row id="profileGuess">
                        <Col xs={12}>
                            <select id="guess" required>
                                <option class="guessOption" value="">בחר מהרשימה</option>
                                <option class="guessOption" value="השורד">השורד</option>
                                <option class="guessOption" value="המאמין">המאמין</option>
                                <option class="guessOption" value="המהפכן">המהפכן</option>
                                <option class="guessOption" value="המנתח">המנתח</option>
                                <option class="guessOption" value="המאזן">המאזן</option>
                                <option class="guessOption" value="המחושב">המחושב</option>
                                <option class="guessOption" value="המתאים">המתאים</option>
                                <option class="guessOption" value="המעז">המעז</option>
                                <option class="guessOption" value="האלוף">האלוף</option>
                            </select>
                        </Col>
                        <br />
                        <br />
                        <Col xs={6}><Button variant="danger" onClick={this.cancelFeed}>ביטול</Button></Col>
                        <Col xs={6}><Button variant="success" onClick={this.ApplyFeedback}>אישור</Button></Col>
                    </Row>
                </form>

            </div>
        );
    }
}
export default withRouter(FriendL);

