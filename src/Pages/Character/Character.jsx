import React, { useEffect, useState } from 'react'
import './character.css'
import fdCharacterBg from '../../Assets/character_bg.png';
import { GoDiamond } from "react-icons/go";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { TbLetterP } from "react-icons/tb";
import { DndContext, DragOverlay } from '@dnd-kit/core';
import Draggable from '../../Components/Draggable/Draggable';
import Droppable from '../../Components/Droppable/Droppable';
import Modules from '../../Components/Modules/Modules';
import { allModules } from '../../Assets/data.js';
import { arrayMove } from '@dnd-kit/sortable';

const selectedModule = [];


const draggableMarkup = (
    
  allModules.map((mods, index) => (
    <Draggable key={mods.name} id={index.toString()}><Modules symbol={mods.symbol} symbolText={mods.symbolText} img={mods.img} modCapacity={mods.modCapacity} name={mods.name} modType={mods.modType}/></Draggable>
  ))

)  

export default function Character() {
  const containers = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const [parent, setParent] = useState(null);
  const [items, setItems] = useState({
    A: [''],
    B: [''],
    C: [''],
    D: [''],
    E: [''],
    F: [''],
    G: [''],
    H: [''],
    I: [''],
    J: [''],
    K: [''],
    L: [''],
  });
  const [dragOptions, setDragOptions] = useState(draggableMarkup);

  
  const [activeId, setActiveId] = useState();
  
     
  

  function findContainer(id) {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }


  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    //setActiveId(id);
    console.log("active Id: " + activeId);
  }

  function handleDragOver(event) {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    //const activeContainer = findContainer(id);
    //const overContainer = findContainer(overId);

    //if (
    //  !activeContainer ||
    //  activeContainer === overContainer
    //) {
    //  return;
    //}

    /* setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      };
    }); */
  }
  

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    //const activeContainer = findContainer(id);
    //const overContainer = findContainer(overId);

    // if (
    //   !activeContainer ||
    //   !overContainer ||
    //   activeContainer !== overContainer
    // ) {
    //   return;
    // }

    // const activeIndex = items[activeContainer].indexOf(active.id);
    // const overIndex = items[overContainer].indexOf(overId);

    // if (activeIndex !== overIndex) {
    //   setItems((items) => ({
    //     ...items,
    //     [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
    //   }));
    // }

    // setActiveId(null);
    
    setActiveId(active.id);
   // console.log("Test 1 ----------------->" + id)
    //console.log("Test 2 ----------------->" + overId)
    //console.log("Test 3 ----------------->" + draggableMarkup[activeId])
    setItems((items) => ({
      ...items,
      [overId]: draggableMarkup[active.id],
    }));
    console.log("results -------------------> " + Object.values(items))

    //console.log(active.id)
    //console.log(draggableMarkup[active.id].key)
    console.log(active.id);

    //selectedModule.push(draggableMarkup[active.id])
   // dragOptions.splice(dragOptions.indexOf(dragOptions[active.id]) , 1);
    setDragOptions(dragOptions)
    console.log(dragOptions);
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
    //console.log(parent)
  }

  useEffect(() => {

  }, []);

  return (
    <div className='container'>

      <img className='imageBackground' src={fdCharacterBg} alt="" />
      <div className="leftPanel">
        <div className="characterPicContainer">
          <div className="characterTitle">
            <div className="characterLevelIcon">
              <GoDiamond className='icon' />
              <div className="characterLvl">
                <span>40</span>
              </div>
            </div>
            <div className="characterName">
                <span>Viessa</span>
            </div>
          </div>

          <div className="characterPic">
            <img src='/characters/viessa.jpg' alt="Viessa" />
          </div>

          <div className="characterSkills">
            <RiNumber1 className='icon' />
            <RiNumber2 className='icon' />
            <RiNumber3 className='icon' />
            <RiNumber4 className='icon' />
            <TbLetterP className='icon' />
          </div>
        </div>
        <div className="characterDetailsContainer">
          <div className="characterDetailsTitle">
            <span>Applied Value</span>
          </div>
          <div className="characterStats">
            <div><span>Max MP</span><span>8.5%</span></div>
            <div><span>DEF</span><span>288.7%</span></div>
            <div><span>Max Shield</span><span>151.9%</span></div>
            <div><span>Skill Power</span><span>8.1%</span></div>
            <div><span>Max HP</span><span>218.5%</span></div>
            <div><span>Skill Duration</span><span>34.8%</span></div>
            <div><span>Skill Power Modifier</span><span>29.6%</span></div>
            <div><span>Skill Duration</span><span>25.3%</span></div>
          </div>
          <div className="skillDesc">
            <div><span>Throws a projectile forward that spawns a Blizzard where it lands.</span></div>
            <div><span>Modifies the Charged Sub Attack. Use a Shortsword to attack when performing a Charged Sub Attack. As the Enhancement Level increases, Max Module Capacity increases. (Currently +10)</span></div>
          </div>
        </div>
      </div>
      <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className="rightPanel">
        <div className="myCharacterModsContainer">
          <div className="modsRow1">
              {containers.map((id) => (
                  <Droppable key={id} id={id}>
                    {/* {console.log("Test 1 -------------->" + activeId)}
                    {console.log("Test 2 -------------->" + parent) Object.keys(items).indexOf(parent) === index}
                    {console.log("Test 3 -------------->" + id)*/}
                    {console.log("Test 4 -------------->" + items[id])}
                  { items[id].toString() !== '' ? items[id]  : 'Drop here'}
                  </Droppable>

              ))}

        {/* <DragOverlay>{activeId ? draggableMarkup[activeId] : null}</DragOverlay> */}
              
          </div>
        </div>

        <div className="allModulesContainer">
          <div className="modsRow">
              {parent === null ? dragOptions : dragOptions }
          </div>
          
          
        </div>
      </div>
      </DndContext>
      

    </div>
  )
}
