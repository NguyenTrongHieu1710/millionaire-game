import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

async function analyzeBackground() {
  const zai = await ZAI.create();
  
  // Read the background image
  const imgPath = path.join(process.cwd(), 'public', 'end-background.png');
  const buf = fs.readFileSync(imgPath);
  const b64 = `data:image/png;base64,${buf.toString('base64')}`;

  console.log('Analyzing end-background.png...\n');

  const res = await zai.chat.completions.createVision({
    messages: [{
      role: 'user',
      content: [
        { 
          type: 'text', 
          text: `Analyze this background image for a "Who Wants to Be a Millionaire" game.

I need to position a 280px wide logo overlay to perfectly fit the circular logo area in the center of this background.

Please provide:
1. Image dimensions (width x height in pixels)
2. The circular logo position from the TOP edge (in pixels)
3. The circular logo position from the LEFT edge (in pixels)  
4. The diameter of the circular logo area (in pixels)
5. Based on a 280px wide logo overlay, what CSS values should I use?
   - top: ??? (px or %)
   - left: ??? (px or %)
   - transform: translate(??%, ??%)

Be very precise with measurements. The goal is to make a 280px logo perfectly fit into the circular logo area of the background.` 
        },
        { type: 'image_url', image_url: { url: b64 } },
      ],
    }],
    thinking: { type: 'enabled' },
  });

  const content = res.choices[0]?.message?.content || 'No response';
  console.log('='.repeat(60));
  console.log('ANALYSIS RESULT:');
  console.log('='.repeat(60));
  console.log(content);
  console.log('\n');
}

analyzeBackground().catch(console.error);
