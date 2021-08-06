<div align="center">
  <img src="./.repo/images/repo-logo.svg" width="120" height="auto"/>
</div>


# Fleekon - Fleek's icon toolkit

Curated list of brand icons generated with [Icomoon App](https://icomoon.io/app), used accross Fleek React apps.

## 📦 Install

```
yarn add @fleekHQ/fleekon
```

## 🤔 Use

`Fleekon` is a regular React component, that takes the following properties:

- Collection - a json file that represents a set
- Icon - an icon name as described in the collection set or json file
- Size - a numerical value suffixed with the `px` units
- Color - the desired icon colour
- Classname - an optional, class name for your custom styles

Here's some cause to show it in action:

```js
import React from "react";
import Fleekon from "@fleekHQ/fleekon";
import Plug from 'plug.json';

const App = () => {
  return (
    <div>
      <h1>My application</h1>
      <Fleekon
        collection={Plug}
        icon="box"
        size="18px"
        color="black"
        className="custom-style"
      />
    </div>
  );
};
```

Learn how to curate, edit and amange the `Collection` by reading about it [here](#curation). If you find it difficult, contact the design team to help you!

As stated above, you can style the `Icon` with regular selectors:

```css
.custom-style {
  color: 'black';
}

.custom-style:hover {
  color: 'deepskyblue';
}
```

## ♻️ Reusability

Passing the collection everytime you need an icon is not a great practice, instead have an **IconCreator** that provides a wrapped version of the icon collection you want to use.

Here's an example of a simple setup for it:

```js
import React from "react";
import Fleekon from "@fleekHQ/fleekon";
import Plug from 'plug.json';

const IconCollection = ({
  collection,
}) => {
  const IconCreator = ({
    icon,
    size,
    color,
    className,
  }) => (
    <Fleekon
      collection={collection}
      icon={icon}
      size={size}
      color={color}
      className={className}
    />
  );

  return IconCreator;
}

export const Icon = ({
  icon,
  size,
  color,
  className,
}) => (
  <IconCollection
    collection={Plug}
  />
);
```

Here's the wrapped **Icon** in action:

```js
import React from "react";
import { Icon } from "./example";

const App = () => (
  <div>
    <h1>My application</h1>
    <Icon
      icon="box"
      size="18px"
      color="black"
      className="custom-style"
    />
    <Icon
      icon="qrcode"
      size="18px"
      color="black"
      className="custom-style"
    />
  </div>
);
```

## 👄 Curation

Create or edit Icon packages in the [Icomoon App](https://icomoon.io/app) by using or downloading the `selection.json` file.

## 📚 Storybook

```
yarn storybook
```

## References

[IcoMoon app](https://icomoon.io/app)

[Forked React-IcoMoon](https://github.com/aykutkardas/React-IcoMoon)