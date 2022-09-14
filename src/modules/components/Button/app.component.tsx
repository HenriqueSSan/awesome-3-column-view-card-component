import './app.style.scss';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  href?: string;
  color: 'orange' | 'cyan' | 'dark-cyan';
  children: string | JSX.Element | JSX.Element[];
};

export function Button({ variant, href, children, color }: ButtonProps) {
  if (!href) {
    return (
      <button className={`button button__${variant} clr-${color}`} type="button">
        {children}
      </button>
    );
  }

  return (
    <a className={`button button__${variant} clr-${color}`} href={href}>
      {children}
    </a>
  );
}
