function OwnerInfo() {
  const ownerName = "Owner Name";
  return (
    <>
      <img id="ownerImg" src="./img/owner.png" alt="ownerImg" />
      <p id="ownerName">
        {ownerName}
        <img id="tick" src="./img/tick.png" alt="tick" />
      </p>

      {/* <img src="./img/golden_tick.png" alt="Logo" /> */}
    </>
  );
}
export default OwnerInfo;
