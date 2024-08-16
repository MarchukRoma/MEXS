function OwnerInfo() {
  const ownerName = "Тарас Тарасович";
  return (
    <div style={{ marginBottom: "10px" }}>
      <img id="ownerImg" src="owner.png" alt="ownerImg" />
      <p id="ownerName">
        <h1>
          {ownerName}
          <img id="tick" src="tick.png" alt="tick" />
        </h1>
      </p>

      {/* <img src="./img/golden_tick.png" alt="Logo" /> */}
    </div>
  );
}
export default OwnerInfo;
