import React from 'react'
import './TicketCard.css'


const TicketCard = ({ticket, getUserById}) => {
  return (
    <div className="ticket-container">
      <div className="ticket-body">
        <div className="ticket-heading">
          <h1 id={ticket.id}>{ticket.id}</h1>
          <div className="profile">
            <img
              className="profile-pic"
              src="/icons/actor1.jpg"
              alt="Profile"
            />
            <span className="profile-dot"></span>
          </div>
        </div>
        <div className="ticket-title">
          <h2>{ticket.title}</h2>
        </div>
        <div className="ticket-type">
          <div className="icon-badge">
            <div className="icon">
              <span className="tag-ex">!</span>
            </div>
          </div>
          <div className="tag">
            <span></span>
            <h3>{ticket.tag}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketCard