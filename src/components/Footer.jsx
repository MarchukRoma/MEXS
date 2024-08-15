function Footer() {
  const ATMName = "cajeros ";
  const informationName = "información";
  const scheduleName = "horario";
  return (
    <footer>
      <div className="footer_element">
        <em>{ATMName}</em>
        <img
          className="footer_img"
          src="./img/geolocation.png"
          alt="Geolocation_png"
        />
      </div>
      <div className="footer_element">
        <em>{informationName}</em>
        <img className="footer_img" src="./img/info.png" alt="info.png" />
      </div>
      <div className="footer_element">
        <em>{scheduleName}</em>
        <img
          className="footer_img"
          src="./img/schedule.png"
          alt="schedule_png"
        />
      </div>
    </footer>
  );
}

export default Footer;
