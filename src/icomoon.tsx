import React, { createElement, FunctionComponent } from 'react';

type IconSetItem = {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs: Object[];
    width?: number | string
  };
};

export type IconSet = {
  icons: IconSetItem[];
};

type Style = Record<string, string | number>;

const style: Style = {
  display: 'inline-block',
  stroke: 'currentColor',
  fill: 'currentColor',
};

const ErrorFound = ({
  name,
}: {
  name: string,
}) => (
  <span>
    {`Oops! Missing ${name}`}
  </span>
);

const IcoMoon: FunctionComponent<{
  iconSet: IconSet;
  icon: string;
  color?: string;
  size?: string | number;
  className?: string;
  style?: Style;
  [name: string]: any;
}> = ({
  iconSet,
  icon,
  size,
  disableFill,
  removeInlineStyle,
  SvgComponent,
  PathComponent,
  ...props
}) => {
  if (!iconSet || !icon) return <ErrorFound name="iconSet or icon" />;

  const currentIcon = iconSet.icons.find(
    (item) => item.properties.name === icon,
  );

  if (!currentIcon) return <ErrorFound name="currentIcon" />;

  if (size) {
    style.width = size;
    style.height = size;
  }

  // eslint-disable-next-line no-param-reassign
  props.style = {
    ...(removeInlineStyle ? {} : style),
    ...(props.style || {}),
  };

  const { width = '1024' } = currentIcon.icon;

  // eslint-disable-next-line no-param-reassign
  props.viewBox = `0 0 ${width} 1024`;

  const paths = currentIcon.icon.paths.map((path, index) => {
    const pathProps = {
      d: path,
      key: icon + index,
      ...(!disableFill ? currentIcon.icon.attrs[index] : {}),
    };

    return PathComponent
      ? createElement(PathComponent, pathProps)
      : createElement('path', pathProps);
  });

  return SvgComponent
    ? createElement(SvgComponent, props, paths)
    : createElement('svg', props, paths);
};

export default IcoMoon;
