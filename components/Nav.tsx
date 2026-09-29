const links = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        PD<span>.</span>
      </div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`}>{l}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav-cta">
        Say hello →
      </a>
    </nav>
  );
}
