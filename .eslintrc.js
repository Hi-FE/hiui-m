module.exports = {
  root: false,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    "comma-dangle": 'off',
    "space-infix-ops": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}