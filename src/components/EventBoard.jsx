import EventCard from './EventCard'

const EventBoard = () => {

  const events = [
    {
      id: 1,
      title: "Arizona State Fair",
      date: "2025-11-19",
      time: "6:00 PM",
      location: "Downtown Phoenix",
      description: "Arizona State Fair offers fried food and carnival rides :)",
      category: "State State",
      price: "$17.50",
      link: "https://azstatefair.com/"
    },
    {
      id: 2,
      title: "Dia de los Muertos Festival",
      date: "2025-10-25",
      time: "10:00 AM - 6:00 PM",
      location: "Mesa Arts Center",
      description: "Celebrate our love ones that are not in here anymore",
      category: "Festival",
      price: "Free",
      link: "https://www.mesaartscenter.com/dia-de-los-muertos-festival"
    },
    {
      id: 3,
      title: "Scottsdale Fashion Week",
      date: "2025-11-25",
      time: "7:00 PM",
      location: "St Patrick Catholic Community",
      description: "Fashion show that show styling of the new trends around the globe",
      category: "Fashion",
      price: "$109 +",
      link: "https://www.tixr.com/groups/scottsdalefashionweek"
    },
    {
      id: 4,
      title: "Kierland Fine Art & Wine Festival",
      date: "2025-11-01",
      time: "10:00 AM - 5:00 PM",
      location: "Kierland Commons in Scottsdale",
      description: "Art, Wine, and Entertainment all in one place",
      category: "Food & Drink",
      price: "Free Entry",
      link: "https://www.vermillionpromotions.com/event/winter-art-wine-festival-tbd/"
    },
    {
      id: 5,
      title: "Ice Cube Concert",
      date: "2025-09-30",
      time: "8:00 PM",
      location: "Desert Diamond Arena",
      description: "Old School West Coast hip-Hop",
      category: "Concert",
      price: "$31-$195",
      link: "https://www.desertdiamondarena.com/event/ice-cube%3a-truth-to-power-four-decades-of-attitude/29/"
    },
    {
      id: 6,
      title: "UWU-Con",
      date: "2025-10-17",
      time: "5:00 PM",
      location: "Mesa Convention Center",
      description: "Convention for fans of comics, anime, gaming, and all types of food",
      category: "Convention",
      price: "$50-150",
      link: "https://uwucon.com/"
    },
    {
      id: 7,
      title: "Water Lantern Festival",
      date: "2025-11-07",
      time: "2:30 PM",
      location: "Kiwanis Park",
      description: "Beautiful date with your special one",
      category: "Arts & Culture",
      price: "$30.99 - 57.99",
      link: "https://www.waterlanternfestival.com/events/tempe"
    },
    {
      id: 8,
      title: "Phoenix Pizza Fest",
      date: "2025-11-15",
      time: "11:00 AM",
      location: "East side of Hace Park",
      description: "Enjoy multiple variation of pizzas in this festival",
      category: "Festival",
      price: "$20",
      link: "https://www.phoenix.pizza/"
    },
    {
      id: 9,
      title: "2025 Charles Schawab Cup",
      date: "2025-11-10",
      time: "9:30 AM",
      location: "Phoenix Country Club",
      description: "The top-36 players on the Charles Schwab Cup in one place",
      category: "Sports",
      price: "$30-80",
      link: "https://www.phoenixcountryclub.com/home-page/charles-schwab-cup-championship-tournament-info"
    }, 
     {
      id: 10,
      title: "Canal Convergence",
      date: "2025-11-07",
      time: "6:00 - 10:00 PM",
      location: "Solstice Park",
      description: "Engagind and interactive intallations that will display art, workshops, and activities",
      category: "Festival",
      price: "Free",
      link: "https://scottsdalearts.org/explore-scottsdale-arts/canal-convergence/about-canal-convergence/"
     }
  ]

  return (
    <div className="events-grid">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventBoard