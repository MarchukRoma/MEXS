function OwnerInfo() {
  const ownerName = "Owner Name";
  return (
    <div style={{ marginBottom: "10px" }}>
      <img id="ownerImg" src="owner.png" alt="ownerImg" />
      <p id="ownerName">
        {ownerName}
        <img id="tick" src="tick.png" alt="tick" />
      </p>

      {/* <img src="./img/golden_tick.png" alt="Logo" /> */}
    </div>
  );
}
export default OwnerInfo;
