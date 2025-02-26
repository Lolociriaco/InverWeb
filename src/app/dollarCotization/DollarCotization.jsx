import clsx from "clsx"
import { useEffect, useState } from "react"
import { GridDesktop } from "../../components/dollarPrice/GridDesktop"

export default function() {

  const [dollar, setDollar] = useState([])
  const [date, setDate] = useState()

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
    .then((res) => res.json())
    .then((data) => {
      setDollar(data)
      console.log(data)

      const { fechaActualizacion } = data[1]

      const date = new Date( fechaActualizacion )
      const formatDate = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Usa formato AM/PM
      }).format(date);
      setDate(formatDate)

    })
  }, [])

  

  return (
    <div className="w-full flex justify-center">
      { dollar.length > 0 &&

      <div className="grid grid-cols-3 grid-rows-6 gap-4 px-10 py-10 max-w-[1200px] w-full">
          <div className="bg-gray-100 border border-gray-300 rounded-lg  row-span-6 flex justify-center flex-col items-center shadow gap-10">
            <GridDesktop dollar={dollar[1]}/>
            <h5 className="text-xs text-gray-500 -mt-6">Actualizado por última vez: {date}</h5>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[0]}/>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 col-start-2 row-start-2 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[2]}/>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 col-start-2 row-start-3 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[3]}/>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 col-start-2 row-start-4 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[4]}/>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 col-start-2 row-start-5 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[5]}/>
          </div>
          <div className="bg-gray-100 border border-gray-300 rounded-lg  col-span-2 col-start-2 row-start-6 flex justify-between items-center shadow px-8 py-4">
            <GridDesktop dollar={dollar[6]}/>
          </div>

      </div>
      }
    </div>
  )
}
/*

      { dollar &&

        <div className="grid grid-cols-3 grid-rows-6 gap-4">
            <div className="row-span-6">
              <GridDesktop dollar={dollar[1]}/>
            </div>
            <div className="col-span-2">
              <GridDesktop dollar={dollar[0]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[2]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[3]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[4]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[5]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[6]}/>
            </div>
            <div className="col-span-2 col-start-2 row-start-2">
              <GridDesktop dollar={dollar[7]}/>
            </div>
        </div>
      }

*/