const Card = ({title,picture,description,buttons})=>{
    return(
        <>
        <div>
            <h5>{title??""}</h5>
            <div>image{picture??""}</div>
            <p>{description??""}</p>
            <div>
                {buttons??""}
            </div>
        </div>
        </>
    )
}
export {Card}