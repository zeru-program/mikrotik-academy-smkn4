const UpdateCmsImg = async (uniqueId, name, img) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/cms_img/${uniqueId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img,
                name,
                last_modified_by: "developer"
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default UpdateCmsImg;