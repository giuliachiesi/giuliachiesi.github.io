import { useEffect, useRef, useState } from 'react';

export default function Cursor({ motion = 'rich' }) {
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const [state, setState] = useState('default');
  const [label, setLabel] = useState('');
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || motion === 'none' || reduce) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }
    document.body.classList.add('has-custom-cursor');

    const onMove = (e) => { target.current.x = e.clientX; target.current.y = e.clientY; };
    window.addEventListener('mousemove', onMove);

    let raf;
    const follow = () => {
      const ease = motion === 'rich' ? 0.22 : motion === 'medium' ? 0.35 : 0.5;
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      if (labelRef.current) labelRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y + 36}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(follow);
    };
    follow();

    const hoverIn = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;
      setState(el.getAttribute('data-cursor'));
      setLabel(el.getAttribute('data-cursor-label') || '');
    };
    const hoverOut = (e) => {
      if (e.target.closest && e.target.closest('[data-cursor]')) {
        setState('default'); setLabel('');
      }
    };
    document.addEventListener('mouseover', hoverIn);
    document.addEventListener('mouseout', hoverOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', hoverIn);
      document.removeEventListener('mouseout', hoverOut);
      cancelAnimationFrame(raf);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [motion]);

  return (
    <>
      <div ref={dotRef} className={`cursor ${state === 'big' ? 'big' : ''} ${state === 'link' ? 'link' : ''}`} />
      <div ref={labelRef} className={`cursor-label ${label ? 'visible' : ''}`}>{label}</div>
    </>
  );
}
