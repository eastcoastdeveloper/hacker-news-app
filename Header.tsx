import React, { useEffect, useRef } from 'react';
import './Header.scss';

const Header = ({
  contentPanel,
  historyBtn,
  searchCallback,
  historyBtnCallback,
}: {
  contentPanel: any;
  historyBtn: any;
  searchCallback: any;
  historyBtnCallback: any;
}) => {
  let searchQuery = '';

  const searchField = useRef(null);

  const inputHandler = (event: any) => {
    searchQuery = event.target.value;
  };

  const historyHandler = () => {
    historyBtnCallback((historyBtn) => !historyBtn);
  };

  const clickHandler = () => {
    searchCallback(searchQuery);
    searchField.current.value = '';
  };

  return (
    <React.Fragment>
      <header>
        <div className="title-history">
          <p onClick={historyHandler}>
            {contentPanel ? 'Hide history' : 'Show History'}
          </p>
        </div>
        <div className="search-field">
          <input
            type="text"
            placeholder="Search technology..."
            ref={searchField}
            onChange={inputHandler}
          />
          <button type="button" onClick={clickHandler}>
            GO
          </button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
