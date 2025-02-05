import { useField } from "formik"

const Input = ({label, span, ...props}) => {
    const [fied, meta] = useField(props)

    return (
        <div >
            <label className="block font-semibold text-blue-900 mt-2 mb-4">{label}</label>
            
            <div className="relative flex items-center px-3 py-2 border border-gray-300 rounded "
            >
                {span !== "$" ?  <span className="absolute right-0 py-2 px-3 text-gray-500 border-l border-gray-300">{span}
                </span> 
                :
                <span className="absolute left-1 py-2 px-3  text-gray-500 border-r border-gray-300">
                    {span}
                </span>
                }
                
                {span === "$" ? <input className="w-full outline-none pl-9" 
                {...fied} {...props}
                /> : <input className="w-full outline-none" 
                {...fied} {...props}
                />}
                
            </div>
            {meta.touched && meta.error ? (
                <div className="text-red-500">{meta.error}</div>
            ) : null
            }
        </div>
    )
}

export default Input