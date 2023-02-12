import blends from '../../../images/Home/Blend.png'



function Ourblends() {
  return (
    <>
      <div className="blend-container">
        <div className="item">
          <h2>Our Blends</h2>
          <p>
            We make our very own Tiny Leaf blends right here in the tea house,
            offering new flavours according to the season. We source all our
            produce sustainably and make sure the hands that laboured for our
            flavoursome cups were rewarded fairly.
          </p>
        </div>

        <div className="item">
          <img className="blend-img" src={blends} alt="Our blends" />
        </div>
      </div>

      <div>
        <div className='line'></div>
        <h4 className="hand-picked-txt">Hand-picked and sustainable</h4>
      </div>
    </>
  );
}

export default Ourblends;