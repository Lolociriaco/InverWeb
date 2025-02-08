import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatter2 = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

// Colores para el gráfico de torta
const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const CompoundInterestChart = ({ data, total, signData }) => {

  const lastYearData = data[data.length - 1];

  const pieData = [
    { name: "Balance Inicial", value: lastYearData?.initialBalance || 0 },
    { name: "Depósitos", value: lastYearData?.contribution || 0 },
    { name: "Intereses", value: lastYearData?.interest || 0 }
  ];

  return (
    <div className="w-[850px]">
      <div className="flex flex-col  w-full bg-gray-100 p-5 shadow-md gap-15 border rounded-lg border-gray-300">
        <div className="flex flex-wrap items-center">
          <div className="flex-[40%]">
            <h2 className="text-lg text-gray-400 font-bold">Puedes conseguir</h2>
            <h2 className="text-[40px] font-bold text-gray-600 mb-2">{total}</h2>
            <h2 className="text-lg text-gray-400 font-bold">Ahorrando ${signData[0]} {signData[1]} durante {signData[2]} años.</h2>
            <hr className="h-full my-3 border-t-1 rounded border-gray-400"/>
            <div className="flex flex-col gap-2">
              {pieData.map((entry, index) => (
                <div key={index} className="flex w-full items-center space-x-2">
                  {/* Color de la leyenda */}
                  <div
                    className="w-4 h-4"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  {/* Nombre y valor */}
                  <div className="flex justify-between w-full pr-2 md:pr-8 text-sm text-gray-700">
                    <span>{entry.name}: </span>
                    <span>{formatter.format(entry.value)}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <hr className="h-full border-t-1 border-gray-800"/>

          {/* Gráfico de Torta */}
          <div className="flex justify-center">
            <ResponsiveContainer width={260} height={220}>
              <PieChart>
                <Tooltip formatter={(pieData) => formatter.format(pieData)} />
                <Pie 
                  data={pieData} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={110} 
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Barras */}
            <ResponsiveContainer height={400}>
              <BarChart data={data}>
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{  position: "insideBottomRight", offset: -5 }} />
                <YAxis width={70}  tickFormatter={(value) => formatter2.format(value)} />
                <Tooltip formatter={(value) => formatter.format(value)} />
                <Bar dataKey="initialBalance" stackId="a" fill="#8884d8" name="Balance Inicial" />
                <Bar dataKey="contribution" stackId="a" fill="#82ca9d" name="Depósitos"/>
                <Bar dataKey="interest" stackId="a" fill="#ffc658" name="Intereses"/>
              </BarChart>
            </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompoundInterestChart;
