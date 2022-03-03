import React, {useState, useEffect} from 'react';
import {useHistory, useParams, Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import { SectionStyle, SectionTitleStyle } from '../style-components/SectionStyle';
import { FormStyle } from '../style-components/FormAddEditStyle';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";



function AddEdit() {
  const initialState = {
    name: "",
    email: "",
    contact: "",
  };

  const [state, setState] = useState(initialState);


  const { name, email, contact } = state;

const [validationContact, setValidationContact] = useState(true)

  let history = useHistory();

  const { id } = useParams();

 


  useEffect(() => {
    axios
      .get(`https://cms-contacts-mysql.herokuapp.com/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || validationContact === false ) {
      toast.error("Please provide value into each input field. Phone No must include maximum 12 digits");
    } else {
      if (!id) {
        axios
          .post(
            "https://cms-contacts-mysql.herokuapp.com/api/post",

            {
              name,
              email,
              contact,
            }
          )
          .then(() => {
            setState({
              name: "",
              email: "",
              contact: "",
            });
          })
          .then(() => {
            history.push("/panel");
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Added Succesfully");
      } else {
        axios
          .put(`https://cms-contacts-mysql.herokuapp.com/api/update/${id}`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({
              name: "",
              email: "",
              contact: "",
            });
          })
          .then(() => {
            history.push("/panel");
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Updated Succesfully");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "contact" && value.length > 13 ? setValidationContact(false) : setValidationContact(true)
    setState({ ...state, [name]: value });
  };

  return (
    <SectionStyle>
      <SectionTitleStyle>
        {id ? "Edit Contact" : "New Contact"}
      </SectionTitleStyle>
      <FormStyle>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name ..."
            value={name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email ..."
            value={email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            name="contact"
            placeholder="Phone No ..."
            value={contact || ""}
            onChange={handleInputChange}
          />
          <div>
            {validationContact ? (
              <span className="text-success">
                <CheckCircleIcon className="mr-1" fontSize="small" />
                <small>max 12 digits</small>
              </span>
            ) : (
              <span className="text-danger">
                <CancelIcon className="mr-1" fontSize="small" />
                <small>max 12 digits</small>
              </span>
            )}
          </div>
          <input type="submit" value={id ? "Update" : "Save"} />
          <Link to="/panel">
            <input type="button" value="Go Back" />
          </Link>
        </form>
      </FormStyle>
    </SectionStyle>
  );
}

export default AddEdit;