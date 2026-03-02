import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CharacterMascot } from './CharacterMascot';

emailjs.init("4SYMi98c8zlBSQXnp");

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconPieChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

// ─── Phone Mockup Shell ────────────────────────────────────────────────────────

function PhoneMockup({ children, gradient }: { children: React.ReactNode; gradient: string }) {
  return (
    <div className="relative mx-auto" style={{ width: 220, height: 420 }}>
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 rounded-[2.5rem] blur-2xl opacity-30 scale-90"
        style={{ background: gradient }}
      />
      {/* Phone frame */}
      <div
        className="relative w-full h-full rounded-[2.5rem] border-2 overflow-hidden flex flex-col"
        style={{
          background: '#0a0e1a',
          borderColor: '#2a3147',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-20 h-1.5 rounded-full bg-dark-border" />
        </div>
        {/* Screen content */}
        <div className="flex-1 overflow-hidden px-3 pb-3">
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: 'Alex M.',
    role: 'Software Engineer',
    avatar: '👨‍💻',
    stars: 5,
    text: 'I used to end the week wondering where my time went. Now I set intentions every Sunday and actually follow through. The energy tracking changed how I plan my deep work blocks.',
  },
  {
    name: 'Sarah K.',
    role: 'Designer & Freelancer',
    avatar: '👩‍🎨',
    stars: 5,
    text: 'The balance wheel is eye-opening. I realized I was spending 80% of my time on work and basically zero on hobbies. Two months in, things feel so much more balanced.',
  },
  {
    name: 'Marcus T.',
    role: 'Product Manager',
    avatar: '🧑‍💼',
    stars: 5,
    text: 'Love how the little character reflects my energy. Seeing it exhausted was enough motivation to finally log off at a reasonable time. The reflection after each session is a game changer.',
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: <IconBolt />,
    title: 'Energy Tracking',
    desc: 'Start each day by logging your energy level. The app learns when you\'re at your peak and helps you schedule accordingly.',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    icon: <IconTarget />,
    title: 'Intentional Planning',
    desc: 'Set weekly intentions across all life areas — work, sport, family, hobbies. Know what matters before the week starts.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: <IconClock />,
    title: 'Session Tracking',
    desc: 'Timed focus sessions with pause/resume. Rate how you felt — interest, boredom, anxiety — to understand your patterns.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: <IconPieChart />,
    title: 'Balance Wheel',
    desc: 'A visual snapshot of how balanced your week was. Instantly see which areas got attention and which were neglected.',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.1)',
    border: 'rgba(16,185,129,0.2)',
  },
];

// ─── Wheel of Life Data ───────────────────────────────────────────────────────

const LIFE_AREAS = [
  {
    id: 'work', label: 'Work', color: '#3b82f6', pct: 0.75, icon: '💼',
    defaultEnergyType: 'drains' as const,
    inspires: 'When work feels meaningful, it\'s your biggest fuel source — flow state, purpose, the satisfaction of building something real.',
    drains: 'When work is obligation-driven or misaligned, it quietly hollows you out. High hours don\'t always mean high energy return.',
  },
  {
    id: 'sport', label: 'Sport', color: '#10b981', pct: 0.40, icon: '🏃',
    defaultEnergyType: 'inspires' as const,
    inspires: 'Movement you love restores you physically and mentally. It clears the fog, resets your mood, and builds long-term resilience.',
    drains: 'Forced routines or sport as punishment drain willpower without giving much back. It\'s not the activity — it\'s your relationship with it.',
  },
  {
    id: 'hobby', label: 'Hobby', color: '#8b5cf6', pct: 0.20, icon: '🎨',
    defaultEnergyType: 'inspires' as const,
    inspires: 'Creative play is the soul\'s recharge. Hobbies done for pure enjoyment refill the tank that everything else draws from.',
    drains: 'When a hobby becomes a side hustle or obligation, the joy drains out. What used to restore now feels like another task.',
  },
  {
    id: 'startup', label: 'Startup', color: '#f97316', pct: 0.60, icon: '🚀',
    defaultEnergyType: 'inspires' as const,
    inspires: 'Building your own thing is one of the most energizing pursuits — autonomy, vision, the thrill of making something from nothing.',
    drains: 'Stagnation, pressure, or grinding without traction turns startup energy into chronic depletion fast.',
  },
  {
    id: 'studying', label: 'Studying', color: '#f59e0b', pct: 0.65, icon: '📚',
    defaultEnergyType: 'inspires' as const,
    inspires: 'Learning something you chose fires up curiosity and keeps your mind expanding. Growth feels like momentum.',
    drains: 'Studying under pressure or out of obligation flips it into a grind. When the "why" is external, the energy cost is high.',
  },
  {
    id: 'recovery', label: 'Recovery', color: '#06b6d4', pct: 0.35, icon: '🧘',
    defaultEnergyType: 'drains' as const,
    inspires: 'Intentional rest fills your tank. Sleep, stillness, nature — real recovery makes everything else perform better.',
    drains: 'Passive "rest" — scrolling, Netflix without intention — can leave you more depleted than before. Not all downtime is recovery.',
  },
];

// ─── How it works ─────────────────────────────────────────────────────────────

const STEPS = [
  {
    step: '01',
    title: 'Set your intention',
    desc: 'Every week, decide how many hours you want to invest in each area of your life — work, health, creativity, relationships.',
    color: '#8b5cf6',
  },
  {
    step: '02',
    title: 'Track with energy',
    desc: 'Log your daily energy, start timed sessions, and reflect on how you felt. The app builds a picture of your rhythms.',
    color: '#3b82f6',
  },
  {
    step: '03',
    title: 'See your balance',
    desc: 'Review the weekly balance wheel. Adjust next week\'s intentions. Small, consistent iterations lead to a life that feels right.',
    color: '#10b981',
  },
];

// ─── Animated counter ─────────────────────────────────────────────────────────

function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + step;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-white">{count.toLocaleString()}+</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

// ─── Waitlist Form ────────────────────────────────────────────────────────────

function WaitlistForm({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError('');

    try {
      await emailjs.send("service_dbcalgi", "template_l21ckqw", {
        user_email: email,
      });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputPy = size === 'lg' ? 'py-4' : size === 'sm' ? 'py-2.5' : 'py-3';
  const inputPx = size === 'lg' ? 'px-6' : size === 'sm' ? 'px-4' : 'px-5';
  const btnPy = size === 'lg' ? 'py-4' : size === 'sm' ? 'py-2.5' : 'py-3';
  const btnPx = size === 'lg' ? 'px-8' : size === 'sm' ? 'px-5' : 'px-6';
  const textSz = size === 'lg' ? 'text-base' : size === 'sm' ? 'text-sm' : 'text-sm';

  if (submitted) {
    return (
      <div
        className={`inline-flex items-center gap-3 rounded-full ${inputPx} ${inputPy} font-semibold ${textSz}`}
        style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399' }}
      >
        <span className="text-accent-green"><IconCheck /></span>
        You're on the list! We'll be in touch.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex items-stretch gap-2">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={loading}
          className={`flex-1 min-w-0 rounded-full ${inputPx} ${inputPy} ${textSz} text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-accent-purple/50 transition-all disabled:opacity-60`}
          style={{ background: 'rgba(26,31,53,0.9)', border: '1px solid rgba(42,49,71,0.8)' }}
        />
        <button
          type="submit"
          disabled={loading}
          className={`flex-shrink-0 inline-flex items-center gap-2 rounded-full ${btnPx} ${btnPy} font-bold text-white ${textSz} transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100`}
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 6px 24px rgba(139,92,246,0.4)',
          }}
        >
          {loading ? 'Sending…' : <>Join the waitlist <IconArrow /></>}
        </button>
      </form>
      {error && <p className={`text-red-400 ${textSz} pl-2`}>{error}</p>}
    </div>
  );
}

// ─── Wheel of Life Interactive Component ──────────────────────────────────────

function WheelOfLife() {
  // selected persists on click; hovered is only for visual highlighting
  const [selected, setSelected] = useState<string>('work');
  const [hovered, setHovered] = useState<string | null>(null);
  const [energyStates, setEnergyStates] = useState<Record<string, 'inspires' | 'drains'>>(() =>
    Object.fromEntries(LIFE_AREAS.map(a => [a.id, a.defaultEnergyType]))
  );

  const cx = 130, cy = 130, maxR = 105, minR = 22;
  const angleStep = (2 * Math.PI) / LIFE_AREAS.length;
  const gap = 0.07;

  const arcs = LIFE_AREAS.map((area, i) => {
    const startAngle = i * angleStep - Math.PI / 2;
    const endAngle = startAngle + angleStep - gap;
    const midAngle = (startAngle + endAngle) / 2;
    const outerR = minR + area.pct * (maxR - minR);
    const x1 = cx + minR * Math.cos(startAngle);
    const y1 = cy + minR * Math.sin(startAngle);
    const x2 = cx + outerR * Math.cos(startAngle);
    const y2 = cy + outerR * Math.sin(startAngle);
    const x3 = cx + outerR * Math.cos(endAngle);
    const y3 = cy + outerR * Math.sin(endAngle);
    const x4 = cx + minR * Math.cos(endAngle);
    const y4 = cy + minR * Math.sin(endAngle);
    return {
      ...area,
      d: `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${minR} ${minR} 0 0 0 ${x1} ${y1} Z`,
      midAngle,
    };
  });

  const toggleEnergy = (id: string) => {
    setEnergyStates(prev => ({ ...prev, [id]: prev[id] === 'inspires' ? 'drains' : 'inspires' }));
  };

  // what's visually "active": hover takes priority, otherwise selected
  const activeId = hovered ?? selected;
  const active = LIFE_AREAS.find(a => a.id === activeId)!;
  const activeEnergy = energyStates[activeId];
  const energyColor = (id: string) => energyStates[id] === 'inspires' ? '#34d399' : '#f87171';

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

      {/* SVG Wheel */}
      <div className="flex-shrink-0 flex flex-col items-center gap-4">
        <svg viewBox="0 0 260 260" className="w-64 h-64 md:w-72 md:h-72">
          {[0.25, 0.5, 0.75, 1.0].map((frac, i) => (
            <circle key={i} cx={cx} cy={cy}
              r={minR + frac * (maxR - minR)}
              fill="none" stroke="#2a3147"
              strokeWidth={i === 3 ? 1 : 0.5}
              strokeDasharray={i < 3 ? '2 5' : undefined} />
          ))}
          {arcs.map((arc) => {
            const isActive = activeId === arc.id;
            const isSelected = selected === arc.id;
            const eColor = energyColor(arc.id);
            return (
              <g key={arc.id} style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHovered(arc.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(arc.id)}>
                <path
                  d={arc.d}
                  fill={arc.color}
                  opacity={isActive ? 1 : 0.3}
                  style={{
                    transition: 'opacity 0.2s, filter 0.2s',
                    filter: isActive ? `drop-shadow(0 0 8px ${arc.color}90)` : 'none',
                  }}
                />
                {/* Selected ring */}
                {isSelected && (
                  <path d={arc.d} fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
                )}
                <circle
                  cx={cx + (minR + arc.pct * (maxR - minR) - 6) * Math.cos(arc.midAngle)}
                  cy={cy + (minR + arc.pct * (maxR - minR) - 6) * Math.sin(arc.midAngle)}
                  r="4" fill={eColor}
                  opacity={isActive ? 0.95 : 0.3}
                  style={{ transition: 'opacity 0.2s' }}
                />
                <text
                  x={cx + (minR + arc.pct * (maxR - minR) * 0.45) * Math.cos(arc.midAngle)}
                  y={cy + (minR + arc.pct * (maxR - minR) * 0.45) * Math.sin(arc.midAngle) + 4}
                  textAnchor="middle" fontSize="11"
                  opacity={isActive ? 1 : 0.3}
                  style={{ transition: 'opacity 0.2s' }}>
                  {arc.icon}
                </text>
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r={minR - 2} fill="#0a0e1a" />
          <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{Math.round(active.pct * 10)}/10</text>
          <text x={cx} y={cy + 9} textAnchor="middle" fill="#9ca3af" fontSize="7">score</text>
        </svg>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#34d399]" />
            <span className="text-[10px] text-gray-500">Gives energy</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#f87171]" />
            <span className="text-[10px] text-gray-500">Drains energy</span>
          </div>
        </div>
      </div>

      {/* Area list + detail */}
      <div className="flex-1 min-w-0 flex flex-col gap-3">

        {/* Detail box — always shows the selected area, never shifts layout */}
        <div className="rounded-2xl p-4"
          style={{
            minHeight: '148px',
            background: `${active.color}12`,
            border: `1px solid ${active.color}40`,
            transition: 'background 0.2s, border-color 0.2s',
          }}>
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-0.5">{active.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <p className="font-bold text-white">{active.label}</p>
                <button
                  onClick={() => toggleEnergy(active.id)}
                  className="text-xs px-2 py-0.5 rounded-full font-semibold transition-all hover:opacity-80"
                  style={{
                    background: activeEnergy === 'inspires' ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
                    color: activeEnergy === 'inspires' ? '#34d399' : '#f87171',
                    border: `1px solid ${activeEnergy === 'inspires' ? 'rgba(52,211,153,0.3)' : 'rgba(248,113,113,0.3)'}`,
                  }}>
                  {activeEnergy === 'inspires' ? '⚡ Gives energy' : '🔋 Drains energy'} · flip
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${active.pct * 100}%`, background: active.color }} />
                </div>
                <span className="text-xs font-bold flex-shrink-0" style={{ color: active.color }}>{Math.round(active.pct * 10)}/10</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {activeEnergy === 'inspires' ? active.inspires : active.drains}
              </p>
            </div>
          </div>
        </div>

        {/* Area cards — click to select, hover previews */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {LIFE_AREAS.map((area) => {
            const isSelected = selected === area.id;
            const isHov = hovered === area.id;
            const eColor = energyColor(area.id);
            return (
              <div key={area.id}
                className="flex items-center gap-2 p-2.5 rounded-xl cursor-pointer transition-colors duration-150"
                style={{
                  background: isSelected ? `${area.color}20` : isHov ? `${area.color}10` : 'rgba(26,31,53,0.6)',
                  border: `1px solid ${isSelected ? area.color + '60' : isHov ? area.color + '30' : '#2a3147'}`,
                }}
                onMouseEnter={() => setHovered(area.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(area.id)}>
                <span className="text-base flex-shrink-0">{area.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">{area.label}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${area.pct * 100}%`, background: area.color }} />
                    </div>
                    <span className="text-[9px] font-bold flex-shrink-0" style={{ color: eColor }}>{energyStates[area.id] === 'inspires' ? '⚡' : '🔋'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

// ─── Main Landing Page ────────────────────────────────────────────────────────

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#0a0e1a' }}>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: 'rgba(10,14,26,0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(42,49,71,0.5)',
        }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="10" cy="10" r="7" />
                <ellipse cx="10" cy="10" rx="3.5" ry="7" />
                <line x1="3" y1="10" x2="17" y2="10" />
              </svg>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">SferoLife</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#balance" className="hover:text-white transition-colors">Balance</a>
          <a href="#characters" className="hover:text-white transition-colors">Characters</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
        </div>

        <button
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
        >
          Open App <IconArrow />
        </button>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(o => !o)}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden px-6 py-4 flex flex-col gap-3"
          style={{ background: 'rgba(10,14,26,0.97)', borderBottom: '1px solid #2a3147' }}>
          {['Features', 'How it works', 'Balance', 'Characters', 'Reviews'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-white py-2 border-b border-dark-border"
              onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-2 py-3 rounded-full font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
            Open App
          </button>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)' }} />
          {/* Stars */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
                Your personal energy compass
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                Plan with{' '}
                <span className="relative inline-block">
                  <span style={{
                    background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    intention.
                  </span>
                </span>
                <br />
                Track your{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #34d399, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  energy.
                </span>
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                SferoLife helps you design weeks that actually matter — by aligning what you do with how much energy you have. No more burnout. No more wasted potential.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
                  }}
                >
                  Start for free <IconArrow />
                </button>
                <p className="text-sm text-gray-500">No account needed · PWA · Works offline</p>
              </div>

              {/* Benefit list */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
                {['Energy-aware scheduling', 'Balance across life areas', 'Reflection & insights'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-accent-green flex-shrink-0"><IconCheck /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mascot */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 scale-125 rounded-full opacity-30 blur-3xl"
                  style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)' }} />
                <div className="relative" style={{ width: 180, height: 220 }}>
                  <CharacterMascot energy={9} size="large" showSublabel />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                {[
                  { label: 'Sessions', value: '1,240+' },
                  { label: 'Avg energy', value: '7.5/10' },
                ].map((stat, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl"
                    style={{ background: 'rgba(26,31,53,0.8)', border: '1px solid #2a3147' }}>
                    <p className="text-base font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-12 px-6" style={{ background: 'rgba(26,31,53,0.5)', borderTop: '1px solid #2a3147', borderBottom: '1px solid #2a3147' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter target={1200} label="Sessions tracked" />
          <StatCounter target={100} label="Hours reclaimed" />
          <StatCounter target={93} label="Satisfaction rate %" />
          <StatCounter target={6} label="Life areas balanced" />
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#8b5cf6' }}>Core Features</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Everything you need to thrive</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Four interconnected tools that give you a complete picture of how you spend your time and energy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: f.bg,
                  border: `1px solid ${f.border}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: f.bg, border: `1px solid ${f.border}`, color: f.color }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${f.color}40` }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section id="how-it-works" className="py-24 px-6" style={{ background: 'rgba(26,31,53,0.3)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#10b981' }}>The Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Three steps to a better week</h2>
            <p className="text-gray-400 max-w-xl mx-auto">A simple ritual that compounds over time into a life that feels aligned and energized.</p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #2a3147 20%, #2a3147 80%, transparent)' }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center md:items-center relative">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                      border: `2px solid ${step.color}40`,
                      color: step.color,
                      boxShadow: `0 0 30px ${step.color}20`,
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wheel of Life ── */}
      <section id="balance" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#10b981' }}>Life Balance</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Wheel of Life</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              See which areas give you energy and which quietly drain it — then design your weeks around that truth.
            </p>
          </div>

          {/* 3 context cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: '⚡',
                title: 'Gives energy',
                desc: 'Some areas fill your tank — they give meaning, joy, and vitality. Protect them and invest intentionally.',
                color: '#10b981',
                bg: 'rgba(16,185,129,0.08)',
                border: 'rgba(16,185,129,0.2)',
              },
              {
                icon: '🔋',
                title: 'Drains energy',
                desc: 'Other areas feel like obligations. Unacknowledged drains silently erode your baseline energy day after day.',
                color: '#f87171',
                bg: 'rgba(248,113,113,0.08)',
                border: 'rgba(248,113,113,0.2)',
              },
              {
                icon: '🎯',
                title: 'Find your balance',
                desc: 'When your time matches your values, you stop feeling the gap between who you are and who you want to be.',
                color: '#a78bfa',
                bg: 'rgba(167,139,250,0.08)',
                border: 'rgba(167,139,250,0.2)',
              },
            ].map((card, i) => (
              <div key={i} className="rounded-2xl p-5"
                style={{ background: card.bg, border: `1px solid ${card.border}` }}>
                <div className="text-2xl mb-3">{card.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-12"
            style={{ background: 'rgba(26,31,53,0.5)', border: '1px solid #2a3147' }}>
            <WheelOfLife />
          </div>

        </div>
      </section>

      {/* ── App Screenshots ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#3b82f6' }}>The App</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Beautifully simple. Deeply useful.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Designed for your phone — add to home screen and open it in seconds every morning.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-10">
            {/* Screen 1 */}
            <div className="flex flex-col items-center gap-4">
              <PhoneMockup gradient="linear-gradient(135deg, #06b6d4, #3b82f6)">
                <img
                  src="/phone6.jpg"
                  alt="App screenshot"
                  className="w-full h-full object-cover object-top rounded-[2rem]"
                />
              </PhoneMockup>
              <p className="text-sm text-gray-400 font-medium">Daily energy & tasks</p>
            </div>

            {/* Screen 2 — center, slightly larger */}
            <div className="flex flex-col items-center gap-4 md:-mt-8">
              <PhoneMockup gradient="linear-gradient(135deg, #8b5cf6, #ec4899)">
                <img
                  src="/phone5.jpg"
                  alt="App screenshot"
                  className="w-full h-full object-cover object-top rounded-[2rem]"
                />
              </PhoneMockup>
              <p className="text-sm text-gray-400 font-medium">Weekly balance wheel</p>
            </div>

            {/* Screen 3 */}
            <div className="flex flex-col items-center gap-4">
              <PhoneMockup gradient="linear-gradient(135deg, #3b82f6, #10b981)">
                <img
                  src="/phone4.jpg"
                  alt="App screenshot"
                  className="w-full h-full object-cover object-top rounded-[2rem]"
                />
              </PhoneMockup>
              <p className="text-sm text-gray-400 font-medium">Focus sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Characters Showcase ── */}
      <section id="characters" className="py-24 px-6" style={{ background: 'rgba(26,31,53,0.4)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ec4899' }}>Your Companion</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">A character that reflects how you feel</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your mascot changes based on your energy level and what you're working on. It's a gentle, honest mirror — and sometimes the nudge you need to take a break.
            </p>
          </div>

          {/* Mood states */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { energy: 9, label: 'Inspired', desc: 'High energy, peak focus, deep flow state', color: '#34d399' },
              { energy: 7, label: 'Happy', desc: 'Feeling good, productive and motivated', color: '#a78bfa' },
              { energy: 4, label: 'Tired', desc: 'Low energy, time to rest and recharge', color: '#fbbf24' },
              { energy: 1, label: 'Exhausted', desc: 'Recovery mode — be gentle with yourself', color: '#f87171' },
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'rgba(26,31,53,0.7)', border: '1px solid #2a3147' }}>
                <div className="h-40 flex items-center justify-center">
                  <CharacterMascot energy={m.energy} size="compact" showSublabel />
                </div>
                <p className="font-bold mt-3 mb-1" style={{ color: m.color }}>{m.label}</p>
                <p className="text-xs text-gray-500 leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Session type characters */}
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#a78bfa' }}>Session Modes</p>
            <h3 className="text-2xl font-bold text-white">Your companion adapts to what you're doing</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { sessionType: 'work' as const, energy: 7, label: 'Work Mode', desc: 'Focused, determined, briefcase in hand', color: '#60a5fa' },
              { sessionType: 'study' as const, energy: 7, label: 'Study Time', desc: 'Curious and ready to learn', color: '#fde047' },
              { sessionType: 'sport' as const, energy: 8, label: 'Active!', desc: 'Energized and on the move', color: '#4ade80' },
              { sessionType: 'hobby' as const, energy: 8, label: 'Hobby Time', desc: 'Creative, playful and free', color: '#d946ef' },
            ].map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'rgba(26,31,53,0.7)', border: '1px solid #2a3147' }}>
                <div className="h-40 flex items-center justify-center">
                  <CharacterMascot energy={m.energy} sessionType={m.sessionType} size="compact" showSublabel />
                </div>
                <p className="font-bold mt-3 mb-1" style={{ color: m.color }}>{m.label}</p>
                <p className="text-xs text-gray-500 leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#f59e0b' }}>Reviews</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">People love their new rhythm</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Real stories from people who shifted from reactive to intentional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col gap-4 transition-all hover:scale-[1.02]"
                style={{ background: '#1a1f35', border: '1px solid #2a3147' }}>
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.stars }).map((_, j) => <IconStar key={j} />)}
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-300 leading-relaxed flex-1">"{t.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-dark-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{ background: 'rgba(42,49,71,0.8)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-gray-600">
                    <IconHeart />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 px-6" id="waitlist">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.2))', border: '1px solid rgba(139,92,246,0.3)' }}>
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
            </div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <CharacterMascot energy={9} size="large" />
              </div>

              <div className="inline-flex items-center gap-2 bg-accent-purple/20 border border-accent-purple/40 rounded-full px-4 py-1.5 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                <span className="text-sm font-semibold text-accent-purple tracking-wide uppercase">Beta — Early Access</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                SferoLife is in beta testing
              </h2>
              <p className="text-gray-400 mb-3 max-w-lg mx-auto">
                We're opening the doors to a limited group of early birds. Join the waitlist to get access before everyone else.
              </p>
              <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto">
                No app store, no sign-up fees, no data sent anywhere — your data stays on your device.
              </p>

              <div className="flex justify-center w-full max-w-lg mx-auto">
                <WaitlistForm size="lg" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
                {['100% free', 'Works offline', 'Private by default', 'PWA — install to home screen'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-accent-green"><IconCheck /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6" style={{ borderTop: '1px solid #2a3147' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
              <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" stroke="white" strokeWidth="1.5">
                <circle cx="10" cy="10" r="7" />
                <ellipse cx="10" cy="10" rx="3.5" ry="7" />
                <line x1="3" y1="10" x2="17" y2="10" />
              </svg>
            </div>
            <span className="text-white font-bold">SferoLife</span>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Built for those who believe how you spend your days is how you spend your life.
          </p>

          <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-500 hover:text-white transition-colors">
            Open App →
          </button>
        </div>
      </footer>
    </div>
  );
}
