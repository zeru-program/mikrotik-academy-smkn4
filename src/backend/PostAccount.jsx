
const PostAccount = async (username, email, password, role, status, created_by) => {
    const db = import.meta.env.VITE_DB 
    try {
        const response = await fetch(`${db}/account.json`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Math.random(),
                username,
                email,
                password,
                role,
                status: status === 'true' ? true : false,
                created_by
            })
        })
        return true
    } catch (e) {
        console.error("Error while posting, ", e)
        return false
    }
}

export default PostAccount