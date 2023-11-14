import Header from "../components/Header";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import logoUser from "../img/user.jpg";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header title="User Profile" />
      <br />
      <main className="row">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3 logoUser">
              <img
                src={logoUser}
                className="img-fluid rounded-start"
                alt="Logo Usuario"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="atributosUserName">&nbsp;&nbsp;User name:</div>
                <h4 className="card-title">{user.user_name}</h4>
                <div className="atributosUserName">&nbsp;&nbsp;ID:</div>
                <p className="card-text">{user.id}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    {/* Last updated 3 mins ago */}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
