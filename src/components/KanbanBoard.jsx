import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import DisplayButton from './DisplayButton'
import TicketCard from './TicketCard'
import './KanbanBoard.css'
import getGroupIcon from './GetGroupIcon'

const KanbanBoard = () => {

    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [group, setGroup] = useState("status");
    const [order, setOrder] = useState("priority");

    useEffect(() => {
        const fetch = async () => {
            try {
                
                const res = await axios.get(
                    "https://api.quicksell.co/v1/internal/frontend-assignment"
                );
                setTickets(res.data.tickets);
                setUsers(res.data.users);
            }
            catch (error) {
                console.log("Error fetching tickets", error);
            }
        };
        fetch();
    }, []);

    const getUserById = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : "Unknown User";
    }

    const groupingTickets = () => {
        const grouped = {};
        tickets.forEach((ticket) => {
            const key = ticket[group];
            if (!grouped[key]) {
                grouped[key] = {tickets : [], count: 0};
            }
          grouped[key].tickets.push(ticket);
          grouped[key].count++;
        });

        for (let key in grouped) {
            grouped[key].tickets.sort((a, b) => {
                if (order === "priority") {
                    return b.priority - a.priority;
                }
                else if (order === "title") {
                    return a.title.localeCompare(b.title);
                }
                return 0;
            });
        }
        return grouped;
    };

    const groupedTickets = groupingTickets();

    return (
      <div className="container">
        <DisplayButton
          group={group}
          setGroup={setGroup}
          order={order}
          setOrder={setOrder}
        />
        <div className="kanban-container">
          {Object.keys(groupedTickets).map((group) => (
            <div key={group} className="display-group">
              <div className="group-nav">
                <div className="first">
                  <img src="/icons/Img - High Priority.svg" alt={group} />
                  <p style={{ fontWeight: 600 }}>{group}</p>
                  <p style={{ fontWeight: 600, color: "#808080" }}>
                    {groupedTickets[group].count}
                  </p>
                </div>
                <div className="second">
                  <img src="/icons/add.svg" alt="add" />
                  <img src="/icons/3 dot menu.svg" alt="add" />
                </div>
              </div>
              {groupedTickets[group].tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  getUserById={getUserById}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
}

export default KanbanBoard