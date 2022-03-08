import { useHistory } from "react-router-dom";

export const EmailVerificationSuccess = () => {
  const history = useHistory();

  return (
    <div className="content-container">
      <h1>Success!</h1>
      <p>
        Thank you for verifying your email!
      </p>
      <button onClick={()=>history.push("/")}>Go to Home Page</button>
    </div>
  );
};
