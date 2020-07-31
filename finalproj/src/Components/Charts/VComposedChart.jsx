import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import iooi from '../../Images/ioLogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import Spinner from 'react-bootstrap/Spinner';
import $ from "jquery";
import swal from 'sweetalert';



class VComposedChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  constructor(props) {
    super(props);
    this.state = {
      local: false,
      sDate: "",
      eDate: "",
      loading: false
    }
    this.apiUrl = 'http://localhost:51298/api/profiler/';
    if (!this.state.local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/profiler/';//Dont forget to change
    }
  }

  handleChange1 = (e) => {
    this.setState({
      sDate: e.target.value
    });
  }

  handleChange2 = (e) => {
    this.setState({
      eDate: e.target.value
    });
  }

  fetchByDate = () => {
    let sDate = new Date(this.state.sDate);
    let eDate = new Date(this.state.eDate);
    if (sDate > eDate) {
      swal("!שגיאה", "תאריך ההתחלה לא יכול מאוחר יותר מתאריך הסיום");
    }
    else {
      let dates = this.state.sDate + "@" + this.state.eDate
      let url = this.apiUrl + "byDate/" + dates;
      let total = [];
      this.setState({
        loading: true
      })
      $(".align11").show(400);
      setTimeout(() => {
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
              for (var i = 0; i < result.length; i++) {//Dont forgte to change the name of the var!!
                if (result[i].Profile === "השורד") {
                  total[0] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }
                else if (result[i].Profile === "המאמין") {
                  total[1] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המהפכן") {
                  total[2] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המנתח") {
                  total[3] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המאזן") {
                  total[4] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המחושב") {
                  total[5] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המתאים") {
                  total[6] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "המעז") {
                  total[7] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }

                else if (result[i].Profile === "האלוף") {
                  total[8] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv: result[i].Total }
                }
              }//end of for

              this.setState({
                data: total,
                loading: false
              })
            },
            (error) => {
              console.log("err post=", error);
            }
          );
      }, 1500);

    }
  }

  componentDidMount() {
    $(".align11").hide();
  }


  render() {
    return (
      <div>
        <Row>
          <Col>
            <Link to={"/HomeAdmin"}> <Button variant="secondary" style={{ float: "right" }}><i class="fa fa-home"></i></Button></Link>
          </Col>
        </Row>

        <Row className="header2">
          <Col xs={2}></Col>
          <Col xs={8}><img className="title" alt="" src={process.env.PUBLIC_URL + "/Images/ioLogo.png"} style={{}} /></Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
          <Col><h2 style={{ margin: "0" }}> סה"כ פרופילים</h2></Col>
        </Row>
        <Row>
          <Col><h2 style={{ margin: "0" }}> שנוצרו בין התאריכים</h2></Col>
        </Row>
        <Row className="Dater">
          <Col>
            <label className="lbl" for="SDate">:תאריך התחלה</label>
            <input onChange={this.handleChange1} type="date" id="SDate" name="SDate"></input>
          </Col>
        </Row>
        
        <Row className="Dater">
          <Col>
            <label className="lbl" for="EDate">:תאריך סיום</label>
            <input onChange={this.handleChange2} type="date" id="EDate" name="EDate"></input>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: "5px" }}>
            <Button id="getInfoBTN" onClick={this.fetchByDate} >הבא נתונים</Button>
          </Col>
        </Row>

        {this.state.loading ?
          (<div style={{textAlign:"center", marginTop:"100px"}}>
            <Spinner animation="border" />
            <p>loading...</p>
          </div>)
          :
          (<Row className="align11">
            <Col className="chart" >
              <ComposedChart
                layout="vertical"
                width={390}
                height={400}
                data={this.state.data}
                margin={{
                  top: 20, right: 0, bottom: 20, left: 27,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                {/* <Area dataKey="av" fill="#8884d8" stroke="#8884d8" /> */}
                <Bar dataKey="value" barSize={20} fill="blue" />
                {/* <Line dataKey="lv" stroke="#ff7300" /> */}
              </ComposedChart>
            </Col>
          </Row>)}

        <div>

        </div>


      </div>


    );
  }
} export default withRouter(VComposedChart);
