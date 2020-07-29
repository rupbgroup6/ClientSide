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



class VComposedChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

  constructor(props) {
    super(props);
    this.state = {
      local: false,
      startDate: new Date(),
      endDate: new Date()
    }
    this.apiUrl = 'http://localhost:51298/api/profiler/';
    if (!this.state.local) {
      this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/profiler/';//Dont forget to change
    }
  }
  handleChange1 = date => {
    this.setState({
      startDate: date
    });
  };
  handleChange2 = date => {
    this.setState({
      endDate: date
    });
  };
  componentDidMount() {
    let url = this.apiUrl;
    let total = [];
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
              total[0] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total}
            }
            else if (result[i].Profile === "המאמין") {
              total[1] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המהפכן") {
              total[2] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המנתח") {
              total[3] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המאזן") {
              total[4] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המחושב") {
              total[5] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המתאים") {
              total[6] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "המעז") {
              total[7] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }

            else if (result[i].Profile === "האלוף") {
              total[8] = { name: result[i].Profile, value: result[i].Total, av: result[i].Total, lv:result[i].Total }
            }
          }//end of for

          this.setState({
            data: total
          })
        },
        (error) => {
          console.log("err post=", error);
        }
      );
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
      <Col xs={8}><img className="title" alt="" src={iooi} style={{ }} /></Col>
      <Col xs={2}></Col>
    </Row>
    <Row>
          <Col><h2>סה"כ פרופילים</h2></Col>
    </Row>
      
     <Row className="align11">
          <Col className="chart" >
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={this.state.data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        {/* <Area dataKey="av" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="value" barSize={20} fill="#413ea0" />
        {/* <Line dataKey="lv" stroke="#ff7300" /> */}
      </ComposedChart>
      </Col>
    </Row>

        <Row className="DPicker">
          <Col >
          <DatePicker
        selected={this.state.startDate} onChange={this.handleChange1} />
      </Col>
      <Col>
      <DatePicker
        selected={this.state.endDate} onChange={this.handleChange2} />
      </Col>
        </Row>

    </div>

    
    );
  }
}export default withRouter(VComposedChart);
