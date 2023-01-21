import { React } from 'react';

import '../styles/center_content.css'

const obj = `
  import { Flexboard, FlexboardProvider, FlexboardFrame, ResizerType, Position} from '@dorbus/flexboard';
    <FlexboardProvider>
            <Flexboard
            direction={Position.left}
            draggable={true}
            width={400}
            minWidth={200}
            maxWidth={600}
            flexboardStyle={{ backgroundColor: "#f2f3f4" }}
            resizerStyle={{ backgroundColor: "pink" }}
            resizerType={ResizerType.gutterlane}
            >
                <div>Flexboard Content</div>
            </Flexboard>
            <FlexboardFrame>
                <div>Frame Content</div>
            </FlexboardFrame>
    </FlexboardProvider>
`;

const CenterContent = () => {
  return (
    <div className="container">
      <div className='heading'>
        <h3>How to use Flexboard ?</h3>
        </div>
        <pre className='code-block'>
          <code>{obj}</code>
        </pre>
      </div>
  );
};

export default CenterContent;
