import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../../CSS/FriendList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../Images/ioLogo.png';
import friendList from '../../Images/FriendList.png';
import $ from "jquery";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Fl from './FriendsL.jsx';
import ReqL from './ReqList.jsx';
import FeedL from './FeedL.jsx';
import Spinner from 'react-bootstrap/Spinner';


class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            profile: this.props.match.params.profile,
            local: false,
            friends: this.props.friends,
            feeds: [],
            req: this.props.req,
            loading: false
        }


        this.apiUrl = 'http://localhost:51298/api/Friends/';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/Friends/';//Dont forget to change
        }

    }

    goHome = () => {
        this.props.history.replace("/home/" + this.state.id + "/" + this.state.profile, "urlhistory");
    }

    AddToFriends = () => {
        swal("הכנס את מספר הID שברצונך להוסיף", {
            content: "input",
        })
            .then((value) => {
                let friendId = parseInt(value);
                let f = {
                    UserId: this.state.id,
                    FriendId: friendId
                }
                let url = "";
                if (this.state.local) {
                    url = "http://localhost:51298/api/users"
                }
                else {
                    url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users"
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
                        (result) => {
                            let exists = false;
                            for (var i = 0; i < result.length; i++) {
                                if (friendId === result[i].UserId) {
                                    exists = true;
                                    break;
                                }
                            }


                            if (exists) {
                                let noInFriends = true;
                                for (var i = 0; i < this.state.friends.length; i++) {
                                    let cId = parseInt(this.state.friends[i].FriendId);
                                    if (friendId === cId) {
                                        noInFriends = false;
                                        break;
                                    }
                                }
                                if (noInFriends) {
                                    url = this.apiUrl;
                                    fetch(url, {
                                        method: 'Post',
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
                                                swal("!בוצע", "הבקשה נשלחה", "success");
                                            },
                                            (error) => {
                                                console.log("err post=", error);
                                            });
                                }
                                else {
                                    swal("!שגיאה", "המתמש נמצא בחברים או נשלחה לו הזמנה, נא להזין מספר אחר");
                                    this.setState({
                                        loading: false
                                    });
                                }

                            }
                            else {
                                swal("!שגיאה", "המשתמש לא קיים, נא להזין מספר תקין");
                                this.setState({
                                    loading: false
                                });
                            }


                        },
                        (error) => {
                            console.log("err post=", error);
                        });
            });
    }

    changeModeToFriend = () => {// changing the mode 
        $("#request").removeClass("selected");
        $("#feedback").removeClass("selected");
        $("#friend").addClass("selected");
        $("#fri").show(400);
        $("#req").hide(400);
        $("#feed").hide(400);

    }

    changeModeToFeed = () => {
        $("#request").removeClass("selected");
        $("#friend").removeClass("selected");
        $("#feedback").addClass("selected");
        $("#feed").show(400);
        $("#fri").hide(400);
        $("#req").hide(400);


    }

    changeModeToReq = () => {
        $("#feedback").removeClass("selected");
        $("#friend").removeClass("selected");
        $("#request").addClass("selected");
        $("#req").show(400);
        $("#fri").hide(400);
        $("#feed").hide(200);


    }

    refresh = () => {
        this.props.renderFriends();
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.forceUpdate();
            this.setState({
                friends: this.props.friends,
                req: this.props.req,
                loading: false
            })
        }, 1000)
    }

    

    render() {
        return (
            <div className="align9">
                <Row>
                    <Col>
                        <Button variant="secondary" onClick={this.refresh}><i class="fas fa-sync"></i></Button>
                    </Col>
                    <Col>
                        <Link to={"/home/" + this.state.id + "/" + this.state.profile + "/" + true}><Button style={{ float: "right" }} variant="secondary" onClick={this.goHome}><i className="fas fa-home"></i></Button></Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <img className="logo9" src={logo} />
                    </Col>
                    <Col xs={1}></Col>
                </Row>

                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}><button><img className="friendLogo" src={friendList} style={{ paddingTop: "15px" }} /></button></Col>
                    <Col xs={2}></Col>
                </Row>

                <Row>
                    <Col>
                        <h6 style={{ direction: "rtl"}}>מספר ה ID שלך הוא: {this.state.id}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{ direction: "rtl"}}>החליפו את מספר ה-ID עם חבריכם, נחשו איזה סוג מנהל הם וגלו מה הם חושבים עליכם </h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="input" >
                        <Button style={{ margin: "auto", backgroundColor:"#33adff" }} variant="primary" onClick={this.AddToFriends}>הוסף חבר</Button>
                    </Col>
                </Row>

                <div className="card9" style={{ paddingTop: "0", backgroundColor: "#0A0A0A" }}>
                    <div className="head">
                        <div></div>
                        <a id="friend" onClick={this.changeModeToFriend}>Friends</a>
                        <a id="request" onClick={this.changeModeToReq}>Requests</a>
                        <a id="feedback" style={{paddingLeft:"5px"}} onClick={this.changeModeToFeed}>Feedback</a>
                        <div></div>
                    </div>

                    <div className="tabs">
                        <div className="FriendsForm" id="fri" style={{ paddingTop: "15px" }}>
                            {this.state.loading ?
                                (
                                    <div>
                                        <Spinner animation="border" />
                                        <p>loading...</p>
                                    </div>
                                )
                                :
                                (
                                    <Fl id={this.state.id} profile={this.state.profile} friends={this.state.friends} renderFriends={this.props.renderFriends} />
                                )}

                        </div>

                        <div className="FriendsForm" id="req" style={{ paddingTop: "15px" }}>
                            {this.state.loading ?
                                (
                                    <div>
                                        <Spinner animation="border" />
                                        <p>loading...</p>
                                    </div>
                                )
                                :
                                (
                                    <ReqL id={this.state.id} profile={this.state.profile} req={this.state.req} renderFriends={this.props.renderFriends} />
                                )}

                        </div>
                        <div className="FriendsForm" id="feed" style={{ paddingTop: "15px" }}>
                            <Row className="friend" >
                                <Col><h4 style={{ textAlign: "left" }}>User</h4></Col>
                                <Col><h4 style={{ textAlign: "right" }}>Feedback</h4></Col>
                            </Row>
                            {this.state.loading ?
                                (
                                    <div>
                                        <Spinner animation="border" />
                                        <p>loading...</p>
                                    </div>
                                )
                                :
                                (
                                    <FeedL id={this.state.id} profile={this.state.profile} feeds={this.state.feeds} />
                                )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(FriendList);

