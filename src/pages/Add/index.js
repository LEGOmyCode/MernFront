import React from "react";
import { Link } from "react-router-dom";

function AddLocation() {
  return (
    <div className="addLocation">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link
              to="../Favorites"
              className="btn btn-outline-warning float-left"
            >
              Favorites
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Location</h1>
            <p className="lead text-center">Create new Location</p>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Country Name"
                  name="countryName"
                  className="form-control"
                  value={this.state.countryName}
                  onChange={this.onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="City Name"
                  name="cityName"
                  className="form-control"
                  value={this.state.cityName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Photo"
                  name="photo"
                  className="form-control"
                  value={this.state.photo}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="User"
                  name="user"
                  className="form-control"
                  value={this.state.user}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="date"
                  placeholder="Date Visited"
                  name="visitDate"
                  className="form-control"
                  value={this.state.VisitDate}
                  onChange={this.onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
