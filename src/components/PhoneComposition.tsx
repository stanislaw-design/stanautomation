import React from "react";
// Custom lightweight animations to avoid heavy "remotion" package
export const Easing = {
  cubic: (t: number) => t * t * t,
  out: (easingFn: (t: number) => number) => {
    return (t: number) => 1 - easingFn(1 - t);
  },
};

export function interpolate(
  value: number,
  inputRange: [number, number],
  outputRange: [number, number],
  options?: {
    extrapolateLeft?: "extend" | "clamp" | "identity";
    extrapolateRight?: "extend" | "clamp" | "identity";
    easing?: (t: number) => number;
  }
): number {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  const extrapolateLeft = options?.extrapolateLeft ?? "extend";
  const extrapolateRight = options?.extrapolateRight ?? "extend";
  const easing = options?.easing;

  if (value <= inputMin) {
    if (extrapolateLeft === "clamp") return outputMin;
    if (extrapolateLeft === "identity") return value;
  }

  if (value >= inputMax) {
    if (extrapolateRight === "clamp") return outputMax;
    if (extrapolateRight === "identity") return value;
  }

  let t = (value - inputMin) / (inputMax - inputMin);

  if (extrapolateLeft === "clamp" && t < 0) t = 0;
  if (extrapolateRight === "clamp" && t > 1) t = 1;

  if (easing) {
    t = easing(t);
  }

  return outputMin + t * (outputMax - outputMin);
}

export function spring({
  frame,
  fps = 30,
  config = {},
}: {
  frame: number;
  fps?: number;
  config?: { damping?: number; stiffness?: number; mass?: number };
}): number {
  const damping = config.damping ?? 22;
  const stiffness = config.stiffness ?? 120;
  const mass = config.mass ?? 1;

  const dt = 1 / fps;
  const subSteps = 10;
  const subDt = dt / subSteps;

  let x = 0;
  let v = 0;

  for (let f = 0; f < frame; f++) {
    for (let s = 0; s < subSteps; s++) {
      const force = -stiffness * (x - 1) - damping * v;
      const a = force / mass;
      v += a * subDt;
      x += v * subDt;
    }
  }

  return x;
}

const SEARCH_TEXT = "restauracje w trojmieście";

const PH_W = 330;
const PH_H = 654;
const SC_W = PH_W - 20;
const SC_H = PH_H - 26;

const T_MOVE1 = 22;
const T_SEARCH = 70;
const T_TAP1 = 72;
const T_TYPE = 82;
const T_END = T_TYPE + SEARCH_TEXT.length * 5;
const T_MOVE2 = T_END + 10;
const T_BTN = T_MOVE2 + 42;
const T_TAP2 = T_BTN;
const T_FADE = T_TAP2 + 6;
const T_IN = T_FADE + 28;

const FINGER_INIT = { x: 300, y: 570 };
const SEARCH_TARGET = { x: 165, y: 231 };
const BTN_TARGET = { x: 165, y: 293 };

const ease = Easing.out(Easing.cubic);

const StatusBar: React.FC<{ light?: boolean }> = ({ light }) => {
  const c = light ? "white" : "#111";
  return (
    <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 18px", fontSize: 11, fontWeight: 600, color: c, fontFamily: "Arial, sans-serif" }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="16" height="10" viewBox="0 0 16 10" fill={c}>
          <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
          <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
          <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
        </svg>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
          <rect x="0.5" y="0.5" width="16" height="9" rx="1.5" stroke={c} strokeWidth="1" />
          <rect x="2" y="2" width="10" height="6" rx="0.5" fill={c} />
          <path d="M17.5 3.5v3a1.5 1.5 0 000-3z" fill={c} />
        </svg>
      </div>
    </div>
  );
};

const ChromeBar: React.FC<{ url: string }> = ({ url }) => (
  <div style={{ height: 44, background: "#f2f2f2", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", padding: "0 10px", gap: 8, fontFamily: "Arial, sans-serif" }}>
    <span style={{ fontSize: 20, color: "#666", lineHeight: 1 }}>‹</span>
    <div style={{ flex: 1, height: 30, background: "#fff", borderRadius: 15, border: "1px solid #ddd", display: "flex", alignItems: "center", padding: "0 12px", gap: 5, fontSize: 12, color: "#444", overflow: "hidden" }}>
      <span style={{ fontSize: 11 }}>🔒</span>
      <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{url}</span>
    </div>
    <span style={{ fontSize: 18, color: "#666" }}>⋮</span>
  </div>
);

const GoogleMobilePage: React.FC<{ typedText: string; cursorOn: boolean; active: boolean }> = ({ typedText, cursorOn, active }) => (
  <div style={{ width: "100%", height: "100%", background: "white", fontFamily: "Arial, sans-serif" }}>
    <StatusBar />
    <ChromeBar url="google.com" />
    <div style={{ padding: "60px 14px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1, lineHeight: 1, marginBottom: 22 }}>
        <span style={{ color: "#4285F4" }}>G</span><span style={{ color: "#EA4335" }}>o</span>
        <span style={{ color: "#FBBC05" }}>o</span><span style={{ color: "#4285F4" }}>g</span>
        <span style={{ color: "#34A853" }}>l</span><span style={{ color: "#EA4335" }}>e</span>
      </div>
      <div style={{ width: "100%", height: 52, borderRadius: 26, border: active ? "2px solid #4285F4" : "1px solid #dfe1e5", boxShadow: active ? "0 1px 8px rgba(66,133,244,0.3)" : "0 1px 5px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", padding: "0 14px", gap: 10, background: "white" }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="#9aa0a6" strokeWidth="2" />
          <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: 17, color: "#202124", flex: 1, display: "flex", alignItems: "center", minHeight: 24 }}>
          {!typedText && !active && <span style={{ color: "#9aa0a6", fontSize: 15 }}>Szukaj lub wpisz URL</span>}
          {typedText}
          {cursorOn && <span style={{ display: "inline-block", width: 2, height: 20, background: "#4285F4", marginLeft: 1, verticalAlign: "middle" }} />}
        </span>
      </div>
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
        {["Szukaj Google", "Szczęście mi sprzyja"].map((label, i) => (
          <div key={i} style={{ height: 40, background: "#f8f9fa", border: "1px solid #f0f0f0", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#3c4043" }}>
            {label}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const RestfroMobilePage: React.FC = () => (
  <div style={{ width: "100%", height: "100%", background: "#0d0d0d", color: "white", display: "flex", flexDirection: "column", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
    <div style={{ background: "#000", flexShrink: 0 }}><StatusBar light /></div>
    <ChromeBar url="restfro.pl" />
    <div style={{ height: 50, flexShrink: 0, background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: 3 }}>RESTFRO</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {[0, 1, 2].map(i => <div key={i} style={{ width: 20, height: 1.5, background: "white", borderRadius: 1 }} />)}
      </div>
    </div>
    <div style={{ flex: 1, background: "radial-gradient(ellipse at 68% 28%, #7c3d15 0%, #4a2208 22%, #1a0e05 52%, #050505 100%)", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 24px 44px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.55) 100%)", pointerEvents: "none" }} />
      <div style={{ zIndex: 2, fontSize: 9, letterSpacing: 4, color: "rgba(255,255,255,0.45)", marginBottom: 14, textTransform: "uppercase" }}>
        Refined Cuisine · Gdańsk · Trójmiasto
      </div>
      <div style={{ zIndex: 2, marginBottom: 16 }}>
        <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.5 }}>TWOJA</div>
        <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1, letterSpacing: -0.5 }}>RESTAURACJA</div>
      </div>
      <div style={{ zIndex: 2, fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: 26, maxWidth: 240 }}>
        Refined cuisine & stellar service in the heart of Trójmiasto.
      </div>
      <div style={{ zIndex: 2, display: "flex", gap: 10 }}>
        <div style={{ padding: "11px 20px", background: "white", color: "#0d0d0d", fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>DISCOVER</div>
        <div style={{ padding: "11px 20px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: 11, letterSpacing: 2 }}>RESERVE</div>
      </div>
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 100, height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 2, zIndex: 10 }} />
    </div>
  </div>
);

export const PhoneFrame: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const enterSpring = spring({ frame, fps, config: { damping: 22, stiffness: 120 } });
  const phoneScale = interpolate(Math.min(enterSpring, 1), [0, 1], [0.86, 1]);
  const phoneOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });

  const p1 = interpolate(frame, [T_MOVE1, T_SEARCH], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const p2 = interpolate(frame, [T_MOVE2, T_BTN], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });

  let fx: number, fy: number;
  if (frame < T_MOVE1) {
    fx = FINGER_INIT.x; fy = FINGER_INIT.y;
  } else if (frame < T_MOVE2) {
    fx = interpolate(p1, [0, 1], [FINGER_INIT.x, SEARCH_TARGET.x]);
    fy = interpolate(p1, [0, 1], [FINGER_INIT.y, SEARCH_TARGET.y]);
  } else {
    fx = interpolate(p2, [0, 1], [SEARCH_TARGET.x, BTN_TARGET.x]);
    fy = interpolate(p2, [0, 1], [SEARCH_TARGET.y, BTN_TARGET.y]);
  }

  const pressing1 = frame >= T_TAP1 && frame < T_TAP1 + 10;
  const pressing2 = frame >= T_TAP2 && frame < T_TAP2 + 10;

  const dotOpacity =
    frame < T_TAP1 ? 1
    : frame < T_TAP1 + 8 ? interpolate(frame, [T_TAP1, T_TAP1 + 8], [1, 0])
    : frame < T_MOVE2 ? 0
    : frame < T_MOVE2 + 8 ? interpolate(frame, [T_MOVE2, T_MOVE2 + 8], [0, 1])
    : frame < T_TAP2 + 8 ? interpolate(frame, [T_TAP2, T_TAP2 + 8], [1, 0], { extrapolateLeft: "clamp" })
    : 0;

  const charsVisible = frame >= T_TYPE ? Math.min(Math.floor((frame - T_TYPE) / 5), SEARCH_TEXT.length) : 0;
  const typedText = SEARCH_TEXT.slice(0, charsVisible);
  const showCursor = frame >= T_TAP1 && frame < T_FADE;
  const blinkOn = Math.floor(frame / 15) % 2 === 0;

  const googleOp = frame < T_FADE ? 1 : interpolate(frame, [T_FADE, T_FADE + 18], [1, 0], { extrapolateRight: "clamp" });
  const siteOp = interpolate(frame, [T_FADE + 6, T_IN], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "relative", width: PH_W, height: PH_H }}>
      {/* Phone */}
      <div style={{ position: "absolute", left: 0, top: 0, width: PH_W, height: PH_H, opacity: phoneOp, transform: `scale(${phoneScale})`, transformOrigin: "center center" }}>
        {/* Shadow */}
        <div style={{ position: "absolute", inset: -4, borderRadius: 54, boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)" }} />
        {/* Body */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #2c2c30 0%, #1c1c1e 50%, #131315 100%)", borderRadius: 48, border: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ position: "absolute", left: -3, top: 100, width: 3, height: 26, background: "#252527", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", left: -3, top: 138, width: 3, height: 26, background: "#252527", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", right: -3, top: 116, width: 3, height: 44, background: "#252527", borderRadius: "0 2px 2px 0" }} />
        </div>
        {/* Screen */}
        <div style={{ position: "absolute", left: 10, top: 13, width: SC_W, height: SC_H, borderRadius: 36, overflow: "hidden", background: "white" }}>
          {/* Dynamic island */}
          <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 100, height: 28, background: "#000", borderRadius: 14, zIndex: 50 }} />
          <div style={{ position: "absolute", inset: 0, opacity: googleOp }}>
            <GoogleMobilePage typedText={typedText} cursorOn={showCursor && blinkOn} active={frame >= T_TAP1} />
          </div>
          {frame >= T_FADE && (
            <div style={{ position: "absolute", inset: 0, opacity: siteOp }}>
              <RestfroMobilePage />
            </div>
          )}
        </div>
      </div>
      {/* Touch dot */}
      <div style={{ position: "absolute", left: fx - 16, top: fy - 16, width: 32, height: 32, borderRadius: "50%", background: (pressing1 || pressing2) ? "rgba(0,0,0,0.38)" : "rgba(20,20,20,0.22)", border: "1.5px solid rgba(0,0,0,0.35)", pointerEvents: "none", zIndex: 200, opacity: dotOpacity }} />
    </div>
  );
};
