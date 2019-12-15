import React, { Fragment, useEffect, useState } from "react";
import Nav from "../../components/layouts/nav";
import { fetchUsers } from "../../utils/api/auth";
import CheckAuth from "../../hoc/check-auth";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const FetchData = async () => {
    fetchUsers()
      .then(res => {
        setResponse(res.data);
      })
      .catch(e => {
        setError(e.response.message);
      });
  };
  useEffect(() => {
    FetchData();
  }, []);
  return { response, error };
};

const Home = () => {
  const res = useFetch();

  if (!res.response) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Nav />
      <div className="container">
        <br />
        <div className="row">
          {res.response.data.map(
            ({ first_name, last_name, email, avatar }, key) => {
              return (
                <div className="col-md-4" key={key}>
                  <div className="card mb-3">
                    <h3 className="card-header">{`${first_name} ${last_name}`}</h3>
                    <div className="card-body">
                      <h6 className="card-subtitle text-muted">{email}</h6>
                    </div>
                    <img
                      style={{ height: 200, width: "100%", display: "block" }}
                      src={avatar}
                      alt={`${first_name} ${last_name}`}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        First Name: {first_name}
                      </li>
                      <li className="list-group-item">
                        Last Name: {last_name}
                      </li>
                      <li className="list-group-item">Email: {email}</li>
                    </ul>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CheckAuth(Home);
