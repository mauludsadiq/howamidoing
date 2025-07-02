const emotions = {
  "happy": 0,
  "sad": 15,
  "angry": 13,
  "calm": 6,
  "excited": 5,
  "jealous": 16,
  "afraid": 9,
  "hopeful": 4,
  "confused": 12,
  "bored": 15,
  "inspired": 7,
  "lonely": 15,
  "curious": 8
};
function getColorForEmotion(emotionId, typingSpeed) {
  const base = emotionColors[emotionId];
  // Typing speed range: 0-100+ words per minute (or another metric you choose)
  // Map speed to a lightness adjustment:
  // slow typing -> lighter (l +10), fast typing -> darker (l -10)
  const speedFactor = Math.max(0, Math.min(typingSpeed, 100)) / 100; // 0..1
  const intensityShift = (0.5 - speedFactor) * 20; // shift by ±10
  const adjustedL = Math.max(10, Math.min(90, base.l + intensityShift));
  return `hsl(${base.h}, ${base.s}%, ${adjustedL}%)`;
}
const color = getColorForEmotion(5, typingSpeed); // get color for excitement
colorBox.style.backgroundColor = color;
