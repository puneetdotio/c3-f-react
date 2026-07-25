import axios from "axios"


export let getUser = async () => {
    console.log("api call runs of users fetch")

    let res = await axios.get("https://fakestoreapi.com/users");
    console.log(res.data)
}