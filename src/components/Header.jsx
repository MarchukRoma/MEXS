function handleClick(current, setCurrent) {
  if (current === 0) setCurrent(1);
  if (current === 1) setCurrent(2);
  if (current === 2) setCurrent(0);
}

function Header({ current, setCurrent }) {
  return (
    <div onClick={() => handleClick(current, setCurrent)}>
      <img id="headerImg" src="fullHeader.png" alt="header" />
    </div>
  );
}

export default Header;
