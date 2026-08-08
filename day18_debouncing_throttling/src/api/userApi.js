import axios from "axios"


export let getUsers = async () => {
    try {
        let res = await axios.get("https://fakestoreapi.com/users")
        console.log(res.data)
    } catch (error) {
        console.log("error in users api -> ", error)
    }
};