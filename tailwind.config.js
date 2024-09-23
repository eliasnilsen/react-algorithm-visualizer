

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        antiflashWhite: "#EFEFEF",
        richBlack: "#030D11",
        tiffanyBlue: "#93E1D8",
        darkPurple: "#210124",
        columbiaBlue: "#88CCF1",
        mintCream: "#F0F7EE",
        palatinateBlue: "#1E2EDE",
        cherryBlossomPink: "#FBACBE",
        jet: "#373737",
        vanilla: "#F5EE9E",
        uranianBlue: "#B8E1FF",
        darkSlateGray: "#1E585C"
      },
      animation: {
        createWall: "createWall 350ms ease",
        traverseTile: "traverseTile 350ms ease",
        pathTile: "pathTile 350ms ease"
      },
      keyframes: {
        createWall: {
          "0%":{
            transform: "scale(0)",
            borderRadius: "100%"
          },
          "50%":{transform:"scale(1.175)"},
          "100%":{
            transform: "scale(1)"
          },
        },
        traverseTile: {
          "0%": {
            transform: "scale(0)",
            backgroundColor: "#F0F7EE",
            borderRadius: "100%"
          },
          "50%": {
            transform: "scale(1.175)",
            backgroundColor: "#93E1D8",
          },
          "100%": {
            transform: "scale(1)",
            backgroundColor: "#B8E1FF", //uranianBlue
          }
        },
        pathTile: {
          "0%": {
            backgroundColor: "#B8E1FF", //uranianBlue
            borderRadius: "100%"
          },
          "50%": {
            backgroundColor: "#FBACBE", //cherryBlossomPink
          },
          "100%": {
            backgroundColor: "#F5EE9E", //vanilla
          }
        }
      }
    },
  },
  plugins: [],
}