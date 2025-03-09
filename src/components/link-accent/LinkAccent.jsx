import "./link-accent.css";

export default function LinkAccent({ label, url }) {
  return (
    <a href={url} className="link-accent">
      {label}
    </a>
  );
}
