const Logout = () => {
  const handleLogout = () => {
    console.log("Logout");
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
