import "./leftHeader.css";

function LeftHeader({ title, desc, btn }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
        <button className="btn">{btn}</button>
      </div>
    </header>
  );
}

export default LeftHeader;
