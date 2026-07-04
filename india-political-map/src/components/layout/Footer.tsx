export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="text-lg font-bold text-blue-700">
          OpenYourEyes
        </h2>

        <p className="mt-2 max-w-xl text-sm text-slate-600">
          An open political transparency platform helping citizens
          explore politicians, elections, constituencies and
          public data.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
          <a href="#">About</a>
          <a href="#">Methodology</a>
          <a href="#">Privacy</a>
          <a href="#">Dispute Data</a>
        </div>

        <div className="mt-8 border-t pt-6 text-sm text-slate-500">
          © 2026 OpenYourEyes. Data provided under ODbL where applicable.
        </div>

      </div>
    </footer>
  );
}