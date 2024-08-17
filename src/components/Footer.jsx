function Footer({ geoLabel, infoLabel, scheduleLabel }) {
  // const ATMName = "Cajeros automáticos";

  return (
    <footer>
      <div className="footer_element">
        <img
          className="footer_img"
          src="geolocation.png"
          alt="Geolocation_png"
        />
        <p>{geoLabel}</p>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="info.png" alt="info.png" />
        <p>{infoLabel}</p>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="schedule.png" alt="schedule_png" />
        <p>{scheduleLabel}</p>
      </div>
    </footer>
  );
}

export default Footer;
