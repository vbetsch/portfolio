import baseVbetsch from "@vbetsch/config-prettier";

export default {
  ...baseVbetsch,

  /* Overrides */
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
