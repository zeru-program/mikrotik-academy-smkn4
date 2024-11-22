
const PostCmsImg = async (name, img, created_by, status) => {
    const db = import.meta.env.VITE_DB 
    try {
        const response = await fetch(`${db}/cms_img/${name}.json`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
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

export default PostCmsImg