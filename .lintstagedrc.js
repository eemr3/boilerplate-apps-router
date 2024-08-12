module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npm test -- --findRelatedTests ${filenames.join(' ')}`,
  ],
};
