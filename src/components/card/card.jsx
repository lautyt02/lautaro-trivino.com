const Card = ({title,pictures,description,lists,buttons})=>{
    return(
        <>
        <div>
            <h2>{title??""}</h2>
            <div>images{pictures??""}</div>
            <p>{description??""}</p>
            {lists&&lists.map((list,i)=> {

            return <div key={list.title+i}>
            <h5>{list.title}</h5>
            {list.items.map(item=> item+", ")}
            </div>
            }
        )}
            <div>
                {buttons&&buttons.map((btn,i) => <button key={btn.text + i} onClick={btn.action}>{btn.text}</button>)}
            </div>
        </div>
        </>
    )
}
export {Card}