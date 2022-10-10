import Draggable from 'react-draggable';

export default function DragDrop() {
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>Draggable Module Test By JC</h4>
        <div style={{ width: 660, height: 'auto' }}>
          <Draggable>
            <div>Camion pompier en route!</div>
          </Draggable>
        </div>
      </div>           
    );
  }