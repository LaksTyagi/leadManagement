import React, { Component } from "react";
// import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
} from "reactstrap";
import { connect } from "react-redux";

import "chartist/dist/scss/chartist.scss";
import {
  changeEnquriy,
  changeProspects,
  changeNotIntrested,
} from "../../store/data/action";

class LeadManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownChange1: "",
      dropdownChange2: "",
      dropdownChange3: "",
      dropdownChange4: "",
      singlebtn1: false,
      singlebtn2: false,
      singlebtn3: false,
      singlebtn4: false,
    };
  }

  handleSubmit = () => {
    if (
      this.state.dropdownChange1 === "Enquiry" ||
      this.state.dropdownChange2 === "Enquiry" ||
      this.state.dropdownChange3 === "Enquiry" ||
      this.state.dropdownChange4 === "Enquiry"
    ) {
      let data = this.props.data.enquiry + 1;
      this.props.changeEnquriy(data);
    } else if (
      this.state.dropdownChange1 === "Prospects" ||
      this.state.dropdownChange2 === "Prospects" ||
      this.state.dropdownChange3 === "Prospects" ||
      this.state.dropdownChange4 === "Prospects"
    ) {
      let data = this.props.data.prospects + 1;
      this.props.changeProspects(data);
    } else {
      let data = this.props.data.notIntrested + 1;
      this.props.changeNotIntrested(data);
    }
    this.setState({dropdownChange1:'',dropdownChange2:'',dropdownChange3:'',dropdownChange4:''})
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                <h4 className="card-title mb-4">USERS</h4>
                <div className="table-responsive">
                  <table className="table table-hover table-centered table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th scope="col">(#) Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Dispose</th>
                        <th scope="col" colSpan="2">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">#14256</th>
                        <td>
                          <div>
                            <img
                              src={user3}
                              alt=""
                              className="avatar-xs rounded-circle mr-2"
                            />{" "}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>
                          {" "}
                          <div className="col-sm-6">
                            <Dropdown
                              isOpen={this.state.singlebtn1}
                              toggle={() => {
                                this.setState({
                                  singlebtn1: !this.state.singlebtn1,
                                });
                              }}
                            >
                              <DropdownToggle
                                className="btn btn-secondary"
                                caret
                              >
                                {this.state.dropdownChange1}{" "}
                                <i className="mdi mdi-chevron-down"></i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange1: "Enquiry",
                                    })
                                  }
                                >
                                  Enquiry
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange1: "Prospects",
                                    })
                                  }
                                >
                                  Prospects
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange1: "Not Intrested",
                                    })
                                  }
                                >
                                  Not Intrested
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success">Delivered</span>
                        </td>
                        <td>
                          <div>
                            <Button
                              className="btn btn-primary btn-sm"
                              onClick={() => this.handleSubmit()}
                            >
                              Submit
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14256</th>
                        <td>
                          <div>
                            <img
                              src={user2}
                              alt=""
                              className="avatar-xs rounded-circle mr-2"
                            />{" "}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>
                          {" "}
                          <div className="col-sm-6">
                            <Dropdown
                              isOpen={this.state.singlebtn2}
                              toggle={() => {
                                this.setState({
                                  singlebtn2: !this.state.singlebtn2,
                                });
                              }}
                            >
                              <DropdownToggle
                                className="btn btn-secondary"
                                caret
                              >
                                {this.state.dropdownChange2}{" "}
                                <i className="mdi mdi-chevron-down"></i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange2: "Enquiry",
                                    })
                                  }
                                >
                                  Enquiry
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange2: "Prospects",
                                    })
                                  }
                                >
                                  Prospects
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange2: "Not Intrested",
                                    })
                                  }
                                >
                                  Not Intrested
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success">Delivered</span>
                        </td>
                        <td>
                          <div>
                            <Button
                              className="btn btn-primary btn-sm"
                              onClick={() => this.handleSubmit()}
                            >
                              Submit
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14256</th>
                        <td>
                          <div>
                            <img
                              src={user4}
                              alt=""
                              className="avatar-xs rounded-circle mr-2"
                            />{" "}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>
                          {" "}
                          <div className="col-sm-6">
                            <Dropdown
                              isOpen={this.state.singlebtn3}
                              toggle={() => {
                                this.setState({
                                  singlebtn3: !this.state.singlebtn3,
                                });
                              }}
                            >
                              <DropdownToggle
                                className="btn btn-secondary"
                                caret
                              >
                                {this.state.dropdownChange3}{" "}
                                <i className="mdi mdi-chevron-down"></i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange3: "Enquiry",
                                    })
                                  }
                                >
                                  Enquiry
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange3: "Prospects",
                                    })
                                  }
                                >
                                  Prospects
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange3: "Not Intrested",
                                    })
                                  }
                                >
                                  Not Intrested
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success">Delivered</span>
                        </td>
                        <td>
                          <div>
                            <Button
                              className="btn btn-primary btn-sm"
                              onClick={() => this.handleSubmit()}
                            >
                              Submit
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">#14256</th>
                        <td>
                          <div>
                            <img
                              src={user5}
                              alt=""
                              className="avatar-xs rounded-circle mr-2"
                            />{" "}
                            Philip Smead
                          </div>
                        </td>
                        <td>15/1/2018</td>
                        <td>
                          {" "}
                          <div className="col-sm-6">
                            <Dropdown
                              isOpen={this.state.singlebtn4}
                              toggle={() => {
                                this.setState({
                                  singlebtn4: !this.state.singlebtn4,
                                });
                              }}
                            >
                              <DropdownToggle
                                className="btn btn-secondary"
                                caret
                              >
                                {this.state.dropdownChange4}{" "}
                                <i className="mdi mdi-chevron-down"></i>
                              </DropdownToggle>
                              <DropdownMenu
                                onChange={(event) => console.log(event)}
                              >
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange4: "Enquiry",
                                    })
                                  }
                                >
                                  Enquiry
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange4: "Prospects",
                                    })
                                  }
                                >
                                  Prospects
                                </DropdownItem>
                                <DropdownItem
                                  onClick={() =>
                                    this.setState({
                                      dropdownChange4: "Not Intrested",
                                    })
                                  }
                                >
                                  Not Intrested
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-success">Delivered</span>
                        </td>
                        <td>
                          <div>
                            <Button
                              className="btn btn-primary btn-sm"
                              onClick={() => this.handleSubmit()}
                            >
                              Submit
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    changeEnquriy: (data) => dispatch(changeEnquriy(data)),
    changeProspects: (data) => dispatch(changeProspects(data)),
    changeNotIntrested: (data) => dispatch(changeNotIntrested(data)),
  };
};
const mapStateToProps = (state) => ({
  data: state.Data,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeadManagement);
