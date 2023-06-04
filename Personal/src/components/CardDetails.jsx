import React from 'react'

const CardDetails = ({ log, handleClick }) => {
  return (
    <div>
        <div onClick={() => handleClick(log.id)} className='flex flex-col items-center bg-blue-200 rounded-lg p-2' key={log.id}>
          <h3 className='font-bold'>{log.position}</h3>
          <p>{log.date}</p>
          <p>{log.Gi ? "Gi" : "NoGi"}</p>
          {log.showDetails && (
          <div className='flex flex-col items-center'>
            <p>{log.offense ? "Offensive" : "Defensive"}</p>
            <p className='border-2 p-2 rounded-xl border-slate-100'>{log.technique}</p>
            <p className='font-medium'>{log.school}</p>
            <p>{log.teacher}</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default CardDetails
