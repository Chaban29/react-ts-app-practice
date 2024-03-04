import * as ReactDOMClient from 'react-dom/client';
import { Application } from './App';

const rootElement = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLDivElement
);

rootElement.render(<Application />);
