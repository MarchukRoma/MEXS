import { useState } from "react";

function Main({
  nameForInput,
  nameForCurrency,
  nameAccountNumber,
  nameButton,
  clickMessage,
}) {
  // Використовуйте хук useState для керування станом введеного тексту
  const [inputAmount, setInputAmount] = useState("");
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  // const handleOkClick = () => {
  //   setShowForm(false);
  //   // setMessage("");
  // };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const formStyle = {
    position: "relative",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    // textAlign: "center",
    width: "300px",
  };

  // const closeButtonStyle = {
  //   color: "blue",
  //   position: "absolute",
  //   top: "10px",
  //   right: "10px",
  //   cursor: "pointer",
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };

  const closeButtonStyle = {
    color: "blue",
    backgroundColor: "lightblue", // Світло-синій колір фону
    position: "absolute",
    top: "7px",
    right: "7px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "50%", // Кругла форма
    width: "18px", // Ширина та висота для створення кола
    height: "18px",
    display: "flex", // Центрування хрестика всередині
    // alignItems: "center",
    justifyContent: "center",
    lineHeight: "1", // Для правильного відображення хрестика
  };

  // const closeButtonStyle = {
  //   color: "blue",
  //   backgroundColor: "lightblue", // Світло-синій колір фону
  //   position: "absolute",
  //   top: "10px",
  //   right: "10px",
  //   cursor: "pointer",
  //   // fontSize: "20px",
  //   fontWeight: "bold",
  //   borderRadius: "50%", // Кругла форма
  //   padding: "10px", // Відступи для створення кола
  //   display: "flex", // Для центрування тексту всередині
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const iconStyle = {
    fontSize: "24px",
    marginRight: "10px",
  };

  const textStyle = {
    color: "blue", // Синій колір для тексту
    fontSize: "10px",
  };

  return (
    <div>
      <div className="input-container">
        <input
          style={{ color: "black" }}
          value={inputAmount}
          type="text"
          placeholder=" "
          id="input-field"
          onChange={(e) => setInputAmount(e.target.value)}
        />
        <label htmlFor="input-field" className="input-label">
          {nameForInput}
        </label>
      </div>

      <div className="input-container">
        <input
          style={{ color: "black" }}
          value={currencyAmount}
          type="text"
          placeholder=" "
          id="input-field"
          onChange={(e) => setCurrencyAmount(e.target.value)}
        />
        <label htmlFor="input-field" className="input-label">
          {nameForCurrency}
        </label>
      </div>

      <div className="input-container">
        <input
          style={{ color: "black" }}
          value={accountNumber}
          type="text"
          placeholder=" "
          id="input-field"
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <label htmlFor="input-field" className="input-label">
          {nameAccountNumber}
        </label>
      </div>

      <button id="submit_Btn" onClick={handleButtonClick}>
        {nameButton}
      </button>

      {showForm && (
        <div style={overlayStyle}>
          <div style={formStyle}>
            <div style={closeButtonStyle} onClick={handleCloseClick}>
              &times;
            </div>
            <div style={contentStyle}>
              <span>
                <img
                  style={iconStyle}
                  src="attention.png"
                  alt="attention"
                  width={25}
                  height={25}
                />
              </span>
              <span style={textStyle}>{clickMessage}</span>{" "}
              {/* Додаємо стиль */}
            </div>
            {/* <button onClick={handleOkClick} style={okButtonStyle}>
              OK
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Main;
