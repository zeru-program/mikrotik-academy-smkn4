
const Logout = () => {
    sessionStorage.removeItem("hasLogin")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("password")
    window.location.href = "/?auth=succes"
    return (
        <></>
    )
}

export default Logout