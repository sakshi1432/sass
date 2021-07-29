import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./l.scss";
import Button from "@material-ui/core/Button";
const Content = () => {
  return (
    <>
      <div className="con">
        <div className="one">
          <div className="card">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnG8wnULdfg_92sGKPcz1VEMMM_5pmdfyM8A&usqp=CAU"
              alt="Card image cap"
            />
            <div className="mid">
              <img
                className="o"
                src="https://images.hindustantimes.com/img/2021/07/19/550x309/Kriti_Kharbanda_1626686456599_1626686479833.jpg"
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                <Button className="bt" variant="contained" color="primary" disableElevation>
                  Disable elevation
                </Button>
                &nbsp;
                <Button className="bt"  variant="contained" color="secondary" disableElevation>
                  Go Somewhewre
                </Button>
                <div className="f">
                  <div>
                    <h6>Match3</h6>
                  </div>
                  <div>
                    <h6>Catch3</h6>
                  </div>
                  <div>
                    <h6>atch3</h6>
                  </div>
                </div>
                <div className="h">
                  <span>
                    Hellow Everyoune how are yiou<br></br>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.<br></br> Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    <br></br>when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="u">
            <img
              className="p"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="ut">
            <h4>hellow</h4>
            <span>
              Why do we use it? It is a long established fact that a reader will
              
            </span>
          </div>
          <div className="u">
            <img
              className="p"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="ut">
            <h4>hellow</h4>
            <span>
              Where can I get some? There are many variations of passages of
              
            </span>
          </div>
          <div className="u">
            <img
              className="p"
              src="https://i.dlpng.com/static/png/5525360-facebook-scalable-vector-graphics-icon-facebook-logo-png-png-facebook-icon-transparent-background-900_520_preview.png"
            />
          </div>
          <div className="ut">
            <h4>hellow</h4>
            <span>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            </span>
          </div>
          <div className="u">
            <img
              className="p"
              src="https://i.pinimg.com/474x/71/56/1b/71561ba76f2b1925ccd5530761ee6e50.jpg"
            />
          </div>
          <div className="ut">
            <h4>Where does it </h4>
            <span>
              {" "}
              "There is no one who loves pain itself, who seeks exact original
              
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;



