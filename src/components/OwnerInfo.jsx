function OwnerInfo({ ownerName }) {
  return (
    <>
      <img id="ownerImg" src="owner.png" alt="ownerImg" />

      <h1 id="ownerName">
        <h1 style={{ color: "black" }}>{ownerName}</h1>
        <img id="tick" src="tick.png" alt="tick" />
      </h1>
    </>
  );
}
export default OwnerInfo;
