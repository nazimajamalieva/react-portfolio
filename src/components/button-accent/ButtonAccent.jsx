import "./button-accent.css";

export default function ButtonAccept({ label, url }) {
  return (
    <a className="btn-accept" href={url}>
      {label}
    </a>
  );
}
