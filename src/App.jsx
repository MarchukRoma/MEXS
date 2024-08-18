import Header from "./components/Header";
import OwnerInfo from "./components/OwnerInfo";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

const UILabels = [
  {
    country: "spanish",
    ownerLabel: "Sebastian Ruiz",
    importLabel: "Importe",
    currencyLabel: "Pessos mexicanos",
    accountNumberLabel: "Número de cuenta",
    buttonLabel: "Retirada de fondos",
    clickMessage:
      "Estimado cliente, para retirar fondos necesita pagar 250.000 ARS para activar la cuenta de retiro que espacifico. Una vez realizado el pago, el retiro a su cuenta espacificada estara disponible.",
    geoLabel: "Cajeros automáticos",
    infoLabel: "información",
    scheduleLabel: "Horario",
  },
];

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);

  return (
    <div className="app">
      <Header />
      <OwnerInfo ownerName={UILabels[0].ownerLabel} />
      <Main
        nameForInput={UILabels[0].importLabel}
        nameForCurrency={UILabels[0].currencyLabel}
        nameAccountNumber={UILabels[0].accountNumberLabel}
        nameButton={UILabels[0].buttonLabel}
        clickMessage={UILabels[0].clickMessage}
      />

      <Footer
        geoLabel={UILabels[0].geoLabel}
        infoLabel={UILabels[0].infoLabel}
        scheduleLabel={UILabels[0].scheduleLabel}
      />
    </div>
  );
}
export default App;
