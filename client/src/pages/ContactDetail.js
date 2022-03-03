import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from "../UserContext";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import { SectionStyle } from '../style-components/SectionStyle';
import { GoBackBtnStyle } from '../style-components/Buttons';
import { ContactDetailStyle } from '../style-components/ContactDetailStyle';
import Loader from '../components/loader/Loader';

const View = () => {

const { userctx } = useContext(UserContext);
const [ loading, setLoading] = useState(true)


    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        axios
          .get(`https://cms-contacts-mysql.herokuapp.com/api/get/${id}`)
          .then((resp) => setUser({ ...resp.data[0] }))
          .then(()=> setLoading(false))

    },[id]);

    return (
      <>
        {!loading ? (
          <SectionStyle>
            <ContactDetailStyle>
              {userctx === "alan" ? (
                <>
                  <div className="card">
                    <div className="card-header">
                      <p>User Contact Details</p>
                    </div>
                    <div className="container">
                      <strong>ID:</strong>
                      <span>{id}</span>
                      <br />
                      <br />
                      <strong>Name:</strong>
                      <span>{user.name}</span>
                      <br />
                      <br />
                      <strong>Email:</strong>
                      <span>{user.email}</span>
                      <br />
                      <br />
                      <strong>Contact:</strong>
                      <span>{user.contact}</span>
                      <br />
                      <br />
                      <Link to="/panel">
                        <GoBackBtnStyle>Go Back</GoBackBtnStyle>
                      </Link>
                    </div>
                  </div>
                </>
              ) : userctx === null ? (
                "Yoy will see preview when loogged in"
              ) : (
                <p>{`CZesc ${userctx} ty nie masz dostepu`}</p>
              )}
            </ContactDetailStyle>
          </SectionStyle>
        ) : (
          <Loader />
        )}
      </>
    );
};

export default View;