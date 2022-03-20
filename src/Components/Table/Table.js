import React from "react";
import { useEffect, useState } from "react";
import "./Table.css";
import { Table } from "react-bootstrap";
import API_URL from "../Global/globalConstant";

function Container() {
  const [register, setRegister] = useState([]);

  const getReg = () => {
    fetch(`${API_URL}/api/users`)
      .then((data) => data.json())
      .then((reg) => setRegister(reg));
  };
  useEffect(getReg, []);

  return (
    <section className="table-container">
      <div className="table">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Job Type</th>
              <th>Action</th>
            </tr>
          </thead>
          {register.map(
            ({ fullname, email, mobilecode, mobile, dob, jobtype }) => (
              <tbody>
                <tr>
                  <td>{fullname}</td>
                  <td>{email}</td>
                  <td>
                    +{mobilecode} {mobile}
                  </td>
                  <td>{dob}</td>
                  <td>{jobtype}</td>
                  <td>Action</td>
                </tr>
              </tbody>
            )
          )}
        </Table>
      </div>
    </section>
  );
}

export default Container;
