import { Value } from "sass";
import { SearchBar, Filter } from "./components"; 
const Search = ()=>{
    //Search logic
    return(<>
    <SearchBar searchFunction={()=>{}}/>
        <Filter name={""} id={""} options={[{Value:"",text:""}]} selectFunction={()=>{}}/>
        <Filter name={""} id={""} options={[{Value:"",text:""}]} selectFunction={()=>{}}/>
        <Filter name={""} id={""} options={[{Value:"",text:""}]} selectFunction={()=>{}}/>
        <div>Advanced search instruccions</div>
        <div className="">Search Feedback</div>
        </>)
}
export {Search}