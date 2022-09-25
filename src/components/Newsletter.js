import React from 'react';
export default function Newsletter() {
  const social = [
    'INSTAGRAM',
    'FACEBOOK',
    'TWITTER',
    'PINTEREST',
    'YOUTUBE',
    'SPOTIFY',
  ];
  return (
    <div>
      <div>JOIN OUR NEWSLETTER</div>
      <div>
        <div>
          <label>Enter your email address</label>
        </div>
      </div>
      <div>
        {social.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    </div>
  );
}
