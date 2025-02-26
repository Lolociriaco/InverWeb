import { Field, ErrorMessage } from "formik";

const ContributionInput = ({ name, label, secondName, thirdName }) => {
  return (
    <div className="flex flex-col">
        <label className="block text-blue-800 font-semibold mt-2 mb-4">{label}</label>
      <div className="flex">
        <div className="relative flex items-center w-full border border-gray-300 rounded">
          <span className="absolute left-1 py-2 px-3 text-gray-500 border-r border-gray-300">$</span>
          <Field
            name={name}
            className="w-[80%] pl-12 pr-2 py-2 outline-none"
          />

          <Field 
            name={secondName} 
            as="select"
            className="w-[20%] px-2 py-2 border-l border-gray-300"
          >
            <option value="semanal">Semanalmente (52/Año)</option>
            <option value="mensual">Mensualmente (12/Año)</option>
            <option value="anual">Anualmente (1/Año)</option>
          </Field>
        </div>
        <div className="w-[40%] ml-5 border rounded border-gray-300">
          <Field 
            name={thirdName} 
            as="select"
            className="px-2 py-2 w-full"
          >
            <option value="inicio">Depositas al inicio de cada periodo</option>
            <option value="final">Depositas al final de cada periodo</option>
          </Field>
        </div>
      </div>

        <ErrorMessage name={name} component="p" className="text-red-500 text-base -mt-1" />
    </div>
  );
};

export default ContributionInput;
