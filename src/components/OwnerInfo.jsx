function OwnerInfo() {
  const ownerName = "Тарас Тарасович";
  return (
    <>
      <img id="ownerImg" src="owner.png" alt="ownerImg" />

      <h1 id="ownerName">
        {ownerName}
        <img id="tick" src="tick.png" alt="tick" />
      </h1>

      {/* <img src="./img/golden_tick.png" alt="Logo" /> */}
    </>
  );
}
export default OwnerInfo;
