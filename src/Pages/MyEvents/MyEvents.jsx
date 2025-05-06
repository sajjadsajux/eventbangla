import React from "react";
import MyEventCard from "./MyEventCard";
import DynamicTittle from "../../Utils/DynamicTittle";

const MyEvents = () => {
  DynamicTittle("My Events");
  const upcomingEvents = [
    {
      id: 1,
      title: "Bangladesh Investment Summit 2025",
      date: "2025-06-15",
      location: "Hotel InterContinental, Dhaka, Bangladesh",
      description: "Explore Bangladesh’s future in AI, fintech, and clean energy at the 2025 Investment Summit — a hub for startups, investors, and innovation.",
    },
    {
      id: 2,
      title: "Chittagong Street Art Festival",
      date: "2025-07-02",
      location: "Chittagong City Gallery",
      description: "The Chittagong Street Art Festival brings the city to life with vibrant murals, live graffiti, and installations—turning public walls into stories of culture, identity, and activism.",
    },
    {
      id: 3,
      title: "Bangladesh International Tech Expo 2024",
      date: "2025-07-12",
      location: "Online",
      description: "Startup Pitch Battle 2025 is Bangladesh’s top startup contest where ten emerging teams pitch to investors and experts for funding, feedback, and exposure.",
    },
  ];
  const pastEvents = [
    {
      id: 4,
      title: "Eid Celebration Tech Fair",
      date: "2025-04-10",
      location: "Sylhet Convention Center",
      description: "A blend of cultural celebration and tech showcase.",
    },
    {
      id: 5,
      title: "Women in Tech Summit",
      date: "2025-03-08",
      location: "Dhaka University",
      description: "Empowering women in tech careers through talks and workshops.",
    },
    {
      id: 6,
      title: "JS Bangladesh Meetup",
      date: "2025-02-20",
      location: "CodeCamp Hall, Dhaka",
      description: "JavaScript pros and beginners discussing modern tooling.",
    },
    {
      id: 7,
      title: "Firebase Fundamentals Workshop",
      date: "2025-01-15",
      location: "Online",
      description: "Intro to Firebase Auth, Firestore, and Hosting.",
    },
    {
      id: 8,
      title: "Hackathon 2024",
      date: "2024-12-05",
      location: "BUET Campus",
      description: "48 hours of non-stop coding and problem solving.",
    },
    {
      id: 9,
      title: "WebDev Beginners Bootcamp",
      date: "2024-11-10",
      location: "Rajshahi University",
      description: "HTML, CSS, and JavaScript from scratch.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-8"> My Events</h2>

        <div className="p-6 max-w-6xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Upcoming Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 container mx-auto">
              {upcomingEvents.map((event) => (
                <MyEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Past Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
              {pastEvents.map((event) => (
                <MyEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyEvents;
