const rules = {
  'no-console': ['error', { allow: ['log', 'info', 'warn', 'error'] }],
  'multiline-ternary': 0,
  'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
}
const globals = {
  Interceptor: true,
  Memory: true,
  NativeFunction: true,
  ptr: true,
  rpc: true,
  send: true,
  recv: true,
}

module.exports = {
  extends: '@chatie',
  rules,
  globals,
}
