import { useField } from "formik"

const Select = ({label, ...props}) => {
    const [fied, meta] = useField(props)

    return (
        <div className="my-5">
            <label className="block font-semibold text-blue-900 m-2">{label}</label>
            <input className="outline-none p-1 border w-full m-5" 
            {...fied} {...props}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500">{meta.error}</div>
            ) : null
            }
        </div>
    )
}

export default Select