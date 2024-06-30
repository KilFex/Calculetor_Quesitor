import React from "react";

const HeaderTitle: React.FC=()=>{
    const title = "Calculadora de Quesos";

    return(

        <header className="p-11 flex justify-center">
            <div className="bg-blue-500 shadow-lg shadow-blue-500/50 h-16 w-96 flex justify-center rounded-3xl" >
            <h1 className="text-4xl text-slate-100 mt-2">{title}</h1>
            </div>
        </header>
    );
}

export default HeaderTitle;
