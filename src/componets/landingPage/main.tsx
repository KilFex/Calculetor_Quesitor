import React from "react";

const MainBody: React.FC = () => {
  const calcular = "Calcular Salida Quesos";
  const cumpleaños = "Proximos Cumpleaños";

  return (
    <div className="flex justify-center mt-32">
      <div className="flex flex-col gap-40">
        <div className="bg-blue-500 shadow-lg shadow-blue-500/50 text-slate-100 py-4 px-24 rounded-3xl transform motion-safe:hover:scale-110 duration-700">
          <a href="/calculator">{calcular}</a>
        </div>
        <div className="bg-blue-500 shadow-lg shadow-blue-500/50 text-slate-100 py-4 px-24 rounded-3xl transform motion-safe:hover:scale-110 duration-700">
          <a href="">{cumpleaños}</a>
        </div>
      </div>
    </div>
  );
};
export default MainBody;
