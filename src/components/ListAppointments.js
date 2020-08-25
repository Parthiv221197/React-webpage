import React, { Component } from 'react';
import { FaTimes } from "react-icons/fa";
import Moment from 'react-moment';

class ListAppointments extends Component{
    render(){
        return(

            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map( item => (
                    <div className="patient-item col media py-3" key={item.aptId}>
                    <div className="mr-3">
                      <button className="patient-delete btn btn-sm btn-danger" onClick={() => this.props.deleteAppointment(item)}>
                          <FaTimes />
                      </button>
                    </div>
        
                    <div className="patient-info media-body" id="hov">
                      <div className="patient-head d-flex">
                        <span 
                            className="patient-name" 
                            contentEditable 
                            suppressContentEditableWarning 
                            onBlur={
                                e => this.props.updateInfo('patientName', e.target.innerText,item.aptId)
                            }
                        >{item.patientName}</span>
                        <span className="apt-date ml-auto">
                            <Moment 
                                date={item.aptDate}
                                parse="YYYY-MM-DD hh:mm"
                                format="MMM-DD h:mma" 
                            />
                        </span>
                      </div>
        
                      <div className="Address">
                        <span className="label-item">Address:  </span>
                        <span 
                            className="Address"
                            contentEditable 
                            suppressContentEditableWarning 
                            onBlur={
                                e => this.props.updateInfo('Address', e.target.innerText,item.aptId)
                            }
                        >{item.Address}</span>
                      </div>
                      <div 
                        className="apt-notes"
                        contentEditable 
                        suppressContentEditableWarning 
                        onBlur={
                            e => this.props.updateInfo('aptNotes', e.target.innerText,item.aptId)
                        }
                        >{item.aptNotes}</div>
                    </div>
                  </div>

                ))}
        </div>
        )
    }    
}

export default ListAppointments;
