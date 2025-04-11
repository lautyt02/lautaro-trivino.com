const SearchBar = ({searchFunction})=>{
    return(
        <>
        <input type="text" onChange={searchFunction}/>
        </>
    )
}
export {SearchBar}