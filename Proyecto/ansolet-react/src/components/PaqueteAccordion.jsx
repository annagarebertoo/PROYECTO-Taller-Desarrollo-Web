// src/components/PaqueteAccordion.jsx
import { useState, useEffect, useRef } from "react";

export default function PaqueteAccordion({
  id,
  title,
  defaultOpen = false,
  lockedOpen = false,     // ← si true, queda abierto y NO se puede cerrar
  children
}) {
  const [open, setOpen] = useState(defaultOpen || lockedOpen);
  const bodyRef = useRef(null);

  // si lockedOpen pasa a true, forzamos abierto
  useEffect(() => {
    if (lockedOpen) setOpen(true);
  }, [lockedOpen]);

  // seteo de altura (o abierto total si está bloqueado)
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    if (open) {
      if (lockedOpen) {
        el.style.maxHeight = "none";
        el.style.overflow = "visible";
      } else {
        el.style.maxHeight = el.scrollHeight + "px";
        el.style.overflow = "hidden";
      }
    } else {
      el.style.maxHeight = "0px";
      el.style.overflow = "hidden";
    }
  }, [open, lockedOpen, children]);

  // si está bloqueado, NO ponemos onClick
  const headerProps = lockedOpen
    ? { style: { cursor: "default" }, "aria-expanded": true }
    : { onClick: () => setOpen(v => !v), "aria-expanded": open };

  return (
    <article className={`acc ${open ? 'is-open' : ''}`} id={id}>
      <header className="acc__head" {...headerProps}>
        <span>{title}</span>
        {/* oculto la flecha cuando está bloqueado */}
        {!lockedOpen && <span className="arrow">⌄</span>}
      </header>

      <div ref={bodyRef} className="acc__body">
        {children}
      </div>
    </article>
  );
}
