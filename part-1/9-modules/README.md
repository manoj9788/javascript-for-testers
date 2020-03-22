# Modules

Modules are small units of independent, reusable code that is desired to be used as the building blocks in creating a non-trivial Javascript application.

Language level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js.

Modules uses special derivates i.e import and export statements to call functions of one module from another.

- `export` keyword labels variables, functions or a class that should be accessible from outside the current module.

Examples:

```js
// 📁 popup.js
export function popup(something) {
  alert(`${something}`);
}
```

```js
// 📁 popup.js
export { popup as alert };
```

```js
// Export Default
// 📁 mobile.js - only one `export default` per file.
export default class Mobile { // just add "default"
  constructor(name) {
    this.name = name;
  }
}
------------
// 📁 main.js
import Mobile from './mobile.js'; // not {Mobile}, just Mobile

new Mobile('iPhone');
```

- `import` allows the import of functionality from other modules.

Examples:

```js
import { popup } from "./popup.js";
popup("hello"); //hello
```

```js
import * from "./popup.js"; // if there is alot of functions to import then we can import everything as an object
```

```js
import { popup as alert } from "./popup.js"; // popup is imported as different name called alert

alert("hello");
```

```js
// Dynamic Imports
// 📁 hello.js
export function a() {
  alert(`a`);
}

export function b() {
  alert(`b`);
}
----------
// 📁 main.js
let {a, b} = await import('./hello.js');

a();
b();
```

## Core Modules Features

Core features are valid for both browsers and any server side javascript.

- Modules always `use strict` i.e assigning values to undefined variables will throw error.

```html
<body>
  <script type="module">
    a = 10; // error
  </script>
</body>
```

- Each Modules has its own top-level scope. i.e Each Module have its own independent variable. Variables or functions in one variable is not seen in another.

Variables or functions need to be properly imported from one module to another to make it accessible.

In the browser, independent top-level scope also exists for each `<script type="module">`:

```html
<script type="module">
  // The variable is only visible in this module script
  let user = "Sachin";
</script>

<script type="module">
  alert(user); // Error: user is not defined
</script>
```

- Module code is evaluated only once. i.e Exports are generated, and then they are shared between importers.

```js
// 📁 mobile.js
export let mobile = {
  name: "iPhone 5"
};
```

All importers of above module gets exactly one and only mobile object.

```js
// 📁 apple.js
import { mobile } from "./mobile.js";
admin.name = "iPhone 6";

// 📁 Samsung.js
import { mobile } from "./mobile.js";
alert(mobile.name); // iPhone 6 - Changes made in apple.js is visible in Samsung.js
```

- Object `import.meta` contains information about current module.

```html
<script type="module">
  alert(import.meta.url); // script url (url of the html page for an inline script)
</script>
```

- `this` is undefined in a module.

```html
<script type="module">
  alert(this); // undefined
</script>
```

## Browser Specific Features

- Module scripts are deffered.

a) Module scripts doesn't block HTML processing. Scripts defined as type module will load in parallel with other resources.

b) Module scripts wait untill HTML document is ready.

c) Order of scripts are maintained in order to execute.

- Async works on inline scripts

For non-module scripts, the async attribute only works on external scripts. Async scripts run immediately when ready, independently of other scripts or the HTML document.

For module scripts, it works on inline scripts as well.

```html
<script async type="module">
  import { mobile } from "./mobile.js";
  mobile.makeCall();
</script>
```

- External Scripts (Same src/Scripts from another origin)

```html
<script type="module" src="same-source.js"></script>
<script type="module" src="http://another-site.com/their.js"></script>
```
