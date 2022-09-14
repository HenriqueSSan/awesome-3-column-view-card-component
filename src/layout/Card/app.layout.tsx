import { Button } from '../../modules/components/Button/app.component';
import { ButtonProps } from '../../modules/components/Button/app.component';
import './app.style.scss';

interface CardProps extends Omit<ButtonProps, 'children'> {
  image: string | any;
  title: string;
  description: string;
}

export function Card({ image, title, description, href, color, variant }: CardProps) {
  return (
    <div className={`card bg-clr-${color} `}>
      <div className="card__image">
        <img src={image} alt="" />
      </div>

      <div className="card__data">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {href ? (
        <Button color={color} variant={variant} href={href}>
          Learn More
        </Button>
      ) : null}
    </div>
  );
}
