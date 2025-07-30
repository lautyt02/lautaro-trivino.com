const Admin = ()=>{
    const isAdmin=true
    return(
        <>
        {isAdmin&& <h1>Admin</h1>}
        </>
    )
}
export {Admin}