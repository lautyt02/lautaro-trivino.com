import { Search, Card } from "../../components"
const Projects = ()=>{
    const projects = [{title:"Project 1", description:"Description 1", buttons: [{text:"btn1", action:()=>{}},{text:"btn2", action:()=>{}},{text:"btn3", action:()=>{}}], lists:[{title:"Lenguajes", items:["JavaScript", "TypeScript"]}]},
    {title:"Project 2", description:"Description 2", buttons: [{text:"btn1", action:()=>{}},{text:"btn2", action:()=>{}},{text:"btn3", action:()=>{}}] ,lists:[{title:"Lenguajes", items:["JavaScript", "TypeScript"]},{title:"Tipo", items:["Movile"]}]},
    {title:"Project 3", description:"Description 3", buttons: [{text:"btn1", action:()=>{}},{text:"btn2", action:()=>{}},{text:"btn3", action:()=>{}}],lists:[]}]
    return(
        <>
        <h1>Projects</h1>
        <Search/>
        {projects.map((project,index)=> <Card key={project.title + index} title={project.title} description={project.description} lists={project.lists} buttons={project.buttons}/>)}
        </>
    )
}
export {Projects}