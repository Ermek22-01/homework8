import React from "react";
function Tabs({ children }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
      <div>
        <div className="tabs">
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              active: index === activeTab,
              onClick: () => handleTabClick(index),
            });
          })}
        </div>
        <div className="content">
          {React.Children.toArray(children)[activeTab]}
        </div>
      </div>
  );
}

function Tab({ active, onClick, children }) {
  return (
      <div className={active ? 'tab active' : 'tab'} onClick={onClick}>
        {children}
      </div>
  );
}

function App() {
  return (
      <Tabs>
        <Tab>Вкладка 1</Tab>
        <Tab>Вкладка 2</Tab>
        <Tab>Вкладка 3</Tab>
      </Tabs>
  );
}
export default App;
