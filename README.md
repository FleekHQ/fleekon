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

`Fleekon` is a regular React component.
Import `Fleekon` in the project and set the properties:

```js
import React from "react";
import Fleekon from "@fleekHQ/fleekon";

const App = () => {
  return (
    <div>
      <h1>My application</h1>
      <Fleekon
        collectionName="Fleek"
        icon="box"
        size="18px"
        color="black"
        className="custom-style"
      />
    </div>
  );
};
```

You can style the `Icon` with regular selectors:

```css
.custom-style {
  color: 'black';
}

.custom-style:hover {
  color: 'deepskyblue';
}
```

## 👄 Curation

Create or edit Icon packages in the [Icomoon App](https://icomoon.io/app) by using or downloading the `selection.json` file.

In Fleekon, update or add a new package by choosing a meaningful name.

Open and edit the [src/index.tsx](src/index.tsx) and declare the new collection `getIconSet`.

## 📚 Storybook

```
yarn storybook
```

## References

[IcoMoon app](https://icomoon.io/app)

[Forked React-IcoMoon](https://github.com/aykutkardas/React-IcoMoon)