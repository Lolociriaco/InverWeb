import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CompoundInterestChart = ({ data, total }) => {
  return (
    <div className="w-[800px]">
        <div className="w-full bg-gray-100 p-15 shadow-md border rounded-lg border-gray-300">
        <h2 className="text-center text-lg font-bold mb-4">Puedes ahorrar {total}</h2>
          <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} className="w-[500px]">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" label={{ value: "Años", position: "insideBottomRight", offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Legend />
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
