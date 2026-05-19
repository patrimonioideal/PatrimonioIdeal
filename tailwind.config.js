/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#f7f2ec',
        'cream-dark': '#ede6db',
        ink:    '#1c0f2e',
        muted:  '#6b5379',
        pd:     '#7b4fa6',
        pm:     '#a67cc4',
        pl:     '#c9a8e0',
        pp:     '#f2a6d0',
        pb:     '#e879b8',
        pk:     '#c4518f',
        'col-y':'#ffd700',
        'col-b':'#003087',
        'col-r':'#ce1126',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body:    ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker':    'ticker 28s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'float-alt': 'float 8s ease-in-out infinite reverse',
        'fade-up':   'fadeUp 0.6s ease both',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(1deg)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
