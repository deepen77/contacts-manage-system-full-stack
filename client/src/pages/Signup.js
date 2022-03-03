import React, { useState, useContext } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { UserContext } from "../UserContext";

// design
import { FormHelperText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

// functions
import { register } from "../api/user";
import {
  SectionInputLabel,
  SectionInputLabelCheckbox,
  SectionInputStyle,
  SectionStyle,
  SectionTitleStyle,
} from "../style-components/SectionStyle";
import { SubmitBtnStyle } from "../style-components/Buttons";

const Signup = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  // form states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // password validation
  let hasSixChar = password.length >= 6;
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ username, email, password });
      if (res.error) toast.error(res.error);
      else {
        toast.success(res.message);
        // redirect the user to login
        history.replace("/login");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return !user ? (
    <SectionStyle>
      <SectionTitleStyle>SignUp</SectionTitleStyle>
      <SectionInputLabel>
        <SectionInputStyle
          placeholder="Username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></SectionInputStyle>
      </SectionInputLabel>

      <SectionInputLabel>
        <SectionInputStyle
          placeholder="Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></SectionInputStyle>
      </SectionInputLabel>

      <SectionInputLabel>
        <SectionInputStyle
          placeholder="Password"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></SectionInputStyle>
      </SectionInputLabel>

      <SectionInputLabelCheckbox>
        <label className="control control-checkbox">
          Show Password
          <input
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
          <div className="control_indicator"></div>
        </label>
      </SectionInputLabelCheckbox>

      <div className="form-group">
        {password && (
          <div className="ml-1" style={{ columns: 2 }}>
            <div>
              {hasSixChar ? (
                <span className="text-success">
                  <CheckCircleIcon className="mr-1" fontSize="small" />
                  <small>at least 6 characters</small>
                </span>
              ) : (
                <span className="text-danger">
                  <CancelIcon className="mr-1" fontSize="small" />
                  <small>at least 6 characters</small>
                </span>
              )}
            </div>
            <div>
              {hasLowerChar ? (
                <span className="text-success">
                  <CheckCircleIcon className="mr-1" fontSize="small" />
                  <small>one lowercase</small>
                </span>
              ) : (
                <span className="text-danger">
                  <CancelIcon className="mr-1" fontSize="small" />
                  <small>one lowercase</small>
                </span>
              )}
            </div>
            <div>
              {hasUpperChar ? (
                <span className="text-success">
                  <CheckCircleIcon className="mr-1" fontSize="small" />
                  <small>one uppercase</small>
                </span>
              ) : (
                <span className="text-danger">
                  <CancelIcon className="mr-1" fontSize="small" />
                  <small>one uppercase</small>
                </span>
              )}
            </div>
            <div>
              {hasNumber ? (
                <span className="text-success">
                  <CheckCircleIcon className="mr-1" fontSize="small" />
                  <small>one number</small>
                </span>
              ) : (
                <span className="text-danger">
                  <CancelIcon className="mr-1" fontSize="small" />
                  <small>one number</small>
                </span>
              )}
            </div>
            <div>
              {hasSpecialChar ? (
                <span className="text-success">
                  <CheckCircleIcon className="mr-1" fontSize="small" />
                  <small>one special symbol</small>
                </span>
              ) : (
                <span className="text-danger">
                  <CancelIcon className="mr-1" fontSize="small" />
                  <small>one special symbol</small>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <SectionInputLabel>
        <SectionInputStyle
          placeholder="Confirm password"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </SectionInputLabel>

      <div className="form-group">
        {password && confirmPassword && (
          <FormHelperText className="ml-1 mt-1">
            {password === confirmPassword ? (
              <span className="text-success">Password does match</span>
            ) : (
              <span className="text-danger">Password does not match</span>
            )}
          </FormHelperText>
        )}
      </div>
      <div className="already-login">Already have an account? <Link to="/login" className="login-action"> Log in</Link></div>

      <SubmitBtnStyle
        disabled={
          !username ||
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword ||
          !hasSixChar ||
          !hasLowerChar ||
          !hasUpperChar ||
          !hasNumber ||
          !hasSpecialChar
        }
        onClick={handleRegister}
      >
        Submit
      </SubmitBtnStyle>
    </SectionStyle>
  ) : (
    <Redirect to="/" />
  );
};

export default Signup;
