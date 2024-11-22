const UpdateAccount = async (uniqueId, username, email, role, password) => {
    const db = import.meta.env.VITE_DB;
   try {
        const response = await fetch(`${db}account/${uniqueId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                role,
                password
            })
        });
        return response.ok;
    } catch (error) {
        console.error("Error editing data:", error);
        return false;
    }
}

export default UpdateAccount;