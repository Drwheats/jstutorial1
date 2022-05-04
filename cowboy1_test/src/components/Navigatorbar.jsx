const navigatorBar = () => {
  return (
      <div className="navigatorBar">
          <span className="logo">Cowboy App</span>
          <ul className="list">
              <li className="listItem">
                  <img src='../media/cowboytwo.jpg' alt="avatar" className="avatar" />
              </li>
              <li className="listItem>">User Man</li>
              <li className="listItem">Logout</li>
          </ul>
      </div>
  );
};

export default navigatorBar;