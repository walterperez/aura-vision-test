import React from 'react';
import './SearchButton.scss';

interface ISearchButtonProps {
  handleClick: (event?: React.MouseEvent) => void;
}

export function SearchButton(props: ISearchButtonProps) {
  return (
    <button
      className="SearchButton"
      onClick={() => props.handleClick()}
      data-test="SearchButton"
    >
      Search &#x1F6EA;
    </button>
  );
}
