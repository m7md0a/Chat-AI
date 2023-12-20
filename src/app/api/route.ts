import { NextResponse, NextRequest } from 'next/server';
import OpenAI from 'openai';
 

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  
  const openai = new OpenAI({
    apiKey: process.env.AI_TOKEN,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{
      "role": "user",
      "content": body.message
      }],
    model: 'gpt-3.5-turbo',
  });

  return NextResponse.json({
    message: chatCompletion.choices
  });

}


