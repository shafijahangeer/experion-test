import React from "react";


const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="tabs">
      <div className="tabs__nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabs__nav__item ${activeTab === index ? "active" : ""}`}
            onClick={() => onChange(index)}  // Notify parent
          >
            {tab.label} <span className="count">{tab.count}</span>
          </button>
        ))}
      </div>
      <div className="tabs__content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};


export default Tabs;
