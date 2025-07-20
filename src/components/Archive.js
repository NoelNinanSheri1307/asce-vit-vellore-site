// // Archive.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import "./Archive.css";

// const archiveData = [
//   {
//     year: "2023–24",
//     events: ["Civil Quiz Fest", "Bridge Design Contest"],
//     team: "Team Led by Ryan and John",
//     highlights: ["2nd Place - TechExpo", "Paper Published in CivilScope"],
//   },
//   {
//     year: "2022–23",
//     events: ["GeoTech Challenge", "Concrete Workshop"],
//     team: "Team Led by Sakshi & Aditya",
//     highlights: ["Best College Chapter Award", "Runner-up - Infra Hackathon"],
//   },
// ];

// const Archive = () => {
//   return (
//     <motion.section
//       id="archive"
//       className="archive-section common-section"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2>Archive</h2>
//       <div className="archive-list">
//         {archiveData.map((item, index) => (
//           <div key={index} className="archive-box">
//             <h3>{item.year}</h3>
//             <p><strong>Team:</strong> {item.team}</p>
//             <p><strong>Events:</strong></p>
//             <ul>
//               {item.events.map((event, i) => (
//                 <li key={i}>{event}</li>
//               ))}
//             </ul>
//             <p><strong>Highlights:</strong></p>
//             <ul>
//               {item.highlights.map((h, j) => (
//                 <li key={j}>{h}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Archive;


//Arpit's Code:
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Archive.css";
import event1Img from "../imagesandassets/event1.png";
import event2Img from "../imagesandassets/event2.png";
import event3Img from "../imagesandassets/event3.png";
import event4Img from "../imagesandassets/event4.png";
import event5Img from "../imagesandassets/event5.png";
import event6Img from "../imagesandassets/event6.png";
import event7Img from "../imagesandassets/event7.png";
import event8Img from "../imagesandassets/event8.png";
import event9Img from "../imagesandassets/event9.png";
import event10Img from "../imagesandassets/event10.png";
import event11Img from "../imagesandassets/event11.png";
import event12Img from "../imagesandassets/event12.png";
import event13Img from "../imagesandassets/event13.png";
import event14Img from "../imagesandassets/event14.png";
import event15Img from "../imagesandassets/event15.png";
import event16Img from "../imagesandassets/event16.png";
import event17Img from "../imagesandassets/event17.png";
import event18Img from "../imagesandassets/event18.png";
import event19Img from "../imagesandassets/event19.png";
import event20Img from "../imagesandassets/event20.png";
import event21Img from "../imagesandassets/event21.png";

const archiveData = [
  {
    year: "2024",
    leadership: {
      chairperson: "Aditya Verma (B.Tech Civil Engineering)",
      faculty: "Dr. Sofi A (Professor Grade 1)",
      department:
        "Department of Structural and Geotechnical Engineering, VIT Vellore",
    },
    events: [
      {
        title: "Ice Breaking Session",
        imageUrl: event21Img,
        date: "5th March",
        time: "11:30 am - 1 pm",
        location: "CDMM Seminar Hall (213)",
        description:
          "ASCE 2024's first event aimed to foster bonds between core members and the new board. New members introduced themselves, and faculty coordinator Dr. Sofi A. shared her views and goals for the future of ASCE.",
        highlights: [
          "OD's provided for attendees",
          "New board member introductions",
          "Vision-setting by faculty coordinator",
        ],
        quote: "The beginning of another great year for ASCE-VIT",
      },
      {
        title: "CASA: Stand as One Against Substance Abuse",
        imageUrl: event20Img,
        date: "13th March",
        time: "11:30 am - 1:00 pm",
        location: "CDMM 103",
        description:
          'The CASA event "Stand as One Against Substance Abuse" was an enlightening event held by ASCE-VIT. It raised awareness about substance abuse, the risks of its continued use, and how to support oneself or others facing this challenge. The session, led by a speaker from The Fourth Wave Foundation, provided detailed insights in an engaging manner.',
        highlights: [
          "Insights from The Fourth Wave Foundation",
          "Awareness about consequences of substance abuse",
          "Support strategies for peers and self",
          "Organized by Annie Elsa Sujith | 8848673883",
        ],
        quote: "Stand united. Stand aware.",
      },
      {
        title: "Waterworld Symposium",
        imageUrl: event19Img,
        date: "15th & 27th March",
        time: "—",
        location: "—",
        description:
          "The Waterworld Symposium was held on 15th and 27th March to discuss the future of water resource management. This groundbreaking event featured a session led by Prof. Dr. S. Parimala Renganayaki, an expert in Water Resource Engineering and Management, along with insightful presentations. Attendees had the opportunity to exchange ideas and insights. Participants also presented research papers during a tech talk conducted by Dr. Sofi A., covering diverse topics in water resource management.",
        highlights: [
          "Talk by Dr. Parimala Renganayaki (Associate Professor, School of Civil Engineering, VIT)",
          "Tech talk session by student participants",
          "Abstract submission deadline: 24 March",
          "Certificates for top 3 presentations",
          "Participation certificates for all attendees",
          "Organized by Meetu R Binu | 8304908960",
          "Contact: events.sw@vit.ac.in",
        ],
        quote: "Water is the future—engineer it wisely.",
      },
      {
        title: "Sustain-o-poly (Yantra '24)",
        imageUrl: event18Img,
        date: "17th–18th March",
        time: "9:00 AM - 8:00 PM (Day 1), 9:00 AM - 1:00 PM (Day 2)",
        location: "Rajaji Hall, MB (Day 1), Ambedkar Auditorium, TT (Day 2)",
        description:
          "Sustain-o-poly aimed to showcase participants' creativity while highlighting the importance of sustainable structures in modern infrastructure. The event featured an expert lecture by Mr. Chetan Sodaye, a two-day Build-a-thon competition, and an engaging board game with a sustainable twist on Monopoly.",
        highlights: [
          "Expert lecture by Mr. Chetan Sodaye",
          "Two-day Build-a-thon competition",
          "Sustain-o-poly board game on eco-friendly systems",
          "Organized under Yantra ’24: Building a Sustainable Future",
          "Coordinated by Aydha K A | 18921993.234",
          "For queries: yantra.avd@vit.ac.in",
        ],
        quote: "Build smart. Build green. Build the future.",
      },
      {
        title: "Waterworld Symposium 2.0",
        imageUrl: event17Img,
        date: "27th March",
        time: "6:00 PM – 9:00 PM",
        location: "Google Meet",
        description:
          "Waterworld Symposium 2.0, where participants take the center stage to delve deeper into the intersection of technology and water resource management. In this dynamic continuation of the symposium, participants will showcase cutting-edge innovations, share groundbreaking research, and explore practical applications of technology to address the complex challenges facing our water systems. The Tech Talk session promises to inspire, inform, and ignite new ideas for sustainable water management.",
        highlights: [
          "Tech Talk by participants",
          "Online event on Google Meet",
          "Certificates for top 3 presentations",
          "Participation certificates for all attendees",
          "Event Coordinator: Meetu R Binu | 8304908960",
          "Contact: events.sw@vit.ac.in, asce@vit.ac.in",
          "#ASCE.VIT",
        ],
        quote: "Engineer tomorrow's water systems—today.",
      },
      {
        title: "Sustainable Development Goals (SDGs) Awareness Event",
        imageUrl: event16Img,
        date: "22nd April 2024",
        time: "9:00 AM – 11:00 PM",
        location: "Google Forms (Online)",
        description:
          "The Sustainable Development Goals (SDGs) are a set of 17 global objectives established by the United Nations to tackle critical issues like poverty, inequality, and climate change by 2030. This event aimed to assess participants' awareness of the SDGs, discuss progress made since their adoption, and highlight their importance for a sustainable future.",
        highlights: [
          "Online awareness event via Google Forms",
          "Focused on 17 UN Sustainable Development Goals",
          "Participants evaluated on their knowledge of SDGs",
          "Event Coordinator: Annie Elsa Sujin | 8843",
        ],
        quote: "Know the goals. Shape the future.",
      },
      {
        title: "Quiztopia 2.0 – Stability of Structural Tall Buildings",
        imageUrl: event15Img,
        date: "25 March 2024",
        time: "9:00 AM – 11:00 PM",
        location: "Google Forms (Online)",
        description:
          "An online quiz testing participants' knowledge of structural engineering principles essential for designing resilient tall buildings.",
        highlights: [
          "Focused on tall building stability concepts",
          "Accessible via Google Forms",
          "Coordinator: Ayshok A | 8921993234",
          "Email: events.sw@vit.ac.in",
        ],
        quote: "Test your height of knowledge.",
      },
      {
        title: "Driving Towards Safety",
        imageUrl: event14Img,
        date: "22 June 2024",
        time: "7:00 PM – 8:00 PM",
        location: "Google Meet",
        description:
          "A session addressing road safety, driving ethics, and road rage awareness to promote safer commuting practices.",
        highlights: [
          "Covers road safety and driving behavior",
          "Online session via Google Meet",
          "Coordinator: Shreya A Raghavan | 0522105884",
          "Email: events.sw@vit.ac.in",
          "Social: @asce.vit | asce@vit.ac.in",
        ],
        quote: "Drive safe. Stay sane.",
      },
      {
        title: "Highway Mastermind",
        imageUrl: event13Img,
        date: "25 June 2024",
        time: "10:00 AM – 10:00 PM",
        location: "Instagram",
        description:
          "A quiz on highway types, history, and engineering, designed to expand participants' knowledge.",  
        highlights: [
          "Hosted on Instagram",
          "Test on highway-related knowledge",
          "Coordinator: Meetu R Binu | +91 83049 08960",
          "Email: events.sw@vit.ac.in",
          "Social: @asce.vit",
        ],
        quote: "Hit the road to knowledge.",
      },
      {
        title: "Bridge Builder Challenge",
        imageUrl: event12Img,
        date: "4 July 2024",
        time: "10:00 AM – 10:00 PM",
        location: "Instagram Stories",
        description:
          "A quiz testing knowledge of bridge types, history, and global examples.",
        highlights: [
          "Bridge engineering quiz on Instagram",
          "Interactive and informative",
          "Coordinators: Aysha (+91 89219 93234) & Niranjana (+91 9446784139)",
          "Email: events.sw@vit.ac.in",
          "Social: @asce.vit",
        ],
        quote: "Span the gap between fun and facts.",
      },
      {
        title: "InnovateBuild",
        imageUrl: event11Img,
        date: "14 July 2024",
        time: "10:00 AM – 10:00 PM",
        location: "Instagram",
        description:
          "A quiz on innovative construction techniques, including BIM, 3D printing, and AI in modern engineering.",
        highlights: [
          "Instagram-based quiz",
          "Covers latest trends in construction",
          "Coordinator: Swarna Villa | +91 6382 109 499",
          "Email: events.sw@vit.ac.in",
        ],
        quote: "Construct your future with innovation.",
      },
      {
        title: "Unwind – Member Feedback Session",
        imageUrl: event10Img,
        date: "14 August 2024",
        time: "11:00 AM – 1:00 PM",
        location: "CDMM 105",
        description:
          "An interactive session for ASCE members to share ideas and shape future club events.",
        highlights: [
          "Member-exclusive in-person event",
          "Open platform for feedback and suggestions",
          "Venue: CDMM 105",
        ],
        quote: "Relax. Reflect. Rebuild.",
      },
      {
        title: "Craft It Out! – Outreach Workshop",
        imageUrl: event9Img,
        date: "17 August 2024",
        time: "10:30 AM – 12:30 PM",
        location: "Anbu Illam",
        description:
          "A creative origami and paper-folding workshop for children with disabilities, fostering teamwork and problem-solving.",
        highlights: [
          "Hands-on outreach activity",
          "Promotes creativity and inclusivity",
          "Coordinator: Shreya A. Raghavan | 9522105884",
          "Email: eventsaw@vit.ac.in",
        ],
        quote: "Crafting change, one fold at a time.",
      },
      {
        title: "Bedrock Battle – Foundation Engineering Quiz",
        imageUrl: event8Img,
        date: "17 September 2024",
        time: "9:00 AM – 11:00 PM",
        location: "Google Forms",
        description:
          "An engaging quiz testing knowledge of structural foundations – the critical base that ensures stability and durability in civil engineering projects.",
        highlights: [
          "Covers core foundation engineering concepts",
          "Online quiz format",
          "Email: events.sw@vit.ac.in",
        ],
        quote: "Start at the bottom. Dominate the top.",
      },
      {
        title: "DesignForge – Two-Day Design Workshop",
        imageUrl: event7Img,
        date: "19-20 September 2024",
        time: "Full Day",
        location: "CADD Centre (Katpadi) + Competition Venue",
        description:
          "A workshop focused on enhancing civil design skills through expert training and a competitive design-a-thon.",
        highlights: [
          "STAAD Pro skill enhancement",
          "SAPD-based design process",
          "Day 1: Expert lecture | Day 2: Design-a-thon",
        ],
        quote: "Design. Develop. Dominate.",
      },
      {
        title: "Exploring Dimensions – 3D Concrete Printing Workshop",
        imageUrl: event6Img,
        date: "8 October 2024",
        time: "9:30 AM – 12:30 PM",
        location: "CDMM 303",
        description:
          "A technical workshop on 3D printing in construction, showcasing its role in sustainable and efficient infrastructure solutions.",
        highlights: [
          "Speaker: Dr. Jayaprakash J.",
          "Live insights into 3D concrete printing tech",
          "Contact: Abhinav Sahil & Mridul | +91 80199 76158",
          "Email: events.av@vit.ac.in",
        ],
        quote: "Print your way into the future.",
      },
      {
        title: "Industrial Visit – RMC Plant Tour",
        imageUrl: event5Img,
        date: "22 October 2024",
        time: "TBD",
        location: "RMC Plant",
        description:
          "A guided tour of a ready-mix concrete facility to observe real-world applications of civil engineering in material production.",
        highlights: [
          "Guided by Dr. Sofi A. & Prof. Abdul Rahim",
          "Hands-on industrial exposure",
        ],
        quote: "Concrete knowledge in a concrete plant.",
      },
      {
        title: "Cityscape – Urban Planning Quiz",
        imageUrl: event4Img,
        date: "20 November 2024",
        time: "9:00 AM – 11:30 PM",
        location: "Google Forms",
        description:
          "An interactive quiz exploring themes in sustainable urban development, land use, and smart city planning.",
        highlights: [
          "Requires VTOP registration",
          "Coordinator: Athdhar Anli | 6883396072",
          "Email: events.sw@vit.ac.in",
        ],
        quote: "Know your city. Shape the future.",
      },
      {
        title: "Highway Mastermind 2.0 – Transportation Engineering Quiz",
        imageUrl: event3Img,
        date: "12 December 2024",
        time: "9:00 AM – 11:30 PM",
        location: "Google Forms",
        description:
          "A quiz diving into the evolution of transport systems, their innovations, and their significance in civil engineering.",
        highlights: [
          "Coordinator: Udwas Saha | 9476019906",
          "Social: @asce.vit",
        ],
        quote: "From dirt paths to smart lanes – master it all.",
      },
      {
        title: "Legacy LinkUp – Alumni Interaction Session",
        imageUrl: event2Img,
        date: "14 December 2024",
        time: "3:30 PM – 5:30 PM",
        location: "Google Meet",
        description:
          "An insightful alumni session featuring Mr. Jensel George from L&T Realty, focusing on career development and academic planning.",
        highlights: [
          "Career and industry guidance",
          "Coordinator: Aditya Verma | +91 98808 15411",
        ],
        quote: "Connect with the past. Step into the future.",
      },
      {
        title: "One Step At A Time – SDG Guest Lecture",
        imageUrl: event1Img,
        date: "18 December 2024",
        time: "11:00 AM – 12:00 PM",
        location: "CDMM 303",
        description:
          "An expert lecture discussing six key environmental SDGs including climate action and sustainable cities.",
        highlights: [
          "Speaker: Dr. Uma Shankar",
          "Focus on environmental goals",
          "Coordinators: Lena (+91 90748 61130), Annie Marie (+91 88486 73883)",
        ],
        quote: "One SDG at a time. One planet to save.",
      },
    ],
  },
];


const ArchiveEventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`archive-event-card ${expanded ? "archive-expanded" : ""}`}
      onClick={toggleExpanded}
    > {event.imageUrl &&(
    <img
      src={event.imageUrl}
      alt={event.title}
      className="archive-event-image"
      loading="lazy"
    />
  )}
      <h5 className="archive-event-title">{event.title}</h5>
      
      <div className="archive-event-meta">
        <p><span className="meta-label">DATE:</span> {event.date}</p>
        <p><span className="meta-label">TIME:</span> {event.time}</p>
        <p><span className="meta-label">LOCATION:</span> {event.location}</p>
      </div>
       
      <p className="archive-event-description">{event.description}</p>

      {event.quote && (
        <blockquote className="archive-blockquote">"{event.quote}"</blockquote>
      )}

      <div className="archive-highlights">
        
        <p className="archive-highlight-title">KEY FEATURES:</p>
        <ul>
          {event.highlights.map((hl, j) => (
            <li key={j}>
              <span className="archive-bullet"></span> {hl}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Archive = () => (
  <motion.section
    id="archive-section-component"
    className="archive-section-component"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="archive-header">ASCE ARCHIVE</h2>

    <div className="archive-list-component">
      {archiveData.map((yearData, idx) => (
        <div key={idx} className="archive-box-component">
          <h3 className="archive-box-title">
            {yearData.year} ACTIVITIES
          </h3>

          <div className="archive-content-component">
            <div className="archive-leadership">
              <p>
                <span className="archive-highlight-text">
                  CHAIRPERSON:
                </span>{" "}
                {yearData.leadership.chairperson}
              </p>
              <p>
                <span className="archive-highlight-text">
                  FACULTY ADVISOR:
                </span>{" "}
                {yearData.leadership.faculty}
              </p>
              <p className="archive-department">
                {yearData.leadership.department}
              </p>
            </div>
              <h4 className="archive-events-header">EVENTS CONDUCTED </h4>

            <div className="archive-events">
              
              {yearData.events.map((event, i) => (
                <ArchiveEventCard key={i} event={event} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Archive;
