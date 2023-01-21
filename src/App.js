import './App.css';
import Navigation from './components/Navigation.jsx';
import CenterContent from './components/CenterContent';
import LeftSidebarContent from './components/LeftSidebarContent';
import RightSidebarContent from './components/RightSidebarContent';
import {
  Flexboard,
  FlexboardProvider,
  FlexboardFrame,
  ResizerType,
  Position
} from '@dorbus/flexboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <FlexboardProvider>
        <Flexboard
          direction={Position.left}
          draggable={true}
          width={300}
          minWidth={270}
          maxWidth={400}
          resizerStyle={{ backgroundColor: '#323538' }}
          resizerType={ResizerType.gutterlane}>
          <LeftSidebarContent />
        </Flexboard>
        <FlexboardFrame>
          <CenterContent />
        </FlexboardFrame>
        <Flexboard
          direction={Position.right}
          draggable={true}
          width={350}
          minWidth={260}
          maxWidth={400}
          resizerStyle={{ backgroundColor: '#323538' }}
          resizerType={ResizerType.gutterlane}>
          <RightSidebarContent />
        </Flexboard>
      </FlexboardProvider>
    </div>
  );
}

export default App;
