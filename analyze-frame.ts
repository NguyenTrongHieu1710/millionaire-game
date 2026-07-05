// analyze-frame.ts — Analyze khung.png using Z.ai VLM
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const imageUrl = path.join(__dirname, '..', 'material', 'khung.png');

// Read local file and convert to base64
const buf = fs.readFileSync(imageUrl);
const b64 = `data:image/png;base64,${buf.toString('base64')}`;

const prompt = `Analyze this decorative frame border image in extreme detail for CSS recreation.

Extract the following information:
1. Border style: ornate/decorative/frame style
2. Border colors: exact hex codes (e.g., #FFD700, #D4AF37, #8B6914)
3. Corner design: L-shape/geometric/ornament style
4. Border thickness: approximate pixels
5. Gradient direction: horizontal/vertical
6. Shadows: inner/outer glow effects
7. Overall dimensions: width/height ratio

Return a detailed JSON description with specific hex codes and measurements.`;

async function main() {
  console.log('Initializing Z.ai SDK...');
  const zai = await ZAI.create();

  console.log('Sending VLM request...');
  const res = await zai.chat.completions.createVision({
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: prompt },
        { type: 'image_url', image_url: { url: b64 } },
      ],
    }],
    thinking: { type: 'enabled' }, // Enable chain-of-thought for detailed analysis
    max_tokens: 800,
  });

  const content = res.choices[0]?.message?.content;
  console.log('\n=== VLM Response ===');
  console.log(content);
  console.log('\n=== Thinking Process ===');
  console.log(res.thinking_content);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
