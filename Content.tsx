import React, { useEffect, useRef, useState } from 'react';
import "./Content.scss";

const Content = (
  {contentPanel, searchQuery, historyList}:
  {contentPanel:boolean, searchQuery: any, historyList:any}) => {

  const mainElem = useRef(null);
  
  return (
    <div className="content">
     <main ref={mainElem}>
     <ul>
     {
       searchQuery.map((item, index) => (
        <li key={index}>
        <a target="_blank" href={item.story_url}>{item.story_title}</a>
      </li>
      ))
     }
    </ul>
      <div id="search-history" className={contentPanel ? 'show-panel' : 'hide-panel'}>
      <ul>
     {
       historyList.map((item, index) => (
        <li key={item}>
        {item.toUpperCase()}
      </li>
      ))
     }
    </ul>
      </div>
     </main>
    </div>
  )
}

export default Content;