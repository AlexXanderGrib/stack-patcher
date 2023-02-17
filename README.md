# Stack Patcher

> 4KB package wraps any function in function with your custom name to help you catch bugs in error stacktraces

[Example](#example) &bull; [Source File](./index.ts) &bull; [Repo](https://) &bull; [Why??? [RU]](https://youtu.be/Lrs6puJ4G2Q)

- **Small.** Weighs only `4KB`;
- **Fast and Secure.** Uses JS-native approach of renaming functions instead of eval;
- **Simple.** You can just copy source to your project, i wan't be mad.
- **Cross-Platform.** Works in node and browser

## Example

```typescript
import { wrapCall } from "stack-patcher";

const call = wrapCall("username=AlexXanderGrib", () => {
  throw new Error();
});

call.async()
  .catch((error) => console.log(error.stack));
// Error
//   at example.ts:4:4
//   at username=AlexXanderGrib
//      ^^^^^^^^^^^^^^^^^^^^^^^
```

## Installation

- **Using `npm`**
  ```bash
  npm i stack-patcher
  ```
- **Using `Yarn`**
  ```bash
  yarn add stack-patcher
  ```
- **Using `pnpm`**
  ```bash
  pnpm add stack-patcher
  ```

## Import

- **CommonJS** (default for **Node JS**)

  ```javascript
  const { wrapCall } = require("@alexxgrib.me/stack-patcher");
  ```

- **TypeScript** or **ES Modules**

  ```javascript
  import { wrapCall } from "stack-patcher";
  ```
