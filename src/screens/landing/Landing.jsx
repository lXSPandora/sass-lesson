import * as React from 'react';
import './style.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="redLayer" />
        <div className="redBackgroundLayer" />
        <section id="header">
          <div className="logo">
            Supreme
          </div>
          <div className="menu">
            <div className="active">
              Home
            </div>
            <div>
              Lookbook
            </div>
            <div>
              Mens
            </div>
            <div>
              Womens
            </div>
            <div>
              Sales
            </div>
            <div>
              Stores
            </div>
          </div>
        </section>
        <img className="backgroundImage" src="https://i.imgur.com/Gjzr4ow.png"/>
        <div className="shopContainer">
          <div className="tag">Mens</div>
          <div className="boldTitle">Supreme/Schott® <br /> Hooded Jacket</div>
          <div className="description">
            Lightweight Jacket with tall, shaped collar and cotton linting for
            <br />
            cool wheather comfort. it features bellow chest pockets with
            <br />
            multiple concealed snaps for maximum functionality. Shaped
            <br />
            cuff edges and a tall throat guard protect from wind
          </div>
          <div className="rowSizeContainer">
            <p>Size:</p>
            <ul className="roundedButton">P</ul>
            <ul className="roundedButton">M</ul>
            <ul className="activeRoundedButton">G</ul>
          </div>
          <div className="squareButton"><p><strong>$195 - </strong> add to cart</p></div>
        </div>
      </div>
    )
  }
}
