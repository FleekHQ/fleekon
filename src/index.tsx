import React from 'react';
import Icomoon, { IconSet } from './icomoon';
import Plug from './collections/plug.json';

type Collection = 'Plug';

const getIconList = (iconSet: IconSet) => {
  if (!iconSet || !Array.isArray(iconSet.icons)) return;

  return iconSet.icons.map((icon) => icon.properties.name);
};

const getIconSet = (collection: string) => {
  if (collection == 'Plug') {
    return Plug;
  }
}

const Fleekon = ({
  collection,
  icon,
}: {
  collection: Collection,
  icon: string,
}) => {
  let iconSet = getIconSet(collection);

  return iconSet && (
    <Icomoon
      iconSet={iconSet}
      icon={}
      color={}
      size={}
      className={}
      style={}
    />
  );
};

export default Fleekon;
