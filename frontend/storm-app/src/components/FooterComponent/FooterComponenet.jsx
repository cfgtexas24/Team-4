import "./FooterComponent.css";

function FooterComponent() {
  return (
    <>
      <div className="footer">
        <div className="section">
          <h3>STORM</h3>
          <p>Providing guidance, growth, and community support.</p>
          <h6 className="button-redirect">Request Assistance</h6>
        </div>
        <div className="section">
          <h6 className="section-header">CONTACT</h6>
          <p>contact@stormcohs.org{"\n"}(469) 431-3582</p>
          <p></p>
        </div>
        <div className="section"></div>
        <div className="section"></div>
      </div>
    </>
  );
}

export default FooterComponent;
