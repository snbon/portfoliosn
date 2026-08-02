module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // bold + experimental palette: near black canvas, acid accent
        ink: '#070707',
        paper: '#f4f2ec',
        accent: '#d7ff3f',
        muted: '#8a8a8a',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

