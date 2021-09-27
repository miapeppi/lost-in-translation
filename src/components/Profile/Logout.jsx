import { useDispatch } from "react-redux";
import { sessionLogoutAction } from "../../store/actions/sessionActions";

const Logout = () => {
  // Get an instance of he dispatcher
  const dispatch = useDispatch();

  // Dispatch the sessionLogoutAction
  const handleLogout = () => {
    dispatch(sessionLogoutAction());
  };

  return (
    <button className="btn btn-lg float-end" onClick={handleLogout}>
      LOGOUT
    </button>
  );
};

export default Logout;
