/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",

        xanthous: "#E8B94B",
        lemonChiffon: "#FFF3CA", /*alternative to white*/
        taupe: "#483C32",
        olive: "#808000",

        coral: "#808000",
        blackCoffe: "#4B3621",
        BrunswickGreen: "#1E5C56",

        whiteSmoke: "#F5F5F5", /*245, 245, 245 */
        selectiveYellow: "#FFB300", /*255, 179, 0 */
        pigmentGreen: "#4CAF50", /*76, 175, 80    / blue:18, 181, 156 */
        transparantNavbar: "rgba(76, 175, 80, 1)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        amatic: ["Amatic SC", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
