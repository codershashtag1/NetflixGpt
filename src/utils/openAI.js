import OpenAI from "openai";
import { GPT_API_KEY } from "./constant";

const openAI = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true
})

export default openAI
