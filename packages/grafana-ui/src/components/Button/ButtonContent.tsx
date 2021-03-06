import React from 'react';
import { css } from 'emotion';
import { stylesFactory, useTheme } from '../../themes';
import { GrafanaTheme } from '@grafana/data';

const getStyles = stylesFactory((theme: GrafanaTheme) => ({
  content: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    height: 100%;
  `,

  icon: css`
    & + * {
      margin-left: ${theme.spacing.sm};
    }
  `,
}));

type Props = {
  icon?: string;
  className?: string;
  children: React.ReactNode;
};
export function ButtonContent(props: Props) {
  const { icon, children } = props;
  const theme = useTheme();
  const styles = getStyles(theme);

  const iconElement = icon && (
    <span className={styles.icon}>
      <i className={icon} />
    </span>
  );

  return (
    <span className={styles.content}>
      {iconElement}
      <span>{children}</span>
    </span>
  );
}
