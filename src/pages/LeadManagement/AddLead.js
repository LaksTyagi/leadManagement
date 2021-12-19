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
  changeTotalUser,leadDataAdd
} from "../../store/data/action";

class AddLead extends Component {
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
    if (this.props.data.leads.length === 0) {
      let userData = [
        
      ];
      this.props.leadDataAdd(userData);
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
    let newData = this.props.data.leads.map((val) => {
      if (val.id === id) {
        val[comp] = value;
        if (comp !== "singleBtn") val.status = value;
      }
      return val;
    });
    console.log(newData);
    // this.props.changeTotalUser(newData);
  };
  handleModelUpdate = (id, comp, value) => {
    console.log("dd", id);
    let newData = [...this.props.data.leads];

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
    this.props.leadDataAdd(this.state.addUserData);
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl={12}>
            <Card>
              <CardBody>
                  <h2 style={{padding:"15px"}}>Customer Personal Details</h2>
                  
                <Row>
                  <Col lg={6}>
                    <Input  
                      style={{ marginBottom: "10px" }}
                      placeholder="Mobile No."
                      type="tel"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "mobileNo",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="First Name"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "firstName",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Last Name"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "lastName",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Enter Email"
                      type="email"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "email",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Company Name"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "companyName",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                </Row>
                <h2 style={{padding:"15px"}}>Customer Address Details</h2>
                
                <Row>
                  <Col lg={6}>
                    <Input  
                      style={{ marginBottom: "10px" }}
                      placeholder="Address"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "address",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Area"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "area",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="country"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "country",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="City"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "city",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="State"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "state",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                 
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Pincode"
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "pincode",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                </Row>
                <h2 style={{padding:"15px"}}>Lead Details</h2>
                
                <Row>
                  <Col lg={6}>
                    <Input  
                      style={{ marginBottom: "10px" }}
                      placeholder="Inquiry Date"
                      type="date"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "inquiryDate",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Inquiry Time"
                      type="time"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "inquiryTime",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  
                  
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      type="select"
                      placeholder="source"
                      value="Lead Source"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "source",
                          e.target.value
                        )
                      }
                    >
                      <option disabled={true} value="Lead Source">
                        Lead Source
                      </option>
                      <option value="Just Dial">Just Dial</option>
                      <option value="Indian Mart">Indian Mart</option>
                      <option value="News Paper">News Paper</option>
                      <option value="Website">Website</option>
                    </Input>
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      type="select"
                      placeholder="source"
                      value="Lead Alloated To"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "leadAllotedTo",
                          e.target.value
                        )
                      }
                    >
                      <option disabled={true} value="Lead Alloated To">
                      Lead Alloated To
                      </option>
                      <option value="Just Dial">Just Dial</option>
                      <option value="Indian Mart">Indian Mart</option>
                      <option value="News Paper">News Paper</option>
                      <option value="Website">Website</option>
                    </Input>
                  </Col> <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      type="select"
                      placeholder="source"
                      value="Lead Status"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "leadStatus",
                          e.target.value
                        )
                      }
                    >
                      <option disabled={true} value="Lead Status">
                        Lead Status
                      </option>
                      <option value="Just Dial">Just Dial</option>
                      <option value="Indian Mart">Indian Mart</option>
                      <option value="News Paper">News Paper</option>
                      <option value="Website">Website</option>
                    </Input>
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Requirement"
                      type="textarea"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "requriement",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                </Row>
                <h2 style={{padding:"15px"}}>Follow Up</h2>
                
                <Row>
                <Col lg={6}>
                    <Input  
                      style={{ marginBottom: "10px" }}
                      placeholder="Follow Up Date"
                      type="date"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "followUpDate",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Follow Up Time"
                      type="time"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "followUpTime",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                </Row>
                <Link to="/leadManagement"><Button
                        color="primary"
                        onClick={() =>this.handleSubmitModel()}
                        style={{ float: "right" }}
                      >
                        Submit
                      </Button></Link>
                
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
    // changeTotalUser: (data) => dispatch(changeTotalUser(data)),
    leadDataAdd:(data)=>dispatch(leadDataAdd(data))
  };
};
const mapStateToProps = (state) => ({
  data: state.Data,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLead);
