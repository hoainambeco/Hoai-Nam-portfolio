/** A page section: title in the left rail, content in the wide column. */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap section__grid">
        <h2 id={`${id}-title`} className="section__title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
