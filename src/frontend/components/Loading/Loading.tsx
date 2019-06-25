import React from 'react';
import './Loading.scss';

export function Loading() {
  return (
    <div className="Loading" data-test="Loading">
      <div className="loader" />
    </div>
  );
}
