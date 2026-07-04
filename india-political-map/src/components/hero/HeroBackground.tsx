export default function HeroBackground() {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900 to-blue-500" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl" />
    </>
  );
}