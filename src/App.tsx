import { Card } from './layout/Card/app.layout';
import SedansImg from './assets/images/icon-sedans.svg';
import SUVsImg from './assets/images/icon-suvs.svg';
import LuxuryImg from './assets/images/icon-luxury.svg';

import './setup/core/styles/index.scss';

export function App() {
  return (
    <section className="_window_">
      <div className="grid">
        <Card
          image={SedansImg}
          variant="primary"
          href="#"
          color="orange"
          title="Sedans"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
or on your next road trip."
        />

        <Card
          image={SUVsImg}
          href="#"
          variant="primary"
          color="cyan"
          title="SUVs"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
and off-road adventures."
        />

        <Card
          image={LuxuryImg}
          href="#"
          variant="primary"
          color="dark-cyan"
          title="Luxury"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
rental and arrive in style."
        />
      </div>

      <footer>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a target="_black" href="https://henrique-santos-portfolio.netlify.app">
            Henrique Santos
          </a>
          .
        </div>
      </footer>
    </section>
  );
}
