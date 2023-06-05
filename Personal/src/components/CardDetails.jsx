import { Card } from "flowbite-react"

const CardDetails = ({ log, handleClick }) => {
  return (
    <Card>
      <div className="flex justify-center">
        <div onClick={() => handleClick(log.id)} className='w-40 flex flex-col items-center text-white rounded-lg p-2' key={log.id}>
          <h3 className=' text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{log.position}</h3>
          <p className="font-normal text-gray-700 dark:text-gray-400" >{log.date}</p>
          <p>{log.Gi ? "Gi" : "NoGi"}</p>
          </div>
          {log.showDetails && (
          <div className='flex items-center text-white'>
            <p>{log.offense ? "Offensive" : "Defensive"}</p>
            <p className='border-2 p-2 rounded-xl border-slate-100'>{log.technique}</p>
            <p className='font-medium'>{log.school}</p>
            <p>{log.teacher}</p>
          </div>
        )}
        </div>
        </Card>
  )
}

export default CardDetails
