import React from 'react'

const Records = (props) => {

  return (
    <tr className="table-row">
      <td className="table-col" data-title="Name"><span className="text">
        {
        !props.val.outCome ? 
        <div className="status is-complete">
          <span className="status-icon"></span>
          <span className="text">Negative</span>
        </div>
        :
        <div className="status is-failed">
          <span className="status-icon"></span>
          <span className="text">Positive</span>
        </div>
        }
      </span>
      </td>
      <td className="table-col" ><span className="text">{props.val.Gender}</span></td>
      <td className="table-col" ><span className="text">{props.val.Age}</span></td>
      <td className="table-col" ><span className="text">{props.val.BloodPressure===1 ? "Yes" : "No"}</span></td>
      <td className="table-col" ><span className="text">{props.val.highClr===1 ? "Yes" : "No"}</span></td>
      <td className="table-col" >
        <span className="text">{props.val.BMI}</span>
      </td>
      <td className="table-col" data-title="Duration[]"><span className="text">{props.val.PrevHeartD===1 ? "Yes" : "No"}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.Smoking===1 ? "Yes" : "No"}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.Alcoholic===1 ? "Yes" : "No"}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.generalHealth}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.MentalHealth}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.PhysicalHealth}</span></td>
      <td className="table-col" data-title="Name"><span className="text">{props.val.diffWalk===1 ? "Yes" : "No"}</span></td>

    </tr>

  )
}

export default Records
