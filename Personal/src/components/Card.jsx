import React from 'react'
import CardDetails from './CardDetails'

const Card = ({ bjjLogs, handleClick }) => {
  return (
    <div className='flex rounded-xl gap-6 justify-around'>
        {bjjLogs.map((log) => (
            <>
            <CardDetails log={log} handleClick={handleClick} />
            </>
        ))}
    </div>
  )
}

export default Card
