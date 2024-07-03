import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = "AIzaSyAcGIJj1VF6P2gGzdDxZ-MAWGHwIcxyHwY";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

let chat = null

const aboutMe = "You are a chatbot created by Note-Corner backend System engineers. You are designed to help users with funding related issues only."

async function getGeminiResponse(message) {
  if (!chat) {
    chat = model.startChat({ history: [] });
  }

  const response = await chat.sendMessage(message, { stream: true });
  return response;
}

// getGeminiResponse(aboutMe);

let chatHistory = []

const chatController = async (req, res) => {
  if (chatHistory.length == 0) {
    await getGeminiResponse(aboutMe);
    chatHistory.push({ message: aboutMe, sender: 'bot' });
  }

  const { message } = req.body;
  chatHistory.push({ message, sender: 'user' });
  const response = await getGeminiResponse(message);
  chatHistory.push({ message: response, sender: 'bot' });
  const { candidates } = response.response;
//   console.log(candidates[0]);
  const { content: { parts } } = candidates[0];
  const { text } = parts[0];
//   console.log(parts[0]);
  return res.json(text);
};

export { chatController };