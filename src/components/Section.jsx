/** A page section: title in the left rail, content in the wide column.
 *  `intro` shares the first row with the title so the sticky title scrolls
 *  only as far as that short intro, not across the whole section. */
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap section__grid">
        {intro ? (
          <div className="section__head">
            <h2 id={`${id}-title`} className="section__title">
              {title}
            </h2>
            {intro}
          </div>
        ) : (
          <h2 id={`${id}-title`} className="section__title">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
