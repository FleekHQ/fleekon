import React from 'react';
import Icomoon, { IconSet } from './icomoon';
import Plug from './collections/plug.json';

type CollectionName = 'Plug';

export const getIconList = (iconSet: IconSet) => {
  if (!iconSet || !Array.isArray(iconSet.icons)) return [];
  return iconSet.icons.map((icon) => icon.properties.name);
};

// eslint-disable-next-line consistent-return
const getIconSet = (collection: string) => {
  if (collection === 'Plug') {
    return (Plug as IconSet);
  }
};

export interface FleekonProps {
  className?: string,
  collectionName: CollectionName,
  color: string,
  icon: string,
  size: string,
}

const Fleekon = ({
  className,
  collectionName,
  color,
  icon,
  size,
}: FleekonProps) => {
  const iconSet = getIconSet(collectionName);

  return (iconSet
    && (
      <Icomoon
        iconSet={iconSet}
        icon={icon}
        color={color}
        size={size}
        className={className}
      />
    )
  )
  || <>Icon missing!</>;
};

export default Fleekon;
