const Filter = ({name,id,options,selectFunction})=>{
    return(
        <select name={name} id={id} onChange={selectFunction}>
            {options.map((opt)=> <option value={opt.value}>{opt.text}</option> )}
        </select>
    )
}
export {Filter}
