function Menu() {
  const arrayMenu = [
    "Trang chu",
    "Gioi thieu",
    "Lien he",
    "Dich vu",
    "San pham",
    "Tin tuc",
    "Dang nhap",
    "Dang ky",
  ];

  return (
    <>
      <ul>
        {arrayMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
