import { render } from "react-dom";
import { App } from './App'

render(<App />, document.getElementById('root'))

// const container = document.getElementById('root');
// const fragment = container ? container?.appendChild(document.createDocumentFragment()) : document.createDocumentFragment()
// const root = createRoot(fragment);
// root.render(<App />)