const education = [
  {
    degree: "PG-DAC (Post Graduate Diploma in Advanced Computing)",
    school: "Sunbeam Institute of IT",
    meta: "Pune, India · Sep 2022 - Mar 2023",
  },
  {
    degree: "B.Tech",
    school: "Dr. Babasaheb Ambedkar Technological University",
    meta: "Lonere, India · Oct 2017 - Oct 2021",
  },
];

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--surface)" }}>
      <div className="max-w">
        <div className="section-tag">Education</div>
        <h2 className="section-title">Where I studied</h2>
        <p className="section-sub">The foundation under the AI work.</p>
        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-card reveal" key={e.degree}>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-meta">{e.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
