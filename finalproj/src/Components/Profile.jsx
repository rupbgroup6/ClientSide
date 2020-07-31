import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import $ from "jquery";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.match.params.profile,
            id: this.props.match.params.id,
            realProfile: "",
            secondTime: this.props.match.params.secondTime,
            fromHome: this.props.match.params.fromHome
        }



    }

    goHome = () => {
        this.props.history.replace("/home/" + this.state.id + "/" + this.state.profile + "/" + true, "urlhistory");
    }

    Survivor = () => {
        swal("מנהלים ללא תפיסה דומיננטית מסוג אאוטסייד-אין או אינסייד-אאוט. מנהלים אלו יטו להימנע מסיכון והם אינם אגרסיביים. הם אינם נוטים להיצמד לשוק או מוצר ספציפי ויעדיפו להגיב רק עם קיומם של לחצים מהסביבה");
    }
    Fit = () => {
        swal("מנהלים בעלי תפיסת אאוטסייד-אין דומיננטית במיוחד. מנהלים אלו מתמקדים בחדשנות אינקרמנטלית ושמים לעצמם מטרה להגיב מהר וביעילות לשינויים בסביבת העסקים תוך התמקדות בפיתוח יכולות שיווקיות והתאמת המוצרים לשווקים בינלאומיים");
    }
    Analyst = () => {
        swal("מנהלים בעלי תפיסת אינסייד-אאוט נמוכה ותפיסת אאוטסייד-אין בינונית. מנהלים אלו פתוחים פחות לשינויים ומעדיפים לא לקחת סיכונים. הם יעדיפו לקבל החלטות ולהגיב על בסיס איסוף וניתוח מידע");
    }
    Balanced = () => {
        swal("מנהלים אלו נמצאים בסוג של איזון. הם לא מצטיינים במיוחד בגישת ה אאוטסייד-אין ולא בגישת ה אינסייד-אאוט אך מצד שני הם מיישמים את 2 הגישות ברמה בינונית - באופן סימולטני. גם מקשיבים, מנתחים וגם מעודדים יצירתיות ושינויים");
    }
    Daredevil = () => {
        swal("מנהלים בעלי תפיסת אאוטסייד-אין גבוהה ותפיסת אינסייד-אאוט בינונית. מנהלים אלו מקפידים על קבלת החלטות על בסיס מידע מלקוחות וניתוח מתחרים במטרה להגיב להזדמנויות ואיומים. לצד זאת הם מחזיקים ברמה בינונית של פתיחות לשינויים ולקיחת סיכונים ");
    }
    Believer = () => {
        swal("מנהלים בעלי תפיסת אינסייד-אאוט בינונית ותפיסת אאוטסייד-אין נמוכה. מנהלים אלו מאמינים יותר בפתיחות לחדשנות, יצירתיות וחשיבה עתידית על פני הקשבה לכוחות השוק, למתחרים ולצרכי הלקוחות כיום");
    }
    Revol = () => {
        swal("מנהלים בעלי תפיסת אינסייד-אאוט דומיננטית במיוחד. מנהלים אלו שואפים לשנות את העולם על ידי יצירת חדשנות פורצת דרך. הם מעדיפים לשנות את כללי המשחק ומתמקדים לרוב בפיתוח יכולות טכנולוגיות ורצון להפוך את המוצר שלהם לגולד סטנדרט בשוק");
    }
    Champ = () => {
        swal("מנהלים שמשלבים סימולטנית את הרמה הגבוהה ביותר של גישת אאוטסייד-אין לצד רמה גבוהה מאוד של אינסייד-אאוט. מנהלים אלו נוטים להיות יזמים, חדשניים במקביל להיותם קשובים מאוד לשינויים בהעדפות הלקוחות ושינויים טכנולוגיים");
    }
    Calc = () => {
        swal("מנהלים בעלי תפיסת אאוטסייד -אין בינונית ותפיסת אינסייד-אאוט גבוהה. מנהלים אלו מעודדים שינוי באופן אקטיבי אבל מבקשים לוודא באמצעות מידע ונתונים מהשטח שהשאיפות שלהם רציונליות");
    }

    componentDidMount() {
        let url = "http://proj.ruppin.ac.il/bgroup6/prod/api/users";
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
                    let survivor = 0;
                    let fit = 0;
                    let analyst = 0;
                    let balanced = 0;
                    let daredevil = 0;
                    let believer = 0;
                    let revol = 0;
                    let champ = 0;
                    let calc = 0;
                    let counter = 0;

                    let survivorAvg = 0;
                    let fitAvg = 0;
                    let analystAvg = 0;
                    let balancedAvg = 0;
                    let daredevilAvg = 0;
                    let believerAvg = 0;
                    let revolAvg = 0;
                    let champAvg = 0;
                    let calcAvg = 0;

                    for (var i = 0; i < result.length; i++) {
                        if (result[i].UserId === parseInt(this.state.id)) {
                            this.setState({
                                realProfile: result[i].Profile
                            })
                        }
                        let profile = result[i].Profile;
                        if (profile === "השורד") {
                            survivor++;
                        }
                        else if (profile === "המאמין") {
                            believer++;
                        }
                        else if (profile === "המהפכן") {
                            revol++;
                        }
                        else if (profile === "המנתח") {
                            analyst++;
                        }
                        else if (profile === "המאזן") {
                            balanced++;
                        }
                        else if (profile === "המחושב") {
                            calc++;
                        }
                        else if (profile === "המתאים") {
                            fit++;
                        }
                        else if (profile === "המעז") {
                            daredevil++;
                        }
                        else if (profile === "האלוף") {
                            champ++;
                        }
                        counter++;
                    }//end of for
                    {/*background-position: center;
		            background-size: cover;
                    height:100%;*/}
                    survivorAvg = (survivor / counter) * 100 + "%";
                    fitAvg = (fit / counter) * 100 + "%";
                    analystAvg = (analyst / counter) * 100 + "%";
                    balancedAvg = (balanced / counter) * 100 + "%";
                    daredevilAvg = (daredevil / counter) * 100 + "%";
                    believerAvg = (believer / counter) * 100 + "%";
                    revolAvg = (revol / counter) * 100 + "%";
                    calcAvg = (calc / counter) * 100 + "%";
                    champAvg = (champ / counter) * 100 + "%";
                    $('#survivor').css({ 'height': survivorAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(50,150,50,0.7))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#fit').css({ 'height': fitAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(120,0,50,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#analyst').css({ 'height': analystAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(300,200,200,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#balanced').css({ 'height': balancedAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(50,50,0,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#daredevil').css({ 'height': daredevilAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(300,300,0,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#believer').css({ 'height': believerAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(300,0,50,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#revol').css({ 'height': revolAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(300,100,0,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#champ').css({ 'height': champAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(0,100,100,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })
                    $('#calc').css({ 'height': calcAvg, 'background': 'linear-gradient(to left, rgba(255,0,0,0), rgba(0,300,50,1))', 'width': '100%', 'position': 'absolute', 'bottom': '0' })

                },
                (error) => {
                    console.log("err post=", error);
                });
        //$('#survivor').css({'height': '60%','background':'green'})
    }

    render() {
        return (
            <div className="cont">
                <div className="align" >

                    <div className="card4">

                        <Row className="header3">
                            <Col xs={2}></Col>
                            <Col xs={8}><img className="title" alt="" src={process.env.PUBLIC_URL + "/Images/ioLogo.png"} style={{ paddingTop: "10px" }} /></Col>
                            <Col xs={2}><Button variant="secondary" onClick={this.goHome}><i className="fas fa-home"></i></Button></Col>
                        </Row>

                        <Row className="instructions">
                            <Col xs={12}>
                                <h6>.טבלה זו מציגה את חתך אחוזי כלל המשתמשים באפליקציה עד היום</h6>
                                <h6> דרכה תוכל לראות באיזו קטגוריה אתה נכלל ולקרוא על שאר הקטגוריות האחרות</h6>
                                <h6>כמו כן, באפשרותך לחזור לשאלון ולראות איך כל שינוי מאפיין ישפיע בצורה שונה על התוצאה<br /></h6>
                                {this.state.fromHome === "true" ?
                                    (<h6 id="boldProf">סוג הפרופיל שלך הוא "{this.state.profile}"<br /></h6>)
                                    : (this.state.secondTime === "true" ?
                                        (<div><h6 id="boldProf">"סוג הפרופיל שיצא לאחר מילוי השאלון בפעם השניה הוא: "{this.state.profile}",</h6><h6 id="boldProf"> והפרופיל האמיתי שלך הוא "{this.state.realProfile}"</h6></div>)
                                        :
                                        (<h6 id="boldProf">סוג הפרופיל שלך הוא "{this.state.profile}"<br /></h6>))}


                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} className="table">

                                <Row style={{ textAlign: "center" }}>
                                    <Col xs={12}>

                                    </Col>
                                </Row>

                                <Row style={{ marginTop: "10px" }}>
                                    <Col xs={3} >Outside-In / Inside-Out</Col>
                                    <Col xs={3}><h6>רמה נמוכה</h6></Col>
                                    <Col xs={3}><h6>רמה בינונית</h6></Col>
                                    <Col xs={3}><h6>רמה גבוהה</h6></Col>
                                </Row>


                                <Row style={{ marginTop: "20px" }}>
                                    <Col xs={3}><h6>רמה נמוכה</h6></Col>
                                    <Col xs={3} ><button className="profileBtn" onClick={this.Survivor}><p className="profileTag">השורד</p><div id="survivor"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Analyst}><p className="profileTag">המנתח</p><div id="analyst"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Fit}><p className="profileTag">המתאים</p ><div id="fit"></div></button></Col>
                                </Row>


                                <Row style={{ marginTop: "20px" }}>
                                    <Col xs={3}><h6>רמה בינונית</h6></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Believer}><p className="profileTag">המאמין</p><div id="believer"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Balanced}><p className="profileTag">המאזן</p><div id="balanced"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Daredevil}><p className="profileTag">המעז</p><div id="daredevil"></div></button></Col>
                                </Row>

                                <Row style={{ marginTop: "20px", marginBottom: "25px" }}>
                                    <Col xs={3}><h6>רמה גבוהה</h6></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Revol}><p className="profileTag">המהפכן</p><div id="revol"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Calc}><p className="profileTag">המחושב</p><div id="calc"></div></button></Col>
                                    <Col xs={3}><button className="profileBtn" onClick={this.Champ}><p className="profileTag">האלוף</p><div id="champ"></div></button></Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div >
            </div >
        );
    }
}
export default withRouter(Profile);