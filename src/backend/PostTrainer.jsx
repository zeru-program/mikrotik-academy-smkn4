
const PostTrainer = async (name, email, phone, image, sertifikat1, sertifikat2, sertifikat3, status) => {
    const db = import.meta.env.VITE_DB 
    try {
        const response = await fetch(`${db}/trainer.json`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Math.random(),
                name,
                email,
                image,
                phone,
                sertifikat1,
                sertifikat2,
                sertifikat3,
                status: status === 'true' ? true : false,
                last_modified: new Date()
            })
        })
        return true
    } catch (e) {
        console.error("Error while posting, ", e)
        return false
    }
}

export default PostTrainer