
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp()
}
const minusOne = () => {
    count--;
    renderCounterApp()
}

const reset = () => {
    count = 0;
    renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" onClick={addOne} className="button">+1</button>
            <button id="my-id-2" onClick={minusOne} className="button">-1</button>
            <button id="my-id-reset" onClick={reset} className="button">reset</button>
        </div>
    );

    

    ReactDOM.render(template, appRoot)
}
renderCounterApp()