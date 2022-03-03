import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import {Link} from "react-router-dom";
//import "./Preview.css"
import {toast} from "react-toastify";
import axios from 'axios'
import { AddContactBtnStyle, GetStartedBtnStyle } from "../style-components/Buttons";
import { SectionPanelStyle } from "../style-components/SectionStyle";
import iconEdit from "../assets/svg/edit.svg";
import iconDelete from "../assets/svg/delete.svg";
import iconView from "../assets/svg/view.svg";
import exclamation from "../assets/svg/exclamation.svg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { PanelStyle } from "../style-components/PanelStyle";
import { TableStyle } from "../style-components/TableStyle";
import Loader from "../components/loader/Loader";


const Panel = () => {

const { userctx } = useContext(UserContext);
const [loading, setLoading] = useState(true);


const [data, setData] = useState([]);
    const loadData = async() => {
        const response = await axios.get(
          "https://cms-contacts-mysql.herokuapp.com/api/get"
        );
        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadData();

    }, []);


const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteContact(id),
        },
        {
          label: "No",
        },
      ],
    });
  };




    const deleteContact = (id) => {

            axios.delete(
              `https://cms-contacts-mysql.herokuapp.com/api/remove/${id}`
            ).then(() => {
                    loadData()
                  })
                  .catch((err) => toast.error(err.response.data));
                toast.success("Contact Updated Succesfully");
        }





  return (
    <>
      {!loading ? (
        <SectionPanelStyle>
          {userctx === "alan" ? (
            <>
              <Link to="/addContact">
                <AddContactBtnStyle>Add Contact</AddContactBtnStyle>
              </Link>
              <TableStyle>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>No.</th>
                      <th style={{ textAlign: "center" }}>Name</th>
                      <th style={{ textAlign: "center" }}>Email</th>
                      <th style={{ textAlign: "center" }}>Contact</th>
                      <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.contact}</td>
                          <td>
                            <Link to={`/update/${item.id}`}>
                              <img
                                className="crud-icons"
                                src={iconEdit}
                                alt={iconEdit}
                              />
                            </Link>
                            {/* <button className="btn btn-delete" onClick={()=> deleteContact(item.id)}>Delete</button> */}
                            <span className="delete-icon-span">
                              <img
                                className="crud-icons"
                                onClick={
                                  () => handleDelete(item.id)
                                  // <img className="crud-icons" onClick={()=> deleteContact(item.id)
                                }
                                src={iconDelete}
                                alt={iconDelete}
                              />
                            </span>
                            <Link to={`/view/${item.id}`}>
                              <img
                                className="crud-icons"
                                src={iconView}
                                alt={iconView}
                              />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </TableStyle>
            </>
          ) : userctx === null ? (
            <>
              <PanelStyle>
                <div className="welcome">
                  Admin Panel is only avaliable for Logged in Users
                </div>
                <div className="welcome-next">Sign up first and login</div>
                <Link to="/signup">
                  <GetStartedBtnStyle>
                    Get started{" "}
                    <span style={{ paddingLeft: "10px" }}> &#10095;</span>
                  </GetStartedBtnStyle>
                </Link>
              </PanelStyle>
            </>
          ) : (
            <>
              <PanelStyle>
                <h1 className="welcome">
                  {`Sorry ${
                    userctx.charAt(0).toUpperCase() + userctx.slice(1)
                  }.`}
                  <br /> You have no acces to the panel
                </h1>
                <h2 className="welcome-next">
                  <img src={exclamation} alt={exclamation} />
                  This is demonstration site and only one special user has access
                  to panel <br />
                  Please use the following details to login as super Admin:
                </h2>
                <div className="super-admin">
                  <span>email: </span> alan@gmail.com
                  <br />
                  <span>login: </span> Qwerty1!
                </div>
              </PanelStyle>
            </>
          )}
        </SectionPanelStyle>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Panel;

