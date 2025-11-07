// src/components/AdminDropdown.jsx
import { useState, useRef, useEffect } from "react";

export default function AdminDropdown({ onOpenAddFlight, onOpenAddDestination }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  // cerrar al click afuera
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current || !btnRef.current) return;
      if (menuRef.current.contains(e.target) || btnRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div className="nav-dropdown">
      <button
        ref={btnRef}
        className="nav-drop__btn"
        aria-haspopup="true"
        aria-expanded={open ? "true" : "false"}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        Agregar productos ▾
      </button>

      <div
        ref={menuRef}
        className={`nav-drop__menu ${open ? "is-open" : ""}`}
        aria-hidden={open ? "false" : "true"}
        role="menu"
      >
        <a href="#" role="menuitem" onClick={(e) => { e.preventDefault(); setOpen(false); onOpenAddFlight?.(); }}>
          Añadir vuelo
        </a>
        <a href="#" role="menuitem" onClick={(e) => { e.preventDefault(); setOpen(false); onOpenAddDestination?.(); }}>
          Añadir destino
        </a>
      </div>
    </div>
  );
}
