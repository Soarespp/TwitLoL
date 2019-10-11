import React, { Component } from "react";
import "./Twit.css";
import { connect } from "react-redux";
import { DelTwit, ReTwit, LikeTwit, DeLikeTwit } from "../store/actions";
import Imagem from "./../imgs/cybe.png";

class Twit extends Component {
  render() {
    const { twit, maiorId } = this.props;
    const { deleteTwit, ReTwit, LikeTwit, DeLikeTwit } = this.props;
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
            ID: {twit.id} - {twit.user}
          </p>
          <p> {twit.texto}</p>
          <p>
            Like: {twit.like} || DesLike: {twit.deslike}
          </p>
        </div>
        <div className="Twit-comands">
          <button
            onClick={() => {
              LikeTwit(twit.id);
            }}
          >
            Like
          </button>
          <button
            onClick={() => {
              DeLikeTwit(twit.id);
            }}
          >
            DesLike
          </button>
          <button
            onClick={() =>
              ReTwit({
                id: maiorId,
                imag: { Imagem },
                user: "Pedro",
                texto:
                  "Facilisis pulvinar tempor nunc taciti netus placerat senectus ma"
              })
            }
          >
            Re-Twit
          </button>
          <button onClick={() => deleteTwit(twit)}>Delete</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTwit: twit => dispatch(DelTwit(twit)),
  ReTwit: twit => dispatch(ReTwit(twit)),
  LikeTwit: twit => dispatch(LikeTwit(twit)),
  DeLikeTwit: twit => dispatch(DeLikeTwit(twit))
});

const mapStateToProps = state => ({
  twits: state.twits,
  maiorId: state.maiorId
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twit);
