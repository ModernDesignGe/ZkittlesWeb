import "./Section.css";
import bg from "../../../../images/back/Starter.png";

export default function Section() {
  return (
    <section className="Section">
      <div className="container SectionSplitter">
        <div className="textSide col-6">
          <p className="starterAction">BEST SELLER</p>
          <h1 className="starterName">BEST DISPENSARY TO BUY WEED ONLINE </h1>
          <h3 className="starterAddons">Vitamins & Supplements</h3>

          <div className="starterSale">
            Get 25% off <div className="starterLineV"></div> Free Shipping
          </div>
          <button className="starterButton">Shop All</button>
        </div>

        {/* <div className="imageSide col-6"></div> */}
        <img src={bg} className="starterImage" />
      </div>
    </section>
  );
}
