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

class ShowLeads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      addUser: {},
      modelOpen: false,
      addUserData: [],
      selectedObj:[],
      disableUpdate:true
    };
  }

  componentDidMount() {
    const leadId=window.location.pathname.split('/')[2];
    let selectedObj=this.props.data.leads.filter(a=>Number(a.id)===Number(leadId));
    this.setState({selectedObj: selectedObj})

    if (this.props.data.leads.length === 0) {
      let userData = [
        
      ];
      this.props.leadDataAdd(userData);
    }
  }

 

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
    
    let a = { ...this.state.selectedObj[0] };
    a.id = id;
    a.singleBtn = false;
    a[comp] = value;
    
    let newData = this.props.data.leads.map(obj=>{
      if(Number(id)===Number(obj.id)){
        return a
      }
      else return obj
    });

    // newData.push(a);
    this.setState({ selectedObj: [a], addUserData: newData,disableUpdate:false });

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
              {this.state.selectedObj?.map(obj=>(
                 <CardBody>
                  <h2 style={{padding:"15px"}}>Customer Personal Details</h2>
                  
                <Row>
                 
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="First Name"
                      value={obj?.firstName}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.lastName}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "lastName",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input  
                      style={{ marginBottom: "10px" }}
                      placeholder="Mobile No."
                      value={obj?.mobileNo}
                      type="tel"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "mobileNo",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Enter Email"
                      value={obj?.email}
                      type="email"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "email",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                  
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Service packages"
                      value={obj?.servicePackages}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          this.props.data.leads.length + 1,
                          "servicePackages",
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
                      value={obj?.address}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.area}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.country}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.city}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.state}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.pincode}
                      type="text"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.inquiryDate}
                      type="date"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.inquiryTime}
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.source || "Lead Source"}
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.leadAllotedTo || "Lead Alloated To"}
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "leadAllotedTo",
                          e.target.value
                        )
                      }
                    >
                      <option disabled={true} value="Lead Alloated To">
                      Lead Alloated To
                      </option>
                      <option value="Mahesh Babu">Mahesh Babu</option>
                      <option value="Kalyan">Kalyan</option>
                      <option value="Rawan">Rawan</option>
                      <option value="Hisma">Hisma</option>
                    </Input>
                  </Col> <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      type="select"
                      
                      placeholder="source"
                      value={obj?.leadStatus || "Lead Status"}
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "leadStatus",
                          e.target.value
                        )
                      }
                    >
                      <option disabled={true} value="Lead Status">
                        Lead Status
                      </option>
                      <option value="Prospect">Prospect</option>
                      <option value="Call back">Call back</option>
                      <option value="Not intrested">Not intrested</option>
                      <option value="Money issue">Money issue</option>
                      <option value="Wrong number">Wrong number</option>
                    </Input>
                  </Col>
                  <Col lg={6}>
                    <Input
                      style={{ marginBottom: "10px" }}
                      placeholder="Requirement"
                      value={obj?.requriement}
                      type="textarea"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.followUpDate}
                      type="date"
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
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
                      value={obj?.followUpTime}
                      onChange={(e) =>
                        this.handleModelUpdate(
                          obj.id,
                          "followUpTime",
                          e.target.value
                        )
                      }
                    />
                  </Col>
                </Row>
                <Link to="/leadManagement"><Button
                        color="primary"
                        disabled={this.state.disableUpdate}
                        onClick={() =>this.handleSubmitModel()}
                        style={{ float: "right" }}
                      >
                        Update
                      </Button></Link>
                
              </CardBody>
              ))}
             
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowLeads);
