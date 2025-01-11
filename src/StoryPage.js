import './StoryPage.css';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';


function StoryPage() {
  const [starsVisible, setStarsVisible] = useState(false);
  const [studentName, setStudentName] = useState('');  
  const buttonRef = useRef(null);

 
 const handleNameChange = (e) => {
  setStudentName(e.target.value);  
};

  const handleLinkClick = (e) => {
    e.preventDefault(); 

    
    setStarsVisible(true);

    
    setTimeout(() => {
      setStarsVisible(false);  
      window.location.href = e.target.href; 
    }, 1000); 
  };


  return (
    <div className="story-section">
      <h2>GRADE 7 LEVEL</h2>
      <div className="background-rectangle">
        <p className="directions">
          <b>Directions:</b> Read the selection and answer the questions that follow.
        </p>
        <span className="center-title"><b>Garbage</b></span>
        <p>
          Garbage cans are not magical portals. Trash does not disappear when you toss it in a can. Yet, the average American throws away an estimated 1,600 pounds of waste each year. If there are no magic garbage fairies, where does all that trash go? There are four methods to managing waste: recycling, landfilling, composting, and incinerating. Each method has its strengths and weaknesses. Let's take a quick look at each.
          <br /><br />
          Recycling is the process of turning waste into new materials. For example, used paper can be turned into paperboard, which can be used to make book covers. Recycling can reduce pollution, save materials, and lower energy use. Yet, some argue that recycling wastes energy. They believe that collecting, processing, and converting waste uses more energy than it saves. Still, most people agree that recycling is better for the planet than landfilling.
          <br /><br />
          Landfilling is the oldest method of managing waste. In its simplest form, landfilling is when people bury garbage in a hole. Over time the practice of landfilling has advanced. Garbage is compacted before it is thrown into the hole. In this way, more garbage can fit in each landfill. Large liners are placed in the bottom of landfills so that toxic garbage juice doesn't get into the groundwater. Sadly, these liners don't always work. Landfills may pollute the local water supply. Not to mention that all of that garbage stinks. Nobody wants to live next to a landfill. This makes it hard to find new locations for landfills.
          <br /><br />
          As landfill space increases, interest in composting grows. Compositing is when people pile up organic matter, such as food waste, and allow it to decompose. The product of this decomposition is compost. Compost can be added to the soil to make the soil richer and better for growing crops. While composting is easy to do onsite somewhere, like home or school, it's hard to do after the garbage gets all mixed up. This is because plastic and other inorganic materials must be removed from the compost pile, or they will pollute the soil. There's a lot of plastic in the garbage, which makes it hard to compost on a large scale.
          <br /><br />
          One thing that is easier to do is burning garbage. There are two main ways to incinerate waste. The first is to create or harvest a fuel from the waste, such as methane gas, and burn the fuel. The second is to burn the waste directly. The heat from the incineration process can boil water, which can power steam generators. Unfortunately, burning garbage pollutes the air. Also, some critics worry that incinerators destroy valuable resources that could be recycled. Usually, the community in which you live manages waste. Once you put your garbage in that can, what happens to it is beyond your control. But you can make choices while it is still in your possession. You can choose to recycle, you can choose to compost, or you can choose to let someone else deal with it. The choice is yours.
        </p>
      </div>

  
  <div className="student-name-input">
  <label htmlFor="studentName" className="input-label">
    Insert Student Name (optional):
  </label>
  <input
    type="text"
    id="studentName"
    value={studentName}
    onChange={handleNameChange}
    placeholder="Enter name here"
    className="input-field"

        />
      </div>


      <h3>Are you ready to answer the<br/> questions?</h3>

     
      <div className="rectangle">
        <Link
          className="App-link"
          to="/question1"
          onClick={handleLinkClick}
          ref={buttonRef}
        >
          Let's do this!
        </Link>
      </div>

      
      {starsVisible && (
        <div
          className="star-container"
          style={{
            position: 'absolute',
            top: `${buttonRef.current?.getBoundingClientRect().top + window.scrollY - 10}px`,
            left: `${buttonRef.current?.getBoundingClientRect().left + window.scrollX - 50}px`,
            width: '250px',
            height: '100px',
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              className="star"
              key={index}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                '--x': `${(Math.random() - 0.5) * 150}px`,
                '--y': `${(Math.random() - 0.5) * 50}px`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StoryPage;
