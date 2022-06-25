import React from 'react'

export default function NameUnten({people, index, setIndex}) {
    const clickHandlerPrev = () => {
        if (index >= 1) setIndex(index => index - 1)
      };
    
      const clickHandlerNext = () => {
        if (index < people.length - 1) setIndex(index => index + 1)
      }

  return (
    <div>
        <div>
        <h4 className="label">{people[index]?.name}</h4>
        <button onClick={clickHandlerPrev}>-</button><button onClick={clickHandlerNext}>+</button>
      </div>
    </div>
  )
}
