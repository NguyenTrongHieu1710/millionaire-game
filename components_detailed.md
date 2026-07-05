# 📋 DANH SÁCH CHI TIẾT COMPONENTS THEO TỪNG CẢNH

---

## 1️⃣ MenuScreen.tsx

### **DOM Structure:**
```
<div class="menu-screen">
  ├── <div> Background Image (/menu-background.png)
  ├── <div> Overlay gradient (radial)
  ├── <div class="menu-light-rays"> Animated light rays
  ├── <div class="menu-particles"> Particles effect
  ├── <div> Logo (top-right, 220px)
  │   └── <img src="/icons/Main Logo Cropped.png">
  ├── <h1> "MENU" (top-center, 80px)
  ├── <div> Buttons stack (center-left)
  │   ├── <MenuButton label="Play" primary />
  │   ├── <MenuButton label="Settings" />
  │   └── <MenuButton label="Reset game" />
  ├── <button> "EXIT" (bottom-right, 20px)
  └── <div> Floor reflection gradient
</div>
```

### **Components chi tiết:**
- **Background**: `menu-background.png` với overlay gradient
- **Logo**: 220px, top-right, gold drop-shadow
- **Title "MENU"**: 80px, tracking 0.3em, gold glow
- **MenuButton** (3 buttons):
  - Width: 440px, Height: 64px
  - Border: 2px solid gold (#D4AF37)
  - Background: Dark blue (#0A1A3A)
  - Font: Arial 24px, letter-spacing 0.05em
  - Chevron icon: "▸" (18px gold)
  - Hover: scale 1.02 + gradient shine
- **EXIT button**: 20px text, hover gold color
- **Animations**: Light rays, particles, floor reflection

---

## 2️⃣ VideoPlaceholder.tsx

### **DOM Structure:**
```
<div class="video-placeholder">
  ├── <div> Background (menu-background.png fallback)
  ├── <video> (if videoSrc provided)
  ├── <div> Text overlay container
  │   ├── <h1> Title
  │   └── <p> Subtitle
  ├── <div> Progress bar
  │   └── <div> Progress fill (animated)
  └── <button> "Skip ▸" (bottom-right)
</div>
```

### **Props:**
- `videoSrc?: string` - Video URL
- `duration: number` - 20s (intro) hoặc 6s (transition)
- `title?: string` - Title text overlay
- `subtitle?: string` - Subtitle text
- `onComplete: () => void` - Callback khi xong

### **Components chi tiết:**
- **Video element**: autoPlay, muted, loop (nếu có src)
- **Title**: 48px, white, fade-in animation
- **Subtitle**: 24px, gold, fade-in delay
- **Progress bar**: Bottom, full width, 4px height
- **Skip button**: Bottom-right, hover scale effect

---

## 3️⃣ WelcomeScreen.tsx

### **DOM Structure:**
```
<div class="welcome-screen" onClick={onContinue}>
  ├── <div> Background (end-background.png)
  └── <div> Text overlay (top 8%, center)
      └── <Khung1Frame>
          └── <h1> "WELCOME TO"
</div>
```

### **Phases (State-driven):**
1. **"background"** (0-2s): Background only
2. **"welcome"** (2-5s): Show frame + text với fade-in-glow
3. **"transition"** (5-5.5s): Fade out
4. **Auto-continue** at 5.5s

### **Components chi tiết:**
- **Background**: `end-background.png` full cover
- **Khung1Frame**: Harmonized gold frame
  - Cool gold border (#D4AF37)
  - Blue-purple glow
  - 40px × 80px padding
  - L-shaped corners (36px)
- **Text "WELCOME TO"**:
  - Font: Arial 64px bold
  - Color: #FFE7A0 (light gold)
  - Letter-spacing: 0.15em
  - Shadow: Gold glow
  - Animation: fade-in-glow 1s

---

## 4️⃣ ContestantIntroScreen.tsx

### **DOM Structure:**
```
<div class="contestant-intro" onClick={onContinue}>
  ├── <div> Background (end-background.png)
  ├── <div> Text overlay (top 8%, center)
  │   └── <Khung1Frame>
  │       └── <h2> "LET'S MEET TODAY'S CONTESTANT"
  └── <div> Click hint (bottom)
      └── "CLICK ANYWHERE TO CONTINUE"
</div>
```

### **Components chi tiết:**
- **Background**: `end-background.png`
- **Khung1Frame**: Same as WelcomeScreen
- **Text**:
  - Font: Arial 56px bold
  - Color: #FFE7A0
  - Letter-spacing: 0.1em
  - Animation: fade-in-glow 1s
- **Auto-continue**: 3s
- **Click hint**: 16px, opacity 0.6, pulse animation

---

## 5️⃣ ContestantForm.tsx

### **DOM Structure:**
```
<div class="contestant-form">
  ├── <div> Light rays background
  ├── <MillionaireLogo /> (top-center, 140px)
  └── <div> Form card (gradient + backdrop-blur)
      ├── <Field label="Name" autoFocus />
      ├── <Field label="Location" />
      └── <button> "Let's Play" (if name && location)
</div>
```

### **Field Component:**
```
<div class="field">
  ├── <label> Label text (14px uppercase)
  └── <input> Text input
      - Background: rgba(255,255,255,0.05)
      - Border: 1px solid rgba(212,175,55,0.3)
      - Focus: Gold border + glow
      - Font: 18px
</div>
```

### **Components chi tiết:**
- **Logo**: MillionaireLogo 140px
- **Form card**:
  - Background: Linear gradient dark blue + backdrop-blur(12px)
  - Border: 1px solid rgba gold
  - Border-radius: 16px
  - Padding: 48px
  - Box-shadow: Large elevation
- **Input fields**: 2 fields (Name, Location)
- **Submit button**:
  - Text: "Let's Play"
  - Width: Full width
  - Height: 64px
  - Background: Gold gradient
  - Animation: Blinking when ready
  - Disabled: Until both fields filled

---

## 6️⃣ IntroductionScreen.tsx

### **DOM Structure:**
```
<div class="introduction-screen" onClick={onStart}>
  ├── <div> Purple spotlights background
  ├── <MillionaireLogo /> (top-center, 200px)
  ├── <div> Contestant info (center, delay 1s)
  │   ├── <h2> Name (64px)
  │   └── <p> Location (28px silver)
  ├── <MoneyLadder /> (right side, delay 2s)
  └── <div> Lifelines (left side, after ladder)
      ├── <img> 50:50 (100×100px)
      ├── <img> Ask the Audience
      └── <img> Double Dip
</div>
```

### **MoneyLadder Animation:**
```
15 levels animate từ bottom-up:
- Delay: 300ms per level
- Colors:
  - Safe havens (5, 10): Green glow
  - Other levels: Blue → Gold highlight
  - Current: Pulse animation
```

### **Components chi tiết:**
- **Logo**: 200px, top-center
- **Name**: 64px bold, gold color, fade-in
- **Location**: 28px, silver (#C0C0C0), fade-in
- **MoneyLadder**:
  - Right: 20%, top: 50%
  - 15 levels stacked
  - Width: 280px
  - Highlight animation: 300ms/level
  - Safe havens: Level 5 (£1,000), Level 10 (£32,000)
- **Lifelines** (left side):
  - 3 icons: 100×100px circles
  - Background: Blue gradient
  - Icons: 50:50, Ask Audience, Double Dip
  - Fade-in after ladder completes
- **Click hint**: "CLICK TO START" (bottom)

---

## 7️⃣ GameplayScreen.tsx

### **DOM Structure:**
```
<div class="gameplay-screen">
  ├── <MillionaireLogo /> (top-right, 140px)
  ├── <LifelinesBar /> (top-left)
  ├── <button> Walk Away (top-center)
  ├── <div> Question Banner (center-top, 1180×160px)
  │   ├── <p> Question number (16px)
  │   └── <p> Question text (34px)
  ├── <div> Answer Grid (bottom, 2×2)
  │   ├── <AnswerBox letter="A" />
  │   ├── <AnswerBox letter="B" />
  │   ├── <AnswerBox letter="C" />
  │   └── <AnswerBox letter="D" />
  ├── [Optional] <Modal> Final Answer Confirm
  ├── [Optional] <Modal> Ask the Audience
  └── [Optional] <div> Reveal Overlay ("CORRECT!" / "WRONG")
</div>
```

### **Sub-components:**

#### **LifelinesBar.tsx:**
```
<div class="lifelines-bar">
  ├── <button> 50:50 (100×100px)
  ├── <button> Ask the Audience
  ├── <button> Double Dip
  └── [If double-dip active] <div> "Double Dip: Pick 2" indicator
</div>

States:
- Active: Full color, hover scale
- Used: Grayscale filter + opacity 0.5
- Disabled: Pointer-events none
```

#### **AnswerBox.tsx:**
```
<div class="answer-box" onClick={onSelect}>
  ├── <div class="letter-badge"> A/B/C/D (48×48px circle)
  └── <p> Answer text (24px)
</div>

States:
- default: Blue gradient background
- selected: Gold gradient
- correct: Green gradient + checkmark
- wrong: Red gradient + X mark
- disabled: Gray + opacity 0.6
```

### **Modals:**

#### **Final Answer Confirm:**
```
<div class="modal-overlay">
  └── <div class="modal">
      ├── <p> "Is that your final answer?"
      ├── <button> "Yes" (green)
      └── <button> "No" (red)
</div>
```

#### **Ask the Audience:**
```
<div class="modal-overlay">
  └── <div class="modal">
      ├── <h3> "Ask the Audience Results"
      ├── <div> Bar chart container
      │   ├── <div> Bar A (percentage)
      │   ├── <div> Bar B
      │   ├── <div> Bar C
      │   └── <div> Bar D
      └── <button> "Close"
</div>
```

### **Components chi tiết:**
- **Walk Away button**:
  - Position: Top-center
  - Text: "Walk Away with £[amount]"
  - Disabled: Level 1
  - Width: 300px, Height: 50px
  - Background: Red-orange gradient
- **Question Banner**:
  - Size: 1180×160px
  - Background: Purple gradient
  - Border: Gold 3px
  - Shadow: Large glow
- **Answer Grid**:
  - 2×2 grid, gap 16px
  - Each box: Min 560×120px
  - Hover: Lift effect + glow
- **Reveal Overlay**:
  - Full screen fade-in
  - Text: "CORRECT!" (green) or "WRONG" (red)
  - Font: 120px bold
  - Duration: 2s

---

## 8️⃣ EndScreen.tsx (3 Variants)

### **Variant A: Walk Away**

```
<div class="end-screen-walk-away">
  ├── <div> Blue gradient background
  ├── <div> Subtle confetti (60 pieces)
  ├── <div> Badge: "COLLECT WINNINGS"
  │   - Width: 400px
  │   - Border: Gold 2px
  │   - Background: rgba blue
  ├── <p> "You walk away with" (28px)
  ├── <p class="amount"> "£X,XXX" (120px gold)
  └── <MillionaireLogo /> (180px)
</div>
```

### **Variant B: Win (£1,000,000)**

```
<div class="end-screen-win">
  ├── <div> Purple gradient background
  ├── <div> Heavy confetti (150 pieces)
  ├── <div> Animated light rays
  ├── <h1> "CONGRATULATIONS!" (60px)
  ├── <p class="amount"> "£1,000,000" (160px gold, heavy glow)
  ├── <p> "YOU ARE A MILLIONAIRE!" (20px)
  └── <MillionaireLogo /> (280px)
</div>
```

### **Variant C: Lose**

```
<div class="end-screen-lose">
  ├── <div> Dark red gradient background
  ├── <h1> "GAME OVER" (80px red)
  ├── <p> "You leave with" (28px)
  ├── <p class="amount"> "£X,XXX" (100px gold)
  ├── <p> "Better luck next time!" (14px gray)
  └── <MillionaireLogo /> (180px)
</div>
```

### **Components chi tiết:**
- **Confetti**:
  - Walk Away: 60 pieces, subtle colors
  - Win: 150 pieces, vibrant gold + purple
  - Animation: Fall + rotate, 3s duration
- **Amount display**:
  - Walk Away: 120px
  - Win: 160px với heavy glow
  - Lose: 100px
  - Color: Gold (#D4AF37)
  - Font-weight: 800
- **Logo sizes**: 180px (walk/lose), 280px (win)

---

## 9️⃣ OutroScreen.tsx

### **DOM Structure:**
```
<div class="outro-screen" onClick={onReturn}>
  ├── <div> Dark gradient background
  ├── <MillionaireLogo /> (200px, fade-in)
  ├── <h1> "GOODBYE!" (80px, fade-in 0.5s)
  ├── <p> "THANKS FOR PLAYING" (16px gold, fade-in 1s)
  └── <div> Click hint (bottom)
      └── "CLICK TO RETURN TO MENU"
</div>
```

### **Components chi tiết:**
- **Background**: Dark gradient (black → dark blue)
- **Logo**: 200px, fade-in 0.3s
- **"GOODBYE!"**:
  - Font: 80px bold
  - Color: White
  - Animation: fade-in 0.5s, delay 0.3s
- **"THANKS FOR PLAYING"**:
  - Font: 16px
  - Color: Gold (#D4AF37)
  - Animation: fade-in 0.5s, delay 0.8s
- **Click hint**: 14px, opacity 0.6, pulse

---

## 🎨 SHARED COMPONENTS

### **MillionaireLogo.tsx**
```
<img 
  src="/icons/Main Logo Cropped.png"
  style={{
    width: [size]px,  // 140, 180, 200, 220, 280
    filter: "drop-shadow(0 0 20px rgba(212,175,55,0.5))"
  }}
/>
```

### **MoneyLadder.tsx**
```
<div class="money-ladder">
  {levels.map((level, i) => (
    <div class="ladder-level" data-safe={[5,10].includes(i+1)}>
      ├── <span class="level-number"> i+1
      └── <span class="level-amount"> £X,XXX
    </div>
  ))}
</div>

Levels:
15: £1,000,000
14: £500,000
13: £250,000
12: £125,000
11: £64,000
10: £32,000 ⭐ Safe Haven
9:  £16,000
8:  £8,000
7:  £4,000
6:  £2,000
5:  £1,000 ⭐ Safe Haven
4:  £500
3:  £300
2:  £200
1:  £100
```

### **Khung1Frame.tsx** (ACTIVE)
```
<div class="khung1-frame-container">
  └── <div class="khung1-frame-border">
      ├── <div class="corner-corner corner-tl">
      ├── <div class="corner-corner corner-tr">
      ├── <div class="corner-corner corner-bl">
      ├── <div class="corner-corner corner-br">
      └── <div class="khung1-content"> {children}
</div>

Specs:
- Padding: 40px (vertical), 80px (horizontal)
- Border: 2px solid gold gradient
- Background: Semi-transparent dark blue (rgba)
- Corners: 36px L-shaped lines + 10px dot
- Glow: Blue-purple + gold mix
- Animation: 3s subtle pulse
```

---

## 📏 DIMENSIONS REFERENCE

### **Text Sizes:**
- Page titles: 80px
- Section titles: 64px
- Sub-titles: 56px
- Large text: 48px
- Questions: 34px
- Body text: 24-28px
- Small text: 16-20px
- Tiny text: 14px

### **Button Sizes:**
- Primary (Menu): 440×64px
- Secondary: 300×50px
- Lifeline: 100×100px circle
- Letter badge: 48×48px circle

### **Logo Sizes:**
- Menu: 220px
- Form: 140px
- Introduction: 200px
- Gameplay: 140px
- End Win: 280px
- End Other: 180px
- Outro: 200px

### **Component Sizes:**
- Question Banner: 1180×160px
- Answer Box: 560×120px minimum
- Money Ladder: 280px width
- Frame padding: 40px × 80px
- Corner accents: 36px

---

## 🎨 COLOR PALETTE

### **Primary Colors:**
- Gold: #D4AF37 (primary)
- Light Gold: #FFE7A0 (text)
- Dark Gold: #8B7355 (shadows)
- Cool Gold: #C9A961 (harmonized)

### **Background Colors:**
- Deep Blue: #0f172a
- Mid Blue: #1e293b
- Dark Navy: #0A1A3A
- Purple Accent: #312e81

### **State Colors:**
- Correct: #10b981 (green)
- Wrong: #ef4444 (red)
- Warning: #f59e0b (amber)
- Selected: Gold gradient
- Disabled: Gray + 0.6 opacity

---

## 🎬 ANIMATIONS REFERENCE

### **Timing Functions:**
- Fast: 150ms
- Base: 250ms
- Slow: 350ms
- Smooth: 500ms

### **Common Animations:**
- fade-in: opacity 0 → 1 (0.5s ease-out)
- fade-in-glow: opacity 0 → 1 + glow (1s ease-out)
- scale-up: scale 1 → 1.05 (0.2s ease)
- pulse: opacity 1 ↔ 0.6 (2s infinite)
- shimmer: background-position sweep (1.5s infinite)

