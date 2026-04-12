const items = [
  'IPA', 'PORTER', 'PALE ALE', 'HVETEØL',
  'LAGER', 'SESONGSØL', 'ØLSMAKING', 'MAT OG PRAT',
  'HÅNDBRYGGET', 'VENNESLA', 'HUNSFOS',
];

export default function Ticker() {
  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {allItems.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
