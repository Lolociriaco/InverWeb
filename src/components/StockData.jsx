import { useEffect, useState } from 'react';

const StockData = ({ symbol }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=FN13AYC3I5A9HHQY").then((response) => response.json()).then((data) => setData(data))
  }, []);

  return (
    <div>
      <h2>Datos de {symbol}</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Cargando...</p>}
    </div>
  );
};

export default StockData;