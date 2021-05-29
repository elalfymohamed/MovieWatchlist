module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  extends: "@parcel/config-default",
  transformers: {
    "*.{jpg,png,svg}": ["@parcel/transformer-raw"],
  },
};
