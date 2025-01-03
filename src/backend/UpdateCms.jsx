const UpdateCms = async (uniqueId, id, name, content) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}/cms/${uniqueId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                name,
                content,
                last_modified: new Date()
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default UpdateCms;