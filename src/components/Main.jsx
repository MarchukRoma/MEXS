import { useState } from "react";

function Main() {
  const nameForInput = "Importe";
  const nameForCurrency = "Pessos Mexicanos";
  const nameAccountNumber = "número de cuenta";
  const withdrawalName = "Retirada de fondos";

  // Використовуйте хук useState для керування станом введеного тексту
  const [inputAmount, setInputAmount] = useState("");
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [showForm, setShowForm] = useState(false);
  //const [message, setMessage] = useState("Це ваше повідомлення!");
  const message = "Ну ти тестер прям ну жосткий";
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const handleOkClick = () => {
    setShowForm(false);
    // setMessage("");
  };

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
    textAlign: "center",
    width: "300px",
  };

  const closeButtonStyle = {
    color: "blue",
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  };

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
  };

  const okButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
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
        {withdrawalName}
      </button>

      {showForm && (
        <div style={overlayStyle}>
          <div style={formStyle}>
            <div style={closeButtonStyle} onClick={handleCloseClick}>
              &times;
            </div>
            <div style={contentStyle}>
              <span style={iconStyle}>⚠️</span>
              <span style={textStyle}>{message}</span> {/* Додаємо стиль */}
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
