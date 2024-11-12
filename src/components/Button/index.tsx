import React, { forwardRef, MouseEventHandler, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import s from './Button.module.css';

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type RegularButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

interface CustomButtonProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  target?: string;
}

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
  feedbackText?: string;
  toggled?: boolean;
  attributes?: CustomButtonProps;
} & (AnchorButtonProps | RegularButtonProps);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const { text, icon, feedbackText, toggled, onClick, href, attributes } = props;
  const rootClassName = classnames(s.root, toggled && s['--toggled']);
  const rootAttributes = { ...attributes };
  const TagName = href ? 'a' : 'button';

  if (!href) {
    (rootAttributes as ButtonHTMLAttributes<HTMLButtonElement>).type = 'button';
  }

  return (
    <TagName
      {...rootAttributes}
      href={href}
      className={rootClassName}
      onClick={onClick as MouseEventHandler<HTMLAnchorElement & HTMLButtonElement>}
      ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
    >
      <span className={s.inner}>
        {icon && <span className={s.icon}>{icon}</span>}
        {text && <span className={s.text}>{text}</span>}
      </span>
      {feedbackText && <span className={s.feedback}>{feedbackText}</span>}
    </TagName>
  );
});

export { Button };
