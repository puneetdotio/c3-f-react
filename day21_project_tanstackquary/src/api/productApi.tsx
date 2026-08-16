import { axiosInstance } from "../config/axiosInstace"


export const getProductsDataApi = async () => {
    try {
        console.log("api call function running...")
        const res = await axiosInstance.get("/products")
        console.log(res)
        return res.data.products;
    } catch (error) {
        console.log("Error in products api", error)
    }
}