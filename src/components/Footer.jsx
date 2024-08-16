function Footer() {
  const ATMName = "cajeros ";
  const informationName = "información";
  const scheduleName = "horario";
  return (
    <footer>
      <div className="footer_element">
        <img
          className="footer_img"
          src="./img/geolocation.png"
          alt="Geolocation_png"
        />
        <em>{ATMName}</em>
      </div>
      <div className="footer_element">
        <img className="footer_img" src="../img/info.png" alt="info.png" />
        <em>{informationName}</em>
      </div>
      <div className="footer_element">
        <img
          className="footer_img"
          src="./img/schedule.png"
          alt="schedule_png"
        />
        <em>{scheduleName}</em>
      </div>
    </footer>
  );
}

export default Footer;
