import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Findings.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iooi from '../Images/ioLogo.png';
import headerImg from '../Images/findingImg.png';
import Implications from '../Images/Implications.png';
import Button from 'react-bootstrap/Button';

class Findings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.match.params.profile,
            id: this.props.match.params.id,
        }



    }
    goHome = () => {
        this.props.history.replace("/home/" + this.state.id+"/"+this.state.profile, "urlhistory");
    }

    render() {
        return (

            <div className="align" >
                <Row>
                    <Col>
                        <Link to={"/home/" + this.state.id + "/" + this.state.profile}><Button style={{ float: "right" }} variant="secondary" onClick={this.goHome}><i className="fas fa-home"></i></Button></Link>
                    </Col>
                </Row>
                <Row className="header8">
                    <Col xs={2}></Col>
                    <Col xs={8}><img className="title8" alt="" src={iooi} style={{ paddingTop: "10px" }} /></Col>
                    <Col xs={2}></Col>
                </Row>

                <div className="card8" style={{ marginTop: "3%", marginBottom: "3%" }}>



                    <Row className="headerImg">
                        <Col xs={12} >
                            <img alt="" src={headerImg} style={{ width: "100%", height: '200px', marginTop: "15px" }} />
                        </Col>
                    </Row>

                    <Row className="text" style={{ marginTop: "10px" }}>
                        <Col xs={12}>
                            <p><b className="rtl">
                                הממצאים מדגימים שגישת OI גורמת לחברות לפתח יכולות שיווק חזקות במיוחד בעוד שגישת IO תורמת משמעותית לפיתוח יכולות טכנולוגיות חזקות. אולם ההפתעה הגדולה הייתה שלמרות שגם יכולות השיווק וגם היכולות הטכנולוגיות חשובות להצלחה בינלאומית הרי שנמצא הבדל גדול ומשמעותי בין העוצמה של 2 היכולות. למעשה, ליכולות השיווק הייתה עוצמה כפולה מאשר ליכולות הטכנולוגיות בניבוי ההצלחה של החברות. מעבר לכך, נמצא במחקר שהעוצמה של יכולות השיווק הייתה למעשה אפילו חזקה יותר מכיוון שהסתבר שחברות בעלות יכולת שיווקית בינלאומית חזקה נטו יותר לערוך התאמות של המוצרים שלהם לשווקים הבינלאומיים ובכך חיזקו עוד יותר את הקשר להצלחה בינלאומית. להלן תובנות שכדאי לשקול:
                                1.     לצורך פיתוח פעילות בשווקים בינלאומיים מומלץ להדגיש גישה אסטרטגית מסוג OI
                                2.     גם לסטארט-אפים ישראליים מומלץ לחשוב על שיווק החל מהיום הראשון לצד החשיבה והפיתוח הטכנולוגי ולא להיכנס למלכודת בה מפתחים מוצר או טכנולוגיה ואז שואלים איפה אפשר למכור את זה
                                3.     אחת הטעויות של חברות סטארט-אפ ישראליות היא האמירה בסגנון גישת ה IO שלנו אין בכלל מתחרים. לרוב בדיקה מעמיקה תגלה שגם אם לא קיימים מתחרים ישירים הרי שיש סבירות גבוהה שקיימים מתחרים עקיפים שעונים על אותו הצורך אליו מכוונת החברה
                                4.     התאמת המוצר לשווקים בינלאומיים היא מרכיב חשוב מאוד שמשפר את סיכויי ההצלחה הבינלאומית
                                5.     חשוב להדגיש שבהחלט ניתן לשלב בין 2 הגישות האסטרטגיות אבל נקודת המוצא הנכונה יותר לפיתוח פעילות בינלאומית מצליחה היא גישת ה OI ולכן מומלץ להתחיל איתה ובמקביל לפתח כמובן יתרון טכנולוגי מבדל
                                </b></p>
                        </Col>

                    </Row>

                    <Row className="headerImg">
                        <Col xs={12} >
                            <img alt="" src={Implications} style={{ width: "100%", height: '200px', marginTop: "15px" }} />
                        </Col>
                    </Row>


                    <Row className="text">
                        <Col xs={12}>
                            <h5 style={{ textAlign: "center", marginTop: "15px", color: "gray", float: "right" }}>תוביל Outside-in גישה אסטרטגית מסוג</h5>
                            <p><b className="rtl"> היכרות טובה יותר עם השוק</b><br />
                                <b className="rtl"> היכרות עם מתחרים</b><br />
                                <b className="rtl"> חדשנות אינקרמנטלית</b><br />
                                <b className="rtl"> מוצרים מותאמים לשווקים בינלאומיים</b><br />
                                <b className="rtl"> אי וודאות נמוכה יותר: אי וודאות בעיקר לגבי השוק הבינלאומי</b><br />
                                <b className="rtl"> סיכון נמוך יותר</b><br />
                            </p>

                            <h5 style={{ textAlign: "center", color: "gray", float: "right", paddingTop: "10px" }}>תוביל Inside-out גישה אסטרטגית מסוג</h5>
                            <p><b className="rtl"> היכרות חלקית עם השוק</b><br />
                                <b className="rtl"> יחסים לא מפותחים עם לקוחות</b><br />
                                <b className="rtl"> אי היכרות עם מתחרים פוטנציאליים</b><br />
                                <b className="rtl"> חדשנות פורצת דרך</b><br />
                                <b className="rtl"> מוצרים אחידים בכל השווקים הבינלאומיים</b><br />
                                <b className="rtl"> אי וודאות גבוהה יותר: אי וודאות גם לגבי הטכנולוגיה החדשנית וגם לגבי השוק הבינלאומי</b><br />
                                <b className="rtl"> סיכון גבוה יותר</b><br />
                            </p>

                        </Col>

                    </Row>



                </div>
            </div >

        );
    }
}
export default withRouter(Findings);