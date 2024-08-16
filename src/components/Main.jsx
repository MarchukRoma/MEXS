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

  // Обробник змін введеного тексту
  //   const handleInputChange = (event) => {
  //     setCurrensyAmount(event.target.value);
  //   };
  const inputStyle = {
    width: "20vh",
    height: "20px",
    fontSize: "12px",
  };

  return (
    <div>
      <p>{nameForInput}</p>
      <input
        style={inputStyle}
        type="text"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />

      <p>{nameForCurrency}</p>
      <input
        style={inputStyle}
        type="text"
        value={currencyAmount}
        onChange={(e) => setCurrencyAmount(e.target.value)}
      />

      <p>{nameAccountNumber}</p>
      <input
        style={inputStyle}
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <br />
      <button id="submit_Btn">{withdrawalName}</button>
    </div>
  );
}
export default Main;
