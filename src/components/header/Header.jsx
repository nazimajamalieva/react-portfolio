import "./header.css";

const menuItems = [
  {
    linkText: "Home",
    url: "#",
  },
  {
    linkText: "Works",
    url: "#",
  },
  {
    linkText: "Blog",
    url: "#",
  },
  {
    linkText: "Contacts",
    url: "#",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          {menuItems.map((item) => {
            return <a href={item.url}>{item.linkText}</a>;
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
