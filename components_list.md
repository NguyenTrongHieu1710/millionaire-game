# 📋 DANH SÁCH COMPONENTS THEO TỪNG CẢNH - MILLIONAIRE GAME

## 🎮 GAME FLOW OVERVIEW
```
Menu → Intro Video → Welcome → Contestant Intro → Form → Transition Video 
→ Introduction → Gameplay → End → Outro → Menu
```

---

## 1️⃣ MenuScreen.tsx
**Cảnh**: Menu chính

**Components chính**:
- `<MillionaireLogo />` - Logo góc trên phải (200px)
- `<h1>MENU</h1>` - Tiêu đề
- `<MenuButton label="Play" primary />` - Nút Play chính
- `<MenuButton label="Settings" />` - Nút Settings
- `<MenuButton label="Reset game" />` - Nút Reset
- `<button>EXIT</button>` - Nút thoát

**Assets**:
- Background: `menu-background.png`
- Light rays animation
- Particles effect

**Lệnh điều chỉnh**: `"Chỉnh sửa MenuScreen - [mô tả]"`

---

## 2️⃣ VideoPlaceholder.tsx
**Cảnh**: Video intro/transition

**Components chính**:
- `<video>` element (nếu có videoSrc)
- Title + Subtitle text overlay
- Progress bar animation
- Skip button (bottom-right)

**Props**:
- `videoSrc` - URL video
- `duration` - 20s (intro) hoặc 6s (transition)
- `title`, `subtitle` - Text overlay

**Lệnh điều chỉnh**: `"Chỉnh sửa VideoPlaceholder - [mô tả]"`

---

## 3️⃣ WelcomeScreen.tsx
**Cảnh**: Màn hình chào mừng

**Components chính**:
- `<Khung1Frame>` - Khung vàng decorative
- `<h1>WELCOME TO</h1>` - Text chính
- Click hint (bottom)

**Phases**:
- Phase 1 (0-2s): Background only
- Phase 2 (2-5s): Text "WELCOME TO" với frame
- Phase 3 (5-5.5s): Fade out
- Auto-continue sau 5.5s

**Assets**:
- Background: `end-background.png`

**Lệnh điều chỉnh**: `"Chỉnh sửa WelcomeScreen - [mô tả]"`

---

## 4️⃣ ContestantIntroScreen.tsx
**Cảnh**: Giới thiệu thí sinh

**Components chính**:
- `<Khung1Frame>` - Khung vàng decorative
- `<h2>LET'S MEET TODAY'S CONTESTANT</h2>` - Text chính
- Click to continue hint

**Timing**:
- Auto-continue sau 3s
- Fade-in-glow animation

**Assets**:
- Background: `end-background.png`

**Lệnh điều chỉnh**: `"Chỉnh sửa ContestantIntroScreen - [mô tả]"`

---

## 5️⃣ ContestantForm.tsx
**Cảnh**: Form nhập thông tin

**Components chính**:
- `<MillionaireLogo />` - Logo top-center (140px)
- Form card với gradient background
- `<Field label="Name" />` - Input tên (auto-focus)
- `<Field label="Location" />` - Input địa chỉ
- `<button>Let's Play</button>` - Nút xuất hiện khi đủ info

**Validation**:
- Requires both name and location
- Button blinking animation khi ready

**Lệnh điều chỉnh**: `"Chỉnh sửa ContestantForm - [mô tả]"`

---

## 6️⃣ IntroductionScreen.tsx
**Cảnh**: Giới thiệu game với ladder và lifelines

**Components chính**:
- `<MillionaireLogo />` - Logo top-center (200px)
- Contestant name (64px) - Hiện sau 1s
- Location (28px, silver) - Hiện cùng name
- `<MoneyLadder />` - Right side, hiện sau 2s
- Lifelines icons (left side) - Hiện sau ladder

**Money Ladder**:
- 15 levels: £100 → £1,000,000
- Highlight animation từ dưới lên (300ms/level)
- Safe havens: Level 5 (£1,000), Level 10 (£32,000)

**Lifelines**:
- 50:50 icon
- Ask the Audience icon
- Double Dip icon
- Each: 100×100px circle, blue background

**Assets**:
- Purple stage spotlights

**Lệnh điều chỉnh**: `"Chỉnh sửa IntroductionScreen - [mô tả]"`

---

## 7️⃣ GameplayScreen.tsx
**Cảnh**: Màn hình chơi game chính

**Components chính**:
- `<MillionaireLogo />` - Top-right (140px)
- `<LifelinesBar />` - Top-left
- Walk Away button - Top-center
- Question Banner - Center-top (1180×160px)
- Answer Grid - Bottom (2×2)

**Sub-components**:

### LifelinesBar.tsx
- 3 lifeline buttons (100×100px circles)
- States: active, used (grayscale + opacity)
- Double Dip indicator

### AnswerBox.tsx
- Letter badge (A/B/C/D) - 48×48px circle
- Answer text (24px)
- States:
  - Default: Blue gradient
  - Selected: Gold
  - Correct: Green
  - Wrong: Red
  - Disabled: Gray + opacity

**Modals**:
- Final Answer Confirm (Yes/No)
- Ask the Audience (bar chart với %)

**Reveal Overlay**:
- "CORRECT!" (green) hoặc "WRONG" (red)

**Lệnh điều chỉnh**: 
- `"Chỉnh sửa GameplayScreen - [mô tả]"`
- `"Chỉnh sửa LifelinesBar - [mô tả]"`
- `"Chỉnh sửa AnswerBox - [mô tả]"`

---

## 8️⃣ EndScreen.tsx
**Cảnh**: Màn hình kết thúc (3 variants)

**Variants**:

### A. Walk Away
- Blue gradient background
- "COLLECT WINNINGS" badge (gold border)
- Text: "You walk away with"
- Amount (120px, gold)
- Logo (180px)
- Subtle confetti (60 pieces)

### B. Win (£1,000,000)
- Purple gradient background
- Heavy confetti (150 pieces)
- Light rays animation
- Logo (280px)
- "CONGRATULATIONS!" (60px)
- Amount (160px, gold, heavy glow)
- "YOU ARE A MILLIONAIRE!" (20px)

### C. Lose
- Dark red gradient background
- "GAME OVER" (80px, red)
- "You leave with" (28px)
- Amount (100px, gold)
- "Better luck next time!" (14px, gray)

**Lệnh điều chỉnh**: `"Chỉnh sửa EndScreen [variant] - [mô tả]"`

---

## 9️⃣ OutroScreen.tsx
**Cảnh**: Màn hình tạm biệt

**Components chính**:
- Dark gradient background
- `<MillionaireLogo />` (200px)
- "GOODBYE!" (80px, fade-in)
- "THANKS FOR PLAYING" (16px, gold, delayed fade-in)
- "CLICK TO RETURN TO MENU" hint

**Lệnh điều chỉnh**: `"Chỉnh sửa OutroScreen - [mô tả]"`

---

## 🎨 SHARED COMPONENTS

### MillionaireLogo.tsx
- Logo chính của game
- Sizes: 140px, 180px, 200px, 280px
- Asset: `Main Logo Cropped.png`

### MoneyLadder.tsx
- 15 levels display
- Highlight animation
- Safe haven indicators

### StageReveal.tsx
- Reveal overlay animation
- "CORRECT!" / "WRONG" display

---

## 🎨 FRAME COMPONENTS (cho WelcomeScreen & ContestantIntroScreen)

### Khung1Frame.tsx ⭐ ACTIVE
- Harmonized frame for dark background
- Cool gold with blue-purple tint
- Elegant L-shaped corners
- 40px × 80px padding

### BaroqueFrame.tsx (OLD)
- Baroque ornate style
- Not currently used

### GoldFrameComponent.tsx (OLD)
- Art deco geometric style
- Not currently used

---

## 📂 ASSETS REFERENCE

**Icons**:
- `Main Logo Cropped.png`
- `Fifty_Fifty.png`
- `Ask_the_Audience.png`
- `Double_Dip.png`

**Backgrounds**:
- `menu-background.png` - Menu & video placeholder
- `end-background.png` - Welcome, contestant intro, end screens

**Videos** (optional):
- `/videos/intro-background.mp4`

---

## 🎯 QUICK COMMAND TEMPLATES

```
"Chỉnh sửa [Component] - thay đổi [element] thành [value]"
"Điều chỉnh [Component] - thêm [feature]"
"Sửa [Component] - loại bỏ [element]"
"Refactor [Component] - [description]"
```

**Ví dụ**:
- "Chỉnh sửa WelcomeScreen - thay đổi text color thành #FFD700"
- "Điều chỉnh GameplayScreen - thêm timer countdown"
- "Sửa EndScreen - loại bỏ confetti animation"
- "Refactor AnswerBox - simplify hover effects"
