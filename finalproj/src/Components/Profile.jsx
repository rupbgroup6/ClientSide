import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iooi from '../Images/ioLogo.png';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }
  
    render() {
        return (
            <div className="cont">
            <div className="align" >

                <div className="card4" style={{ marginTop: "3%", marginBottom: "3%" }}>

                    <Row className="header3">
                        <Col xs={2}></Col>
                        <Col xs={8}><img className="title" alt="" src={iooi} style={{ paddingTop: "10px" }} /></Col>
                        <Col xs={2}></Col>
                    </Row>

                    <Row className="instructions">
                        <Col xs={12}>
                            <h6>.טבלה זו מציגה את חתך אחוזי כלל המשתמשים באפליקציה עד היום</h6>
                            <h6> דרכה תוכל לראות באיזו קטגוריה אתה נכלל ולקרוא על שאר הקטגוריות האחרות</h6>
                            <h6>כמו כן, באפשרותך לחזור לשאלון ולראות איך כל שינוי מאפיין ישפיע בצורה שונה על התוצאה<br /></h6>
                        </Col>
                    </Row>

                    <Row>  
                        <Col xs={12} className="table">

                            <Row style={{textAlign:"center"}}>
                                <Col xs={12}>
                                
                                </Col>
                                </Row>

                        <Row style={{marginTop:"10px"}}>
                            <Col xs={3} >Outside-In / Inside-Out</Col>
                            <Col xs={3}><h6>רמה נמוכה</h6></Col>
                            <Col xs={3}><h6>רמה בינונית</h6></Col>
                            <Col xs={3}><h6>רמה גבוהה</h6></Col>
                        </Row>

                        
                        <Row style={{marginTop:"20px" }}>
                            <Col xs={3}><h6>רמה נמוכה</h6></Col>
                            <Col xs={3} ><button><p>השורד</p></button></Col>
                            <Col xs={3}><button><p>המנתח</p></button></Col>
                            <Col xs={3}><button><p>המגיב</p></button></Col>
                        </Row>

                        
                        <Row style={{marginTop:"20px"}}>
                            <Col xs={3}><h6>רמה בינונית</h6></Col>
                            <Col xs={3}><button><p>המחפש</p></button></Col>
                            <Col xs={3}><button><p>המאזן</p></button></Col>
                            <Col xs={3}><button><p>המעז</p></button></Col>
                        </Row>

                        <Row style={{marginTop:"20px", marginBottom:"25px"}}>
                            <Col xs={3}><h6>רמה גבוהה</h6></Col>
                            <Col xs={3}><button><p>המהפכן</p></button></Col>
                            <Col xs={3}><button><p>המחושב</p></button></Col>
                            <Col xs={3}><button><p>האלוף</p></button></Col>
                        </Row>
                        </Col>          
                </Row>

                <Row>
                    <Col xs={1}></Col>
                    <Col xs={9}>
                    <button type="button" class="btn btn-primary" style={{float:"right", marginRight:"60px", borderRadius:"10px", width:"50%"}} >קרא עוד</button>
                    </Col>
                    <Col xs={1}></Col>
                </Row>



                </div>
            </div >
        </div >
        );
    }
}
export default withRouter(Profile);