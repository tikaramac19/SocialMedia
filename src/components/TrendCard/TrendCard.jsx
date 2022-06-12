import React from 'react'
import "./TrendCard.css"
import { TrendData } from '../../Data/TrendData'
const TrendCard = () => {
  return (
    <div className="TrendCard">
       <h1>Trend for You</h1>
       {
        TrendData.map((data)=>{
            return <>
            
            <div>
                <div className="namecont">
                <b>#{data.name}</b>
                </div>
                <div className="sharecont">
                    {data.shares} k
                </div>
            </div>
            
            </>
        })
       } 
    </div>
  )
}

export default TrendCard