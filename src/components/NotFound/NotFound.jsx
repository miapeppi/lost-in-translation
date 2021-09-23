import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h3>You are lost in translation</h3>
      <p>The page was not found :(</p>
      <Link to="/">Go back to the login page</Link>
    </div>
  );
};

export default NotFound;
