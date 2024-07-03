import axios from "axios"

export async function askAI(question) {
    // console.log(question);
    const backend_url = "http://localhost:3000";
    // console.log(backend_url);
    const res = await axios.post(`${backend_url}/api/users/talk`, {
        message: question
    });
    // console.log(res.data);
    return res.data;
}

