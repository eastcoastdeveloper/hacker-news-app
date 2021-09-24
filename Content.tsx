import React, { useEffect, useState } from 'react';
import "./Content.scss";

const Content = (
  {contentPanel, searchQuery, userQuery, historyList}:
  {contentPanel:any, searchQuery: any, userQuery:any, historyList:any}) => {
  
  return (
    <div className="content">
     <main>
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