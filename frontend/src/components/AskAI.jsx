import axios from "axios"

export async function askAI(question) {
    const backend_url = "http://localhost:3000";
    const res = await axios.post(`${backend_url}/api/users/talk`, {
        message: question
    });
    return res.data;
}