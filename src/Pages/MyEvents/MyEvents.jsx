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
      description: "Bangladesh Investment Summit 2025 brings business minds, investors, and leaders together to talk about future chances in areas like AI, banking tech, and green power.",
    },
    {
      id: 2,
      title: "Chittagong Street Art Festival",
      date: "2025-07-02",
      location: "Chittagong City Gallery",
      description: "The Chittagong Street Art Festival is a bright show of city art. Watch streets turn into live walls of paint, with murals, spray art, and fun setups.",
    },
    {
      id: 3,
      title: "Dhaka International Folk Fest",
      date: "2025-06-28",
      location: "Army Stadium, Dhaka",
      description: "Dhaka International Folk Fest is a music night full of heart and soul, showing off the deep songs and tunes of village life.",
    },
  ];
  const pastEvents = [
    {
      id: 4,
      title: "Eid Celebration Tech Fair",
      date: "2025-04-10",
      location: "Sylhet Convention Center",
      description: "A blend of cultural celebration and tech showcase. The event featured innovative tech stalls, community programs, and cultural exhibitions bringing together tech enthusiasts and families.",
    },
    {
      id: 5,
      title: "AI in Education Conference",
      date: "2025-03-08",
      location: "Dhaka University",
      description: "Exploring the role of artificial intelligence in modern education. Experts discussed adaptive learning systems, AI-driven tools for teachers, and ethical considerations in edtech.",
    },
    {
      id: 6,
      title: "JS Bangladesh Meetup",
      date: "2025-02-20",
      location: "CodeCamp Hall, Dhaka",
      description: "JavaScript pros and beginners discussing modern tooling. The meetup included live coding demos, Q&A sessions, and networking among JS community members.",
    },
    {
      id: 7,
      title: "Firebase Fundamentals Workshop",
      date: "2025-01-15",
      location: "Brac University",
      description: "Intro to Firebase Auth, Firestore, and Hosting. A hands-on session guiding beginners through real-time database setup, user authentication, and deploying their first web app.",
    },
    {
      id: 8,
      title: "Hackathon 2024",
      date: "2024-12-05",
      location: "BUET Campus",
      description: "48 hours of non-stop coding and problem solving. Teams tackled real-world challenges, collaborated with mentors, and pitched solutions to a panel of judges.",
    },
    {
      id: 9,
      title: "WebDev Beginners Bootcamp",
      date: "2024-11-10",
      location: "Rajshahi University",
      description: "HTML, CSS, and JavaScript from scratch. Designed for absolute beginners, the bootcamp offered interactive lessons, group projects, and hands-on exercises to build web fundamentals.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-8"> My Events</h2>

        <div className="p-6 max-w-6xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4 ">Booked & Upcoming</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 container mx-auto">
              {upcomingEvents.map((event) => (
                <MyEventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Previously Attended</h2>
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
