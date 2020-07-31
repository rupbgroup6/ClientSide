import React, { Component } from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import '../CSS/Findings.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Findings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: this.props.match.params.profile,
            id: this.props.match.params.id,
        }
    }

    render() {
        return (

            <div className="align" >
                

                <div className="card8">
                <Row>
                    <Col>
                        <Link to={"/home/" + this.state.id + "/" + this.state.profile + "/" + true}><Button style={{ float: "right" }} variant="secondary" onClick={this.goHome}><i className="fas fa-home"></i></Button></Link>
                    </Col>
                </Row>
                <Row className="header8">
                    <Col xs={2}></Col>
                    <Col xs={8}><img className="title8" alt="" src={process.env.PUBLIC_URL + "/Images/ioLogo.png"} style={{ paddingTop: "5px" }} /></Col>
                    <Col xs={2}></Col>
                </Row>
                    <Row className="headerImg">
                        <Col xs={12} >
                            <img alt="" src={process.env.PUBLIC_URL + "/Images/findingImg.png"} style={{ width: "100%", height: '200px', marginTop: "15px" }} />
                        </Col>
                    </Row>

                    <Row className="text" style={{ marginTop: "10px" }}>
                        <Col xs={12}>
                            <p><b className="rtl">
                                .גורמת לחברות לפתח OI הממצאים מדגימים שגישת
                            <br/>
                           .בעוד שהגישה השניה תורמת משמעותית לפיתוח יכולות טכנולוגיות חזקות
                           
                           <br/>
                       אולם ההפתעה הגדולה הייתה שלמרות שגם יכולות השיווק
                       וגם יכולות הטכנולוגיות חשובות להצלחה בינלאומית
                       <br/>
                      .הרי שנמצא הבדל גדול ומשמעותי בין העוצמה של 2 היכולות
                       <br/>
   למעשה, ליכולות השיווק הייתה עוצמה כפולה מאשר
   <br/>
   .ליכולות הטכנולוגיות בניבוי ההצלחה של החברות 
  מעבר לכך
    נמצא במחקר שהעוצמה של יכולות השיווק הייתה למעשה אפילו חזקה יותר מכיוון 
   שהסתבר שחברות בעלות יכולת שיווקית בינלאומית חזקה נטו 
   יותר לערוך התאמות של המוצרים שלהם לשווקים הבינלאומיים 
 ובכך חיזקו עוד יותר
 <br/>
 .את הקשר להצלחה בינלאומית
  <br/>
  :להלן תובנות שכדאי לשקול  
  <br/>  
לצורך פיתוח פעילות בשווקים בינלאומיים מומלץ להדגיש*
  <br/>  
  OI גישה אסטרטגית מסוג 
  <br/>  
  גם לסטארט-אפים ישראליים מומלץ לחשוב על שיווק החל*
      <br/> 
      מהיום הראשון לצד החשיבה והפיתוח הטכנולוגי ולא להיכנס למלכודת בה מפתחים מוצר או טכנולוגיה ואז שואלים איפה אפשר למכור את זה
      <br/> 
	אחת הטעויות של חברות סטארט-אפ ישראליות היא*  
    <br/>
    שלנו אין בכלל מתחרים ישירים OI  האמירה. בסגנון גישת ה
    <br/>
 .הרי שיש סבירות גבוהה שקיימים מתחרים עקיפים שעונים על אותו הצורך אליו מכוונת החברה
 <br/>
	התאמת המוצר לשווקים בינלאומיים היא מרכיב חשוב מאוד* 
    <br/>
    שמשפר את סיכויי ההצלחה הבינלאומית
    <br/>
    	חשוב להדגיש שבהחלט ניתן לשלב בין שתי הגישות*
        <br/>
          האסטרטגיות אבל נקודת המוצא הנכונה יותר לפיתוח
         <br/>
         ולכן מומלץ להתחיל IO פעילות בינלאומית מצליחה היא גישת 
         איתה ובמקביל לפתח כמובן יתרון טכנולוגי מבדל
                               
                                </b></p>
                        </Col>

                    </Row>

                    <Row className="headerImg">
                        <Col xs={12} >
                            <img alt="" src={process.env.PUBLIC_URL + "/Images/Implications.png"} style={{ width: "100%", height: '200px', marginTop: "15px" }} />
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