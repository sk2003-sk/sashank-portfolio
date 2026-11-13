function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-head${align === "center" ? " is-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
