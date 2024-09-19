# React + TypeScript + Vite


Project Setup

- yarn
- yarn dev

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

```
- ENV.LOCAL
VITE_API_HOST=http://localhost:3000
VITE_SIGN_UP_ROUTE=/users/sign_up
VITE_LOGIN_ROUTE=/users/sign_in
VITE_CREATE_ENQUIRY_ROUTE=/enquiries
VITE_CREATE_APPOINTMENT_ROUTE=/appointments
 ```
