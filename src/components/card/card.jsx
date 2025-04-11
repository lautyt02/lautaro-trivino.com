const Card = ({title,picture,description,buttons})=>{
    return(
        <>
        <div>
            <h5>{title??""}</h5>
            <div>image{picture??""}</div>
            <p>{description??""}</p>
            <div>
                {buttons.map((btn,i) => <button key={btn.text + i} onClick={btn.action}>{btn.text}</button>)}
            </div>
        </div>
        </>
    )
}
export {Card}