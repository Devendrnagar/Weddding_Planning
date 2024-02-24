import React from "react";
import "./Box1.css";
export default function Box1() {
  return (
    <div className="container" id="box1">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="">
            <div className="card-body">
              <h1 className="card-title" id="text">
                Getting you from engaged to  <span>married</span>
              </h1>
             
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="">
            <div className="card-body">
              <h2 className="card-title">
                Plan - Book - Pay for your entire wedding through Happly.
              </h2>
              <br />
              <h4 className="card-text">
              Connecting world class wedding suppliers with Happly couples across India
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
