// src/components/PaqueteOption.jsx
export default function PaqueteOption({ item, group, onAdd, onRemove, fmt }) {
  return (
    <div className="pill">
      <div>
        <div className="line1">
          {item.name}
          {item.dst && <span className="badge-dst">{item.dst}</span>}
          {item.stars && <> • {'★'.repeat(item.stars)}</>}
        </div>
        <a href="#" className="sub" onClick={(e)=>e.preventDefault()}>Más información</a>
      </div>

      <div className="actions">
        {group === 'hotel' ? (
          <>
            <button className="btn-ok" onClick={() => onAdd(group, item)}>✓</button>
            <button className="btn-x" onClick={() => onRemove(group, item)}>×</button>
          </>
        ) : (
          <>
            <button className="btn-add" onClick={() => onAdd(group, item)}>✓</button>
            <button className="btn-remove" onClick={() => onRemove(group, item)}>×</button>
          </>
        )}
      </div>

      <div className="price">{fmt(item.price)}</div>
    </div>
  );
}
