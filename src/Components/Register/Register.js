import React from "react";
import "./Register.css";
import { Container, Col, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "react-bootstrap";


function Register() {

  return (
    <div className="form">
      <form >
        <fieldset>
          <legend className="heading">REGISTRATION</legend>
          <Container>
            <Row className="cl-left">
              <Col sm={2}>
                <label>
                  <span>Fullname</span>
                </label>
              </Col>
              <Col>
                <input type="text" name="username" placeholder="Fullname" />
              </Col>
              <Col sm={2}>
                <label>
                  <span>Profile Pic</span>
                </label>
              </Col>
              <Col>
                <div>
                  <img
                    src="https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg"
                    alt="Profile"
                    width="60"
                    height="60"
                  />
                </div>
              </Col>
            </Row>

            <Row className="cl-left">
              <Col sm={2}>
                <label>
                  <span>Mobile</span>
                </label>
              </Col>
              <Col>
                <input type="text" name="number" placeholder="+91" className="num" />
                <input type="number" name="number" placeholder="Number" />
              </Col>
              <Col sm={2}>
                <label>
                  <span>Email Id</span>
                </label>
              </Col>
              <Col>
                <input type="number" name="age" placeholder="Email" />
              </Col>
            </Row>

            <Row className="cl-left">
              <Col sm={2}>
                <label>
                  <span>Job Type</span>
                </label>
              </Col>
              <Col>
                <input value="FT" className="PT" />
                <input value="PT" className="PT" />
                <input value="Consultant" className="Consultant" />
              </Col>
              <Col sm={2}>
                <label>
                  <span>DOB</span>
                </label>
              </Col>
              <Col>
                <input type="date" />
              </Col>
            </Row>

            <Row className="cl-left">
              <Col sm={2}>
                <label>
                  <span>Pref.Location</span>
                </label>
              </Col>
              <Col>
                <input type="checkbox" className="checkbox" />{" "}
                <span>Chennai</span> <br />
                <input type="checkbox" className="checkbox" />{" "}
                <span>Bangalore</span> <br />
                <input type="checkbox" className="checkbox" /> <span>Pune</span>{" "}
                <br />
              </Col>
              <Col sm={4}></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col md="auto"></Col>
              <Col xs lg="2">
                <Button variant="outline-success">
                  <AddIcon /> Add / Edit
                </Button>
              </Col>
            </Row>
          </Container>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
