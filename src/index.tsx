import React from 'react';
import Icomoon, { IconSet } from './icomoon';

export const getIconList = (iconSet: IconSet) => {
  if (!iconSet || !Array.isArray(iconSet.icons)) return [];
  return iconSet.icons.map((icon) => icon.properties.name);
};

export interface FleekonProps {
  className?: string,
  collection: IconSet,
  color: string,
  icon: string,
  size: string,
}

const Fleekon = ({
  className,
  collection,
  color,
  icon,
  size,
}: FleekonProps) => (collection
    && (
      <Icomoon
        iconSet={collection}
        icon={icon}
        color={color}
        size={size}
        className={className}
      />
    )
) || <>Icon missing!</>;

export default Fleekon;
