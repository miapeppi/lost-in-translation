import { useDispatch } from "react-redux";
import { sessionLogoutAction } from "../../store/actions/sessionActions";



const Logout = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(sessionLogoutAction())
  };

  return (
    <div>
      <button className="btn btn-lg" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Logout;
