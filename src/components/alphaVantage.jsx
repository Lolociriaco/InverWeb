import alphaVantage from 'alphavantage';

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY; // Cambiado para Vite

const av = alphaVantage({ key: apiKey });

export const getStockData = async (symbol) => {
  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json(); // Convertimos la respuesta en JSON

    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return null;
  }
};
