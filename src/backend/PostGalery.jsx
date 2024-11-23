
const PostGalery = async (img, status, created_by) => {
    const db = import.meta.env.VITE_DB 
    try {
        const response = await fetch(`${db}/galery.json`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img,
                status: status === 'true' ? true : false,
                created_by,
                created_at: new Date()
            })
        })
        return true
    } catch (e) {
        console.error("Error while posting, ", e)
        return false
    }
}

export default PostGalery