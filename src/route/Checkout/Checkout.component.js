import { Component } from "react";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import "./Checkout.extension.style";

class Progress extends Component {
  render() {
    const { titles, length, currentIndex } = this.props;
    return (
      <div className="Line-Container">
        {titles.map((title, i) => {
          return (
            <>
              <span
                className={`Progress-Line${i <= currentIndex ? "-active" : ""}`}
              ></span>
              <div className="Progress-Circle-Container">
                <div className="Progress-Circle">{i + 1}</div>
                <span className="Progress-Location">{title}</span>
              </div>
            </>
          );
        })}
        <span
          className={`Progress-Line${length >= currentIndex ? "-active" : ""}`}
        ></span>
      </div>
    );
  }
}

export class Checkout extends SourceCheckout {
  render() {
    const valuesMap = Object.values(this.stepMap);

    const length = valuesMap.length - 1;

    const titles = valuesMap
      .map((value) => {
        return value.title;
      })
      .slice(0, length);

    const currentIndex = Object.keys(this.stepMap).findIndex(
      (currStep) => currStep === this.props.checkoutStep
    );

    return (
      <div className="Container">
        <div className="Progress-Bar-Container">
          <Progress
            length={length}
            titles={titles}
            currentIndex={currentIndex}
          />
        </div>
        <div>{super.render()}</div>
      </div>
    );
  }
}

export default Checkout;
