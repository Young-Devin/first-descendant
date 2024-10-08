import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import Modules from '../../Components/Modules/Modules';

function Draggable(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
      });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      } : undefined;
    
      
    return (
        <>
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='modules'>
            {props.children}
        </div>
        </>
        
    );
}

export default Draggable;