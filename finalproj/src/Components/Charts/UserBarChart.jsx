import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import iooi from '../../Images/ioLogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class UserBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    constructor(props) {
        super(props);
        this.state = {
            local: false,
            id: this.props.match.params.id
        }
        this.apiUrl = 'http://localhost:51298/api/answers/id';
        if (!this.state.local) {
            this.apiUrl = 'http://proj.ruppin.ac.il/bgroup6/prod/api/answers/id';//Dont forget to change
        }
    }

    componentDidMount() {
        let url = this.apiUrl + this.state.id;
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
                    let market = 0;
                    let resFlex = 0;
                    let orient = 0;
                    let actFlex = 0;
                    for (var i = 0; i < result.length; i++) {//seperating the questions to 3 main groups
                        let ans = parseInt(result[i].AnswerNum);
                        switch (result[i].QuestionId) {
                            case 100: market += ans
                                break;
                            case 107: market += ans
                                break;
                            case 109: market += ans
                                break;
                            case 111: resFlex += ans
                                break;
                            case 113: resFlex += ans
                                break;
                            case 115: resFlex += ans
                                break;
                            case 106: orient += ans
                                break;
                            case 108: orient += ans
                                break;
                            case 110: orient += ans
                                break;
                            case 112: actFlex += ans
                                break;
                            case 114: actFlex += ans
                                break;
                            case 116: actFlex += ans
                                break;
                        }
                    }
                    let oiio = [{ name: "Outside-In", "אוריינטציית שוק": parseFloat(market / 3).toFixed(2) }, { name: "Outside-In", "גמישות תגובתית": parseFloat(resFlex / 3).toFixed(2) }, { name: "Inside-Out", "אוריינטציית חדשנות": parseFloat(orient / 3).toFixed(2) }, { name: "Inside-Out", "גמישות אקטיבית": parseFloat(actFlex / 3).toFixed(2) }]
                    this.setState({
                        data: oiio
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
                    <Col xs={8}><img className="title" alt="" src={iooi} style={{}} /></Col>
                    <Col xs={2}></Col>
                </Row>

                <Row>
                    <Col><h2>נתונים להצלחה בשיווק בינלאומי על בסיס 4 המימדים</h2></Col>
                </Row>
                <Row className="">
                    <Col className="" >
                        <BarChart
                            width={500}
                            height={300}
                            data={this.state.data}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="אוריינטציית שוק" fill="#8884d8" />
                            <Bar dataKey="גמישות תגובתית" fill="#82ca9d" />
                            <Bar dataKey="אוריינטציית חדשנות" fill="#2E86C1" />
                            <Bar dataKey="גמישות אקטיבית" fill="#C70039" />
                        </BarChart>
                    </Col>
                </Row>
            </div>
        );
    }
} export default withRouter(UserBarChart)
