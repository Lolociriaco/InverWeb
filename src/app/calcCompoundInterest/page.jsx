import 'normalize.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../../components/calc/Input.jsx';
import ContributionInput from '../../components/calc/ContributionInput.jsx';
import CompoundInterestChart from '../../components/calc/CompoundInterestChart.jsx';
import { useState } from 'react';
import * as Yup from 'yup';


const compoundInterest = (deposit, contribution, years, rate, regularidad, temporalidad) => {
  let total = deposit
  let reg = regularidad === "anual" ? 1 : regularidad === "mensual" ? 12 : 52;
  const r = rate/100;
  let contributionTotal = 0;

  let data = []

  if(temporalidad === "inicio")
  {
    for(let i = 0; i < years; i++){
      for(let x = 0; x < reg; x++){
        total = (total + contribution) * ((r/reg) + 1)
        contributionTotal += contribution 
      }
      data.push({
        year: i + 1,
        initialBalance: deposit,
        contribution: contributionTotal,
        interest: (total - deposit- contributionTotal)
      })
    }
  }
  else
  {
    for(let i = 0; i < years; i++){
      for(let x = 0; x < reg; x++){
        total *= ((r/reg) + 1)
        total += contribution
        contributionTotal += contribution 
      }
      data.push({ 
        year: i + 1,
        initialBalance: deposit,
        contribution: contributionTotal,
        interest: (total - deposit- contributionTotal)
      })
    }
  }

  return { total, data };
}


const formatter = new Intl.NumberFormat('en-US', {
  style:'currency',
  currency:'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits:2
})

const CalculatorCompoundInterest = () =>  {
  const [chartData, setChartData] = useState([
    { year: 1, initialBalance: 1000, contribution: 1200, interest: 118.77}, 
    { year: 2, initialBalance: 1000, contribution: 2400, interest: 332.88},
    { year: 3, initialBalance: 1000, contribution: 3600, interest: 649.22},
    { year: 4, initialBalance: 1000, contribution: 4800, interest: 1075.18},
    { year: 5, initialBalance: 1000, contribution: 6000, interest: 1618.67}
    ]);

  const [balance, setBalance] = useState("$8,618.68")
  const [signData, setSignData] = useState([100, "mensual", 5])

  const handleSubmit = ({ deposit, contribution, years, rate, regularidad, temporalidad }) => {
    const { total, data } = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate),
      regularidad,
      temporalidad
    );

    setSignData([Number(contribution),regularidad,Number(years)])
  
    setBalance(formatter.format(total));
    setChartData(data);
    console.log(chartData)
    console.log(data)
  };
  

  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center h-full m-5 md:m-20 gap-10'>
        <section className='bg-gray-100 border border-gray-300 rounded-lg py-5  max-w-[850px] shadow-md px-3 md:px-10 h-fit'>
            <Formik
            initialValues={{
                deposit: '1000',
                contribution: '100',
                years: '5',
                rate: '7',
                regularidad: 'mensual',
                temporalidad: 'inicio'
            }}
            onSubmit={handleSubmit} 
            validationSchema={Yup.object({
                deposit: Yup.number().required('Campo Obligatorio').typeError('Ingrese un numero.').max(1000000000, 'El numero no puede ser mayor a 1.000.000.000'),
                contribution: Yup.number().required('Campo Obligatorio').typeError('Ingrese un numero.'),
                years: Yup.number().required('Campo Obligatorio').typeError('Ingrese un numero.').max(50, "Por favor ingrese un numero menor a 50"),
                rate: Yup.number().required('Campo Obligatorio').typeError('Ingrese un numero.').min(0, 'El interes no puede ser negativo').max(100, 'El interes no puede ser mayor a 100')
            })}
            >
            <Form className="space-y-4">
                <Input name="deposit" label="Deposito Inicial" span="$"/>
                <ContributionInput 
                name="contribution" 
                label="Depósito Periódico"
                span="$" 
                secondName="regularidad"
                thirdName="temporalidad"
                />
                <Input name="years" label="Cantidad de Años" span="Años"/>
                <Input name="rate" label="Interes Estimado Anual" span="%"/>

                <div className='mt-10'>
                <button 
                type='submit' 
                className='block bg-yellow-300 rounded py-2 w-full mt-10 font-bold cursor-pointer'>
                    Calcular
                </button>
                </div>
            </Form>
            </Formik>
            <div>{balance !== "" ? 
            (<h2 className='flex justify-center rounded text-base font-bold py-3 mt-5 bg-gray-300 '>
            {`TOTAL GENERADO: ${balance}`}
            </h2>) 
            : null }</div>
        </section>
            <CompoundInterestChart data={chartData} total={balance} signData={signData} />
    </div>
  )
}

export default CalculatorCompoundInterest
