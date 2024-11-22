const UpdateTrainer = async (uniqueId, name, email, phone) => {
    const db = import.meta.env.VITE_DB;
    try {
        const response = await fetch(`${db}trainer/${uniqueId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                last_modified: new Date()
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default UpdateTrainer;