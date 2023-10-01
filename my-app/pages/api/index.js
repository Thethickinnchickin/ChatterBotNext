// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = await req.body;


    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: body.messages,
    });
    
    const theResponse = completion.choices[0].message;
    console.log(theResponse)

    res.status(200).json({ output: theResponse });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
