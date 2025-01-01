import React from 'react';
import Button from '../components/atomics/Button';
import ButtonLink from '../components/atomics/ButtonLink';

const StyleGuide = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 p-5">
      <h1 className="text-4xl font-bold">Style Guide</h1>

      <hr className="my-5 border-gray-200 border-2" />

      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col gap-5 max-w-96 w-full border border-gray-200 p-5 rounded-md">
          <h2 className="text-2xl w-full font-light">Typography</h2>
          <hr className="w-full" />
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-2xl font-bold">Heading 3</h3>
          <h4 className="text-xl font-bold">Heading 4</h4>
          <h5 className="text-lg font-bold">Heading 5</h5>
          <h6 className="text-base font-bold">Heading 6</h6>
          <p>Paragraph Base</p>
          <p className="font-thin text-textColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            ex, minima maxime illo ea eos consectetur sapiente praesentium
            mollitia quia dicta recusandae et laborum iure in ab quidem?
            Deserunt, blanditiis.
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-96 w-full border border-gray-200 p-5 rounded-md">
          <h2 className="text-2xl w-full font-light">Buttons</h2>
          <hr className="w-full" />
          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Primary Small
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={() => console.log('clicked')}
          >
            Primary Medium
          </Button>
          <Button
            variant="primary"
            size="large"
            onClick={() => console.log('clicked')}
          >
            Primary Large
          </Button>
          <Button variant="primary" size="medium" disabled>
            Primary Large (disabled)
          </Button>

          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            Secondary Small
          </Button>
          <Button
            variant="secondary"
            size="medium"
            onClick={() => console.log('clicked')}
          >
            Secondary Medium
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => console.log('clicked')}
          >
            Secondary Large
          </Button>
          <Button variant="secondary" size="large" disabled>
            Secondary Large (disabled)
          </Button>
        </div>
        <div className="flex flex-wrap justify-start max-h-fit gap-5 max-w-96 w-full border border-gray-200 p-5 rounded-md">
          <h2 className="text-2xl w-full font-light">Icons</h2>
          <hr className="w-full" />
          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/share-2.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/settings.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/check-circle.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/inbox.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/paperclip.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="primary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/white/bell.svg"
              alt="icon"
            />
          </Button>

          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/alert-triangle.svg"
              alt="icon"
            />
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/heart.svg"
              alt="icon"
            />
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/user-check.svg"
              alt="icon"
            />
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/unlock.svg"
              alt="icon"
            />
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/credit-card.svg"
              alt="icon"
            />
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => console.log('clicked')}
          >
            <img
              className="w-4 h-5"
              src="assets/img/icons/color/pie-chart.svg"
              alt="icon"
            />
          </Button>
          <br />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/volume-x.svg"
            alt="icon"
          />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/skip-forward.svg"
            alt="icon"
          />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/music.svg"
            alt="icon"
          />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/mic-off.svg"
            alt="icon"
          />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/shield-off.svg"
            alt="icon"
          />
          <img
            className="w-7 h-7"
            src="assets/img/icons/color/life-buoy.svg"
            alt="icon"
          />

          <img
            className="w-7 h-7"
            src="assets/img/icons/color/hash.svg"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
