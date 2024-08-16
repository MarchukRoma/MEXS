// function Header() {
//   const style = {
//     marginTop: "5vh", // Правильний формат значення
//   };
//   const companyName = "MEXCGlobal";
//   return (
//     <div style={style}>
//       <img src="./img/company.png" alt="company_icon" />
//       <em>{companyName}</em>
//     </div>
//   );
// }

function Header() {
  return <img id="headerImg" src="fullHeader.png" alt="header" />;
}

export default Header;
