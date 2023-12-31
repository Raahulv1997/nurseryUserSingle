import React from "react";
import { Link } from "react-router-dom";

const profile = () => {
  return (
    <div>
      {" "}
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          <h2>my profile</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="index.html">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              profile
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section profile-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your Profile</h4>
                  <button data-bs-toggle="modal" data-bs-target="#profile-edit">
                    edit profile
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="profile-image">
                        <Link to="#">
                          <img src="images/user.png" alt="user" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label className="form-label">name</label>
                        <input
                          className="form-control"
                          type="text"
                          value="Miron Mahmud"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          value="mironcoder@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="profile-btn">
                        <Link to="change-password.html">change pass.</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4>
                  <button data-bs-toggle="modal" data-bs-target="#contact-add">
                    add contact
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>primary</h6>
                        <p>+8801838288389</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801941101915</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801747875727</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>delivery address</h4>
                  <button data-bs-toggle="modal" data-bs-target="#address-add">
                    add address
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>Home</h6>
                        <p>
                          jalkuri, fatullah, narayanganj-1420. word no-09, road
                          no-17/A
                        </p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Office</h6>
                        <p>
                          east tejturi bazar, dhaka-1200. word no-04, road
                          no-13/c, house no-4/b
                        </p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Bussiness</h6>
                        <p>
                          kawran bazar, dhaka-1100. word no-02, road no-13/d,
                          house no-7/m
                        </p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card mb-0">
                <div className="account-title">
                  <h4>payment option</h4>
                  <button data-bs-toggle="modal" data-bs-target="#payment-add">
                    add card
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment active">
                        <img src="images/payment/png/01.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment">
                        <img src="images/payment/png/02.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment">
                        <img src="images/payment/png/03.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="contact-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new contact</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select" value={"primary"}>
                  <option>choose title</option>
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>
              <button className="form-btn" type="submit">
                save contact info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new address</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option>choose title</option>
                  <option value="home">home</option>
                  <option value="office">office</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="academy">academy</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your address"
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                save address info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="payment-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new payment</h3>
              </div>
              <div className="form-group">
                <label className="form-label">card number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your card number"
                />
              </div>
              <button className="form-btn" type="submit">
                save card info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="profile-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit profile info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">profile image</label>
                <input className="form-control" type="file" />
              </div>
              <div className="form-group">
                <label className="form-label">name</label>
                <input
                  className="form-control"
                  type="text"
                  value="Miron Mahmud"
                />
              </div>
              <div className="form-group">
                <label className="form-label">email</label>
                <input
                  className="form-control"
                  type="text"
                  value="mironcoder@gmail.com"
                />
              </div>
              <button className="form-btn" type="submit">
                save profile info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="contact-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit contact info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">number</label>
                <input
                  className="form-control"
                  type="text"
                  value="+8801838288389"
                />
              </div>
              <button className="form-btn" type="submit">
                save contact info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit address info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option value="home">home</option>
                  <option value="office">office</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="academy">academy</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea
                  className="form-control"
                  placeholder="jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A"
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                save address info
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
