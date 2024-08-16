function Footer() {
  // const ATMName = "Cajeros automáticos";
  const informationName = "Іnformación";
  const scheduleName = "horario";
  return (
    <footer>
      <div className="footer_element">
        <img
          className="footer_img"
          src="geolocation.png"
          alt="Geolocation_png"
        />
        <p>
          Cajeros
          <br /> automáticos
        </p>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="info.png" alt="info.png" />
        <p>{informationName}</p>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="schedule.png" alt="schedule_png" />
        <p>{scheduleName}</p>
      </div>
    </footer>
  );
}

export default Footer;
