import React, { Component } from "react";
// import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
// Custom Scrollbar
import SimpleBar from "simplebar-react";
import { connect } from "react-redux";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart";
import RadialChart from "../AllCharts/apex/apexdonut";
import Apexdonut from "../AllCharts/apex/apexdonut1";
import SparkLine from "../AllCharts/sparkline/sparkline";
import SparkLine1 from "../AllCharts/sparkline/sparkline1";
import Salesdonut from "../AllCharts/apex/salesdonut";

import "chartist/dist/scss/chartist.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render() {
    const Prospect=this.props.data.leads.filter(a=>a.leadStatus==="Prospect")
    const notIntrested=this.props.data.leads.filter(a=>a.leadStatus==="Not intrested")
    const callBack=this.props.data.leads.filter(a=>a.leadStatus==="Call back")

    console.log(this.props.data,"....")
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Dashboard</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active">
                    Welcome to Dashboard
                  </li>
                </ol>
              </div>
            </Col>

            {/* <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col> */}
          </Row>

          <Row>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Total Leads
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      {this.props.data?.leads?.length}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon2} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Total Sales
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                    0
                      <i className="mdi mdi-arrow-down text-danger ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-danger">
                      <p className="mb-0">- 28%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Prospects
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                    {Prospect?.length}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Call back
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                    {callBack?.length}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Not interested
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                    {notIntrested?.length}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Monthly Earning</h4>
                  <Row>
                    <Col lg={9}>
                      <div>
                        <LineAreaChart />
                      </div>
                    </Col>
                   
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Sales Report</h4>
                  <div className="cleafix">
                    <p className="float-left">
                      <i className="mdi mdi-calendar mr-1 text-primary"></i> Jan
                      01 - Jan 31
                    </p>
                    {/* <h5 className="font-18 text-right">$4230</h5> */}
                  </div>
                  <div id="ct-donut" className="ct-chart wid pt-4">
                    <Salesdonut />
                  </div>
                  <div className="mt-4">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <span className="badge badge-primary">Desk</span>
                          </td>
                          <td>Desktop</td>
                          <td className="text-right">54.5%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge badge-success">Mob</span>
                          </td>
                          <td>Mobile</td>
                          <td className="text-right">28.0%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge badge-warning">Tab</span>
                          </td>
                          <td>Tablets</td>
                          <td className="text-right">17.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
           
          </Row>

          
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) =>({
  data:state.Data
})

export default connect(mapStateToProps)(Dashboard);
