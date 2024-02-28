export default function TextField(props) {
    const inputClasses = `flex border w-full px-2 outline-orange-300 py-1 border-cyan-600 ${props.className || ''}`

    return <fieldset className="col-auto flex flex-col gap-1 my-2">
        <label className="font-bold flex text-slate-600">{props.label}</label>
        {props?.type == 'area' ?
            <textarea type="text" rows="5" {...props} className={inputClasses}></textarea>
            :
            <input type="text" {...props} className={inputClasses} />
        }
    </fieldset>
}