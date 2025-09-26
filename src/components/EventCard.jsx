const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="event-card">
      <div className="card-header">
        <span className="category-badge">{event.category}</span>
        <h3 className="event-title">{event.title}</h3>
      </div>
      
      <div className="card-content">
        <div className="event-details">
          <div className="detail-item">
            <span className="icon">📅</span>
            <span>{formatDate(event.date)} at {event.time}</span>
          </div>
          <div className="detail-item">
            <span className="icon">📍</span>
            <span>{event.location}</span>
          </div>
          <div className="detail-item">
            <span className="icon">💰</span>
            <span>{event.price}</span>
          </div>
        </div>
        
        <p className="event-description">{event.description}</p>
      </div>
      
      <div className="card-actions">
        <a href= {event.link} target="_blank" rel="noopener noreferrer">
        <button className="btn-primary">More Info</button>
        </a>
      </div>
    </div>
  )
}

export default EventCard