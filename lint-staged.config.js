module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --max-warnings 0 --fix'],
  '**/*.{scss,css}': [
    'prettier --write',
    'stylelint --fix --allow-empty-input',
  ],
  '**/*.vue': [
    'prettier --write',
    'eslint --max-warnings 0 --fix',
    'stylelint --fix --allow-empty-input',
  ],
};
