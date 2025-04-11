const Admin = ()=>{
    const isAdmin=false
    return(
        <>
        {isAdmin&& <h1>Admin</h1>}
        </>
    )
}
export {Admin}