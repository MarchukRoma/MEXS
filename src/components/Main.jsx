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

  return (
    <div>
      <p>{nameForInput}</p>
      <input
        type="text"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      />

      <p>{nameForCurrency}</p>
      <input
        type="text"
        value={currencyAmount}
        onChange={(e) => setCurrencyAmount(e.target.value)}
      />

      <p>{nameAccountNumber}</p>
      <input
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <button className="submit_Btn">{withdrawalName}</button>
    </div>
  );
}
export default Main;
