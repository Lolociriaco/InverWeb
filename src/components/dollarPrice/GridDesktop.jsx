import clsx from "clsx";

export const GridDesktop = ( { dollar = {} } ) => {
    const { nombre = "N/A", compra = "N/A", venta = "N/A" } = dollar; // Provide default values
  
    return (
      <>
        {
            nombre === "Blue" ?
            <h2 className="lg:text-5xl sm:text-lg text-md font-semibold text-blue-800">Dólar { nombre }</h2> :
            <h2 className="sm:text-lg text-md font-semibold text-blue-800">Dólar { nombre }</h2>
        }
        <section className="flex flex-row sm:gap-7 gap-3 items-center">
          <div className={
            clsx(
                "flex place-items-center flex-col gap-0 md:w-[100px] w-[85px]",
                {
                    "lg:gap-3": nombre === "Blue"
                }
            )
          }>
            <span className="text-sm font-semibold text-gray-500">Comprar</span>
            <h4 className="sm:text-2xl text-xl text-gray-600 font-bold ">${ compra }</h4>
          </div>

          <div className="h-10 border border-gray-300"/>

          <div className={
            clsx(
                "flex place-items-center flex-col gap-0 md:w-[100px] w-[85px]",
                {
                    "lg:gap-3": nombre === "Blue"
                }
            )
          }>
            <span className="text-sm font-semibold text-gray-500">Vender</span>
            <h4 className="sm:text-2xl text-xl text-gray-600 font-bold">${ venta }</h4>
          </div>
        </section>
      </>
    );
  };
  