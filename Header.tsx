import React, {useEffect} from 'react';
import './Header.scss';

const Header = (
  {contentPanel, historyBtn, searchCallback, historyBtnCallback}:
  {contentPanel: any, historyBtn:any, searchCallback: any, historyBtnCallback:any}) => {

  let searchQuery = "";

  const inputHandler = (event:any) => {
    searchQuery = event.target.value;
  }

  const historyHandler = () => {
    historyBtnCallback(historyBtn => !historyBtn);
  }

  const clickHandler = () => {
    searchCallback(searchQuery)
  }

  return (
    <React.Fragment>
      <header>
        <div className="title-history">
          <p>Hacker News Search</p>
          <p onClick={historyHandler}>{contentPanel ? "Hide history" : "Show History"}</p>
        </div>
        <div className="search-field">
          <input type="text" onChange={inputHandler} />
          <button type="button" onClick={clickHandler}>GO</button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
