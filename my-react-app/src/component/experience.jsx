
import React, { useEffect, useState, useMemo } from 'react';
import './experience.scss';

function Experience() {
    const [counts, setCounts] = useState([865, 568, 689, 359]);

  const originalCounts = useMemo(() => [865, 568, 689, 359], []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCounts = originalCounts.map(() => Math.floor(Math.random() * 1000));
      setCounts(randomCounts);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setCounts([...originalCounts]);
    }, 3000);

    return () => clearInterval(interval);
  }, [originalCounts]);

  return (
    <div class="Experience">
      
      <div class='row'>
        <h2 class="title">
          Awesome supplement for your
          <br />
          body we have <span className="span">20 years of experience</span>
        </h2>
        <p>
          Than with most other themes since all of the customization are done right from within the making super
          <br />murking beneath the surface of your beautiful new theme poorly written code is a serious issue that can lead
          <br />problems with your site in the long run use of improper or deprecated code break.
        </p>
      </div>

      <div class="dynamic-numbers">
        {counts.map((count, index) => (
          <div class="col" key={index}>
            <div class="single-counter text-center">
              <h2 class="counter">{count}</h2>
              <span>
                {index === 0
                  ? 'Happy Customer'
                  : index === 1
                  ? 'Awards Winning'
                  : index === 2
                  ? 'Complete Projects'
                  : 'Team Members'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
