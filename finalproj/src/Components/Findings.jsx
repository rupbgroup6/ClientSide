import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Findings.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iooi from '../Images/logo.png';
import headerImg from '../Images/findingImg.png';
import Implications from '../Images/Implications.png';

class Findings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }



    }

    render() {
        return (
            <div className="cont4">
                <div className="align" >

                    <div className="card4" style={{ marginTop: "3%", marginBottom: "3%" }}>

                        <Row className="header4">
                            <Col xs={2}></Col>
                            <Col xs={8}><img className="title" alt="" src={iooi} style={{ paddingTop: "10px" }} /></Col>
                            <Col xs={2}></Col>
                        </Row>

                        <Row className="headerImg">
                            <Col xs={12} >
                                <img alt="" src={headerImg} style={{ width: "100%", height: '200px', marginTop: "15px" }} />
                            </Col>
                        </Row>

                        <Row className="text" style={{ marginTop: "10px" }}>
                            <Col xs={12}>
                                <p><b> הממצאים מדגימים שגישת OI גורמת לחברות לפתח יכולות שיווק חזקות במיוחד בעוד שגישת IO תורמת משמעותית לפיתוח יכולות טכנולוגיות חזקות.
                                אולם ההפתעה הגדולה הייתה שלמרות שגם יכולות השיווק וגם היכולות הטכנולוגיות חשובות להצלחה בינלאומית הרי שנמצא הבדל גדול ומשמעותי בין העוצמה של 2 היכולות. למעשה, ליכולות השיווק הייתה עוצמה כפולה מאשר ליכולות הטכנולוגיות בניבוי ההצלחה של החברות. מעבר לכך, נמצא במחקר שהעוצמה של יכולות השיווק הייתה למעשה אפילו חזקה יותר מכיוון שהסתבר שחברות בעלות יכולת שיווקית בינלאומית חזקה נטו יותר לערוך התאמות של המוצרים שלהם לשווקים הבינלאומיים ובכך חיזקו עוד יותר את הקשר להצלחה בינלאומית

                                להלן תובנות שכדאי לשקול:
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
                                <h5 style={{ textAlign: "center", marginTop: "15px" }}>תוביל Outside-in גישה אסטרטגית מסוג</h5>
                                <p><b>היכרות טובה יותר עם השוק</b><br />
                                    <b>יחסים מפותחים יותר עם לקוחות</b><br />
                                    <b>היכרות עם מתחרים</b><br />
                                    <b>חדשנות אינקרמנטלית</b><br />
                                    <b>מוצרים מותאמים לשווקים בינלאומיים</b><br />
                                    <b>אי וודאות נמוכה יותר: אי וודאות בעיקר לגבי השוק הבינלאומי</b><br />
                                    <b>סיכון נמוך יותר</b><br />
                                </p>

                                <h5 style={{ textAlign: "center" }}>תוביל Inside-out גישה אסטרטגית מסוג</h5>
                                <p><b>היכרות חלקית עם השוק</b><br />
                                    <b>יחסים לא מפותחים עם לקוחות</b><br />
                                    <b>אי היכרות עם מתחרים פוטנציאליים</b><br />
                                    <b>חדשנות פורצת דרך</b><br />
                                    <b>מוצרים אחידים בכל השווקים הבינלאומיים</b><br />
                                    <b>אי וודאות גבוהה יותר: אי וודאות גם לגבי הטכנולוגיה החדשנית וגם לגבי השוק הבינלאומי</b><br />
                                    <b>סיכון גבוה יותר</b><br />
                                </p>

                            </Col>

                        </Row>



                    </div>
                </div >
            </div >
        );
    }
}
export default withRouter(Findings);