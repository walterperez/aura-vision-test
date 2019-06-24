import React from 'react';
import './ResetButton.scss';

interface ResetButtonProps {
  resetState: () => void;
}

export function ResetButton(props: ResetButtonProps) {
  return (
    <div className="ResetButton">
      <div className="ResetButton__Icon" onClick={() => props.resetState()}>
        &#x21A9;
      </div>
    </div>
  );
}
