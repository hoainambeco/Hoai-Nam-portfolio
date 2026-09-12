/**
 * A line-numbered code block. `lines` is an array of nodes — one per rendered
 * line; an empty string renders a blank line.
 */
export default function Code({ lines, start = 1 }) {
  return (
    <div className="code">
      {lines.map((line, i) => (
        <div className="code__line" key={i}>
          <span className="code__ln" aria-hidden="true">
            {start + i}
          </span>
          <span className="code__content">{line === '' ? ' ' : line}</span>
        </div>
      ))}
    </div>
  );
}

export const Punct = ({ children }) => <span className="t-punct">{children}</span>;
export const Key = ({ children }) => <span className="t-key">{children}</span>;
export const Str = ({ children }) => <span className="t-str">&quot;{children}&quot;</span>;
export const Fn = ({ children }) => <span className="t-fn">{children}</span>;
export const Num = ({ children }) => <span className="t-num">{children}</span>;
export const Type = ({ children }) => <span className="t-type">{children}</span>;
export const Com = ({ children }) => <span className="t-com">{children}</span>;
export const Prop = ({ children }) => <span className="t-var">{children}</span>;
