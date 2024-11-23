const UpdateStatusGalery = async (id, status) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}galery/${id}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default UpdateStatusGalery;
