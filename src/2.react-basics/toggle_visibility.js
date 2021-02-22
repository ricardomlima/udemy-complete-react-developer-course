let visible = false;

const appRoot = document.getElementById("app");

const toggleVisibility = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      {visible && (
        <div>
          <button onClick={toggleVisibility}>Hide</button>
        </div>
      )}
      {!visible && (
        <div>
          <button onClick={toggleVisibility}>Show</button>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
