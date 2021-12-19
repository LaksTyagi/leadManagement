import React, { Component } from "react";
// import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

// import user2 from "../../assets/images/users/user-2.jpg";
// import user3 from "../../assets/images/users/user-3.jpg";
// import user4 from "../../assets/images/users/user-4.jpg";
// import user5 from "../../assets/images/users/user-5.jpg";
import user3 from "../assets/images/users/user-6.jpg";

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "reactstrap";
import { connect } from "react-redux";

import "chartist/dist/scss/chartist.scss";
import {
  changeEnquriy,
  changeProspects,
  changeNotIntrested,
  changeTotalUser,
} from "../store/data/action";

class Users extends Component {
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
      addUser: {},
      modelOpen: false,
      addUserData: [],
    };
  }

  componentDidMount() {
    if (this.props.data.totalUsers.length === 0) {
      let userData = [
        
      ];
      this.props.changeTotalUser(userData);
    }
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
    this.setState({
      dropdownChange1: "",
      dropdownChange2: "",
      dropdownChange3: "",
      dropdownChange4: "",
    });
  };

  handleUpdate = (id, comp, value) => {
    console.log("dd", id);
    let newData = this.props.data.totalUsers.map((val) => {
      if (val.id === id) {
        val[comp] = value;
        if (comp !== "singleBtn") val.status = value;
      }
      return val;
    });
    console.log(newData);
    this.props.changeTotalUser(newData);
  };
  handleModelUpdate = (id, comp, value) => {
    console.log("dd", id);
    let newData = [...this.props.data.totalUsers];

    let a = { ...this.state.addUser };
    a.id = id;
    a.singleBtn = false;
    a[comp] = value;
    newData.push(a);
    this.setState({ addUser: a, addUserData: newData });

    console.log(a, newData);
    // this.props.changeTotalUser(newData);
  };
  handleSubmitModel = () => {
    this.props.changeTotalUser(this.state.addUserData);
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col lg={6}>
                    <h4 className="card-title mb-4">Users</h4>
                  </Col>
                  <Col lg={6}>
                    <div>
                     <Button
                        color="primary"
                        onClick={() =>
                          this.setState({ modelOpen: !this.state.modelOpen })
                        }
                        style={{ float: "right" }}
                      >
                        Add User
                      </Button>
                      
                      <Modal
                        isOpen={this.state.modelOpen}
                        fullscreen="sm"
                        toggle={() =>
                          this.setState({ modelOpen: !this.state.modelOpen })
                        }
                      >
                        <ModalHeader
                          toggle={() =>
                            this.setState({ modelOpen: !this.state.modelOpen })
                          }
                        >
                          Add User
                        </ModalHeader>
                        <ModalBody>
                          <Row>
                            <Col lg={6} >
                              <Input style={{marginBottom:"10px"}}
                                placeholder="Enter Name"
                                type="text"
                                onChange={(e) =>
                                  this.handleModelUpdate(
                                    this.props.data.totalUsers.length + 1,
                                    "name",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                            <Col lg={6}>
                              <Input style={{marginBottom:"10px"}}
                                placeholder="Enter Email"
                                type="email"
                                onChange={(e) =>
                                  this.handleModelUpdate(
                                    this.props.data.totalUsers.length + 1,
                                    "email",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                            <Col lg={6}>
                              <Input style={{marginBottom:"10px"}}
                                placeholder="Enter DOB"
                                type="date"
                                onChange={(e) =>
                                  this.handleModelUpdate(
                                    this.props.data.totalUsers.length + 1,
                                    "Dob",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                            <Col lg={6}>
                              <Input style={{marginBottom:"10px"}}
                                placeholder="Enter Phone number"
                                type="tel"
                                onChange={(e) =>
                                  this.handleModelUpdate(
                                    this.props.data.totalUsers.length + 1,
                                    "phone",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                            
                            <Col lg={6}>
                              <Input style={{marginBottom:"10px"}}
                                type="file"
                                onChange={(e) =>
                                  this.handleModelUpdate(
                                    this.props.data.totalUsers.length + 1,
                                    "selectedFile",
                                    e.target.value
                                  )
                                }
                              />
                            </Col>
                          </Row>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="primary"
                            onClick={() => {
                              this.handleSubmitModel();
                              this.setState({
                                modelOpen: !this.state.modelOpen,
                              });
                            }}
                          >
                            Submit
                          </Button>{" "}
                          <Button
                            onClick={() =>
                              this.setState({
                                modelOpen: !this.state.modelOpen,
                              })
                            }
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  </Col>
                </Row>

                <div className="table-responsive" style={{ height: "25rem" }}>
                  <table className="table table-hover table-centered table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th scope="col">(#) Id</th>
                        <th scope="col">Name</th>

                        <th scope="col">Dispose</th>
                        <th scope="col" colSpan="2">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.data.totalUsers?.map((val) => (
                        <tr>
                          <th scope="row">{val.id}</th>
                          <td>
                            <div>
                              <img
                                src={user3}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              {`${val.name} (${val.email})`}
                            </div>
                          </td>

                          <td>
                            {" "}
                            <div className="col-sm-6">
                              <Dropdown
                                isOpen={val.singleBtn}
                                toggle={() => {
                                  this.handleUpdate(
                                    val.id,
                                    "singleBtn",
                                    !val.singleBtn
                                  );
                                }}
                              >
                                <DropdownToggle
                                  className="btn btn-secondary"
                                  caret
                                >
                                  {val.dispose}

                                  <i className="mdi mdi-chevron-down"></i>
                                </DropdownToggle>
                                <DropdownMenu
                                  style={{
                                    transform: "translate3d(0px, -110px, 0px)",
                                  }}
                                >
                                  <DropdownItem
                                    onClick={() => {
                                      this.handleUpdate(
                                        val.id,
                                        "dispose",
                                        "Enquiry"
                                      );
                                    }}
                                  >
                                    Enquiry
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={() =>
                                      this.handleUpdate(
                                        val.id,
                                        "dispose",
                                        "Prospects"
                                      )
                                    }
                                  >
                                    Prospects
                                  </DropdownItem>
                                  <DropdownItem
                                    onClick={() =>
                                      this.handleUpdate(
                                        val.id,
                                        "dispose",
                                        "Not Intrested"
                                      )
                                    }
                                  >
                                    Not Intrested
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-success">
                              {val.source}
                            </span>
                          </td>
                          {/* <td>
                            <div>
                              <Link
                                to="#"
                                className="btn btn-primary btn-sm"
                                // onClick={() => this.handleSubmit()}
                              >
                                Edit
                              </Link>
                            </div>
                          </td> */}
                        </tr>
                      ))}
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
    changeTotalUser: (data) => dispatch(changeTotalUser(data)),
  };
};
const mapStateToProps = (state) => ({
  data: state.Data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
