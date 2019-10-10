import React, { Component } from "react";
import "./Twit.css";
import { connect } from "react-redux";
import { DelTwit, ReTwit, GetIDTwit } from "../store/actions";
import Imagem from "./../imgs/cybe.png";

class Twit extends Component {
  render() {
    const { twit } = this.props;
    const { deleteTwit, ReTwit, GetIDTwit } = this.props;
    console.log(this.props.twit + "agasd");

    return (
      <div className="Twit">
        <div className="Twit-img">
          <img
            src={this.props.twit.imag.Imagem}
            className="Twit-imagem"
            alt="Imagem"
          />
        </div>
        <div className="Twit-text">
          <p>
            {" "}
            ID: {twit.id} - {twit.user}
          </p>
          <p> {twit.texto}</p>
        </div>
        <div className="Twit-comands">
          <button>DesLike</button>
          <button
            onClick={() =>
              ReTwit({
                id: GetIDTwit(twit),
                imag: { Imagem },
                user: "Pedro",
                texto:
                  "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
              })
            }
          >
            Re-Twit
          </button>
          <button>Like</button>
          <button onClick={() => deleteTwit(twit)}>Delete</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTwit: twit => dispatch(DelTwit(twit)),
  ReTwit: twit => dispatch(ReTwit(twit)),
  GetIDTwit: twits => dispatch(GetIDTwit(twits))
});

const mapStateToProps = state => ({
  twits: state.twits
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twit);
