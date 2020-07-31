import BubbleChart from '@weknow/react-bubble-chart-d3';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import React, { PureComponent } from 'react';
import ReactExport from "react-export-excel";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../CSS/excelReport.css';
import ReactApexChart from 'react-apexcharts'


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class BChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  constructor(props) {
    super(props);
    this.state = {
      local: false,
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: 'HeatMap Chart (Single color)'
        },
      },

    }
  }
  bubbleClick = (label) => {
    console.log(label)
  }
  legendClick = (label) => {
    console.log(label)
  }

  componentDidMount() {
    let url = "";
    if (this.state.local) {
      url = "http://localhost:51298/api/Connections"
    }
    else {
      url = "http://proj.ruppin.ac.il/bgroup6/prod/api/Connections"
    }
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
        (res) => {
          let conec = {
            'השורד-האלוף': 0, 'השורד-המעז': 0, 'השורד-המתאים': 0, 'השורד-המחושב': 0, 'השורד-המאזן': 0, 'השורד-המנתח': 0, 'השורד-המהפכן': 0, 'השורד-המאמין': 0, 'השורד-השורד': 0,
            'המאמין-האלוף': 0, 'המאמין-המעז': 0, 'המאמין-המתאים': 0, 'המאמין-המחושב': 0, 'המאמין-המאזן': 0, 'המאמין-המנתח': 0, 'המאמין-המהפכן': 0, 'המאמין-המאמין': 0,
            'המהפכן-האלוף': 0, 'המהפכן-המעז': 0, 'המהפכן-המתאים': 0, 'המהפכן-המחושב': 0, 'המהפכן-המאזן': 0, 'המהפכן-המנתח': 0, 'המהפכן-המהפכן': 0,
            'המאזן-המאזן': 0, 'המנתח-האלוף': 0, 'המנתח-המעז': 0, 'המנתח-המתאים': 0, 'המנתח-המחושב': 0, 'המנתח-המאזן': 0, 'המנתח-המנתח': 0,
            'המאזן-האלוף': 0, 'המאזן-המעז': 0, 'המאזן-המתאים': 0, 'המאזן-המחושב': 0,
            'המחושב-המתאים': 0, 'המחושב-האלוף': 0, 'המחושב-המעז': 0, 'המחושב-המחושב': 0,
            'המתאים-האלוף': 0, 'המתאים-המעז': 0,
            'המעז-האלוף': 0, 'המעז-המעז': 0, 'האלוף-האלוף': 0, 'המתאים-המתאים': 0,
          }

          var conec2 = [];
          for (var i = 0; i < res.length; i++) {
            conec2.push({ EmailA: res[i].EmailA, EmailB: res[i].EmailB, ProfileA: res[i].ProfileA, ProfileB: res[i].ProfileB, UserA: res[i].UserA, UserB: res[i].UserB });
          }
          for (var i = 0; i < res.length; i++) {
            if (res[i].ProfileA === "השורד" && res[i].ProfileB === "השורד") {
              let current = conec["השורד-השורד"];
              conec["השורד-השורד"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאמין" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המאמין") {
              let current = conec["השורד-המאמין"];
              conec["השורד-המאמין"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המהפכן") {
              let current = conec["השורד-המהפכן"];
              conec["השורד-המהפכן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המנתח") {
              let current = conec["השורד-המנתח"];
              conec["השורד-המנתח"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המאזן") {
              let current = conec["השורד-המאזן"];
              conec["השורד-המאזן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המחושב") {
              let current = conec["השורד-המחושב"];
              conec["השורד-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המתאים") {
              let current = conec["השורד-המתאים"];
              conec["השורד-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "המעז") {
              let current = conec["השורד-המעז"];
              conec["השורד-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "השורד" || res[i].ProfileA === "השורד" && res[i].ProfileB === "האלוף") {
              let current = conec["השורד-האלוף"];
              conec["השורד-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאמין" && res[i].ProfileB === "המאמין") {
              let current = conec["המאמין-המאמין"];
              conec["המאמין-המאמין"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המהפכן") {
              let current = conec["המאמין-המהפכן"];
              conec["המאמין-המהפכן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המנתח") {
              let current = conec["המאמין-המנתח"];
              conec["המאמין-המנתח"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המאזן") {
              let current = conec["המאמין-המאזן"];
              conec["המאמין-המאזן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המחושב") {
              let current = conec["המאמין-המחושב"];
              conec["המאמין-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המתאים") {
              let current = conec["המאמין-המתאים"];
              conec["המאמין-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "המעז") {
              let current = conec["המאמין-המעז"];
              conec["המאמין-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המאמין" || res[i].ProfileA === "המאמין" && res[i].ProfileB === "האלוף") {
              let current = conec["המאמין-האלוף"];
              conec["המאמין-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המהפכן") {
              let current = conec["המהפכן-המהפכן"];
              conec["המהפכן-המהפכן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המנתח") {
              let current = conec["המהפכן-המנתח"];
              conec["המהפכן-המנתח"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המאזן") {
              let current = conec["המהפכן-המאזן"];
              conec["המהפכן-המאזן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המחושב") {
              let current = conec["המהפכן-המחושב"];
              conec["המהפכן-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המתאים") {
              let current = conec["המהפכן-המתאים"];
              conec["המהפכן-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "המעז") {
              let current = conec["המהפכן-המעז"];
              conec["המהפכן-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המהפכן" || res[i].ProfileA === "המהפכן" && res[i].ProfileB === "האלוף") {
              let current = conec["המהפכן-האלוף"];
              conec["המהפכן-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המנתח" && res[i].ProfileB === "המנתח") {
              let current = conec["המנתח-המנתח"];
              conec["המנתח-המנתח"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המאזן") {
              let current = conec["המנתח-המאזן"];
              conec["המנתח-המאזן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המתאים") {
              let current = conec["המנתח-המתאים"];
              conec["המנתח-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המעז") {
              let current = conec["המנתח-המעז"];
              conec["המנתח-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "המחושב") {
              let current = conec["המנתח-המחושב"];
              conec["המנתח-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המנתח" || res[i].ProfileA === "המנתח" && res[i].ProfileB === "האלוף") {
              let current = conec["המנתח-האלוף"];
              conec["המנתח-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המאזן" && res[i].ProfileB === "המאזן") {
              let current = conec["המאזן-המאזן"];
              conec["המאזן-המאזן"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המתאים") {
              let current = conec["המאזן-המתאים"];
              conec["המאזן-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המחושב") {
              let current = conec["המאזן-המחושב"];
              conec["המאזן-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "המעז") {
              let current = conec["המאזן-המעז"];
              conec["המאזן-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המאזן" || res[i].ProfileA === "המאזן" && res[i].ProfileB === "האלוף") {
              let current = conec["המאזן-האלוף"];
              conec["המאזן-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המחושב" && res[i].ProfileB === "המחושב") {
              let current = conec["המחושב-המחושב"];
              conec["המחושב-המחושב"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "המתאים") {
              let current = conec["המחושב-המתאים"];
              conec["המחושב-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "המעז") {
              let current = conec["המחושב-המעז"];
              conec["המחושב-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המחושב" || res[i].ProfileA === "המחושב" && res[i].ProfileB === "האלוף") {
              let current = conec["המחושב-האלוף"];
              conec["המחושב-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המתאים" && res[i].ProfileB === "המתאים") {
              let current = conec["המתאים-המתאים"];
              conec["המתאים-המתאים"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המתאים" || res[i].ProfileA === "המתאים" && res[i].ProfileB === "המעז") {
              let current = conec["המתאים-המעז"];
              conec["המתאים-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המתאים" || res[i].ProfileA === "המתאים" && res[i].ProfileB === "האלוף") {
              let current = conec["המתאים-האלוף"];
              conec["המתאים-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "המעז" && res[i].ProfileB === "המעז") {
              let current = conec["המעז-המעז"];
              conec["המעז-המעז"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "המעז" || res[i].ProfileA === "המעז" && res[i].ProfileB === "האלוף") {
              let current = conec["המעז-האלוף"];
              conec["המעז-האלוף"] = parseInt(current + 1);
            }
            else if (res[i].ProfileA === "האלוף" && res[i].ProfileB === "האלוף") {
              let current = conec["האלוף-האלוף"];
              conec["האלוף-האלוף"] = parseInt(current + 1);
            }
          }
          var ac = [];  //Math.floor((counter["האלוף"] / totalcount) * 100);
          for (var key in conec) {
            if (conec[key] != 0) {
              //ac = [{ label: Object.values(conec), value: Object.values(conec)} ]
              //ac.push({label: Object.keys(conec), value: Object.values(conec)})
              ac.push({ label: key, value: conec[key] })
            }
          }
          
          for (var i = 0; i < ac.length; i++) {
            let temp = ac[i].value;
            ac[i].value = Math.floor((temp / res.length) * 100);
          }


          this.setState({
            data: ac,
          })
        },
        (error) => {
          console.log("err post=", error);
        });
  }
  render() {

    return (


      <div className="align10" >
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
            <Col><h2>חוזק קורלציות חברויות בין פרופילים</h2></Col>
          </Row>
          <Row>
            <Col><h6>(מוצג באחוזים)</h6></Col>
          </Row>

          <Row className="align12" style={{ marginTop: "30px" }}>
            <Col className="chart" style={{ textAlign: "center", left: "5px" }} >
              <BubbleChart
                data={this.state.data}
                graph={{
                  zoom: 1.1,
                  offsetX: -0.02,
                  offsetY: -0.01,
                }}
                width={380}
                height={300}
                border={{
                  color: '#fff',

                }}
                padding={0} // optional value, number that set the padding between bubbles
                showLegend={true} // optional value, pass false to disable the legend.
                legendPercentage={20} // number that represent the % of with that legend going to use.
                legendFont={{
                  family: 'Arial',
                  size: 10,
                  color: '#fff',
                  weight: 'bold',
                }}
                valueFont={{
                  family: 'Arial',
                  size: 10,
                  color: '#fff',
                  weight: 'bold',
                }}
                labelFont={{
                  family: 'Arial',
                  size: 10,
                  color: '#fff',
                  weight: 'bold',
                }}
                //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                // bubbleClickFunc={this.bubbleClick}
                // legendClickFun={this.legendClick}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

} export default withRouter(BChart);