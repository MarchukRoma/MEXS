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

  return (
    <>
      <div className="input-container">
        <input
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
          type="text"
          placeholder=" "
          id="input-field"
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <label htmlFor="input-field" className="input-label">
          {nameAccountNumber}
        </label>
      </div>

      <button id="submit_Btn">{withdrawalName}</button>
    </>
  );
}
export default Main;
