const DeleteCmsImg = async (id) => {
   
    const db = import.meta.env.VITE_DB;
      
    try {
        const response = await fetch(`${db}/cms_img/${id}.json`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.ok
    } catch (error) {
        console.error("Error deleting data:", error);
        Swal.fire("Error", "Data gagal dihapus", "error");
        return false;
    }
}

export default DeleteCmsImg;