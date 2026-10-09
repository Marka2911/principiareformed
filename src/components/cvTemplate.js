import { useId, useState } from "react";
import "./cvTemplate.css";

function Portrait({ member }) {
  return member.image ? (
    <img className="cv-portrait" src={member.image} alt={member.name} />
  ) : (
    <span className="cv-portrait cv-portrait-placeholder" aria-hidden="true" />
  );
}

function TimelineSection({ title, entries = [] }) {
  if (!entries.length) return null;
  return (
    <section className="cv-timeline-section">
      <h3>{title}</h3>
      <ul className="cv-timeline">
        {entries.map((entry, index) => (
          <li key={`${entry.title}-${index}`}>
            <strong>{entry.title}</strong>
            <span>{[entry.period, entry.location].filter(Boolean).join(" — ")}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function CvTemplate({ members = [] }) {
  const [selectedId, setSelectedId] = useState(null);
  const profileId = useId();
  const member = members.find((item) => item.id === selectedId) || members[0];
  if (!member) return null;

  return (
    <section className="cv-template" aria-label="Equip i perfils professionals">
      <div className="cv-layout">
        <div className="cv-team">
          <h2>Equip</h2>
          <p>Posicions clau dins l'equip impulsor amb rols, responsabilitats i accés al perfil complet.</p>
          <div className="cv-team-tree">
            {members.map((item, index) => (
              <article className={`cv-member-card cv-member-position-${index} ${member.id === item.id ? "cv-member-selected" : ""}`} key={item.id}>
                <div className="cv-person-heading">
                  <Portrait member={item} />
                  <div><h3>{item.name}</h3><p>{item.role}</p></div>
                </div>
                <p>{item.summary}</p>
                <button type="button" aria-pressed={member.id === item.id} aria-controls={profileId} onClick={() => setSelectedId(item.id)}>
                  Saber més…<span className="cv-sr-only"> sobre {item.name}</span>
                </button>
              </article>
            ))}
          </div>
          <p className="cv-team-note">La jerarquia indica responsabilitats principals i l'espai de coordinació entre equips tècnics, de disseny i de polítiques.</p>
        </div>

        <aside className="cv-profile" aria-label={`Currículum de ${member.name}`}>
          <div className="cv-person-heading">
            <Portrait member={member} />
            <div><h2>{member.name}</h2><p>{member.role}</p></div>
          </div>
          <TimelineSection title="1. Experiència laboral" entries={member.experience} />
          <TimelineSection title="2. Estudis" entries={member.education} />
          {!member.experience?.length && !member.education?.length && <p>El currículum complet encara no està disponible.</p>}
          <div className="cv-actions">
            <a className="cv-outline-button" href={`#${profileId}`}>Veure trajectòria completa</a>
            {member.cvUrl && <a className="cv-download-button" href={member.cvUrl} download>Descarregar CV</a>}
          </div>
        </aside>

        <div className="cv-details" id={profileId} aria-label={`Perfil complet de ${member.name}`}>
          <section className="cv-detail-section">
            <h2>Descripció</h2>
            {(member.description?.length ? member.description : [member.summary]).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>
          {!!member.publications?.length && <section className="cv-detail-section">
            <h2>Publicacions</h2>
            <ul className="cv-publications">{member.publications.map((publication, index) => <li key={index}>
              <span aria-hidden="true">♧ </span>{publication.url ? <a href={publication.url}>{publication.title}</a> : publication.title}
            </li>)}</ul>
          </section>}
          {!!member.languages?.length && <section className="cv-detail-section">
            <h2>Idiomes</h2>
            <dl className="cv-languages">{member.languages.map((language) => <div key={language.name}><dt>{language.name}</dt><dd>{language.level}</dd></div>)}</dl>
          </section>}
          {!!member.skills?.length && <section className="cv-detail-section">
            <h2>Capacitats</h2>
            <div className="cv-skills">{member.skills.map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
          </section>}
        </div>
      </div>
    </section>
  );
}
