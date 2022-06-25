import React from 'react';

export default function People({people, index, setIndex}) {

    const handlePeopleChange = event => {
        setIndex(Number(event.target.value))
        
      };

  return (
    <div>
        <form>
        <select name="people" id="people" value={index} onChange={handlePeopleChange} >
          {people.map((person, index) => (
            <option key={person.name} value={index}>{person.name}</option>
          ))}
        </select>
      </form>
      <label htmlFor="people" className="label">
        Your Selection
      </label>
    </div>
  )
}
