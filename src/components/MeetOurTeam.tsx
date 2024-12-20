import React from 'react';
import Divyanshu from './images/Divyanshu.jpg';
import Siddhant from './images/Siddhant.jpg';
import Srijan from './images/Srijan.jpg';
import Rohit from './images/Rohit.jpg';

// Define props type for TeamMember component
interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p>{description}</p>
    </div>
  );
};

const MeetOurTeam: React.FC = () => {
  return (
    <section className="meet-our-team">
      <h2>Meet Our Team</h2>
      <p>We are a group of passionate professionals dedicated to driving innovation and excellence. Get to know the people behind PixelAI</p>
      <div className="team-members">
        <TeamMember
          name="Divyanshu"
          role="AI Developer"
          description="Divyanshu is a passionate AI developer with a knack for transforming complex problems into innovative solutions. With expertise in machine learning, natural language processing, and data analytics, he"
          image={Divyanshu}
        />
        <TeamMember
          name="Siddhant"
          role="Backend Developer"
          description="Siddhant is a skilled backend developer with a strong foundation in server-side programming and database management. Proficient in languages such as Python, Java, and Node.js, he excels at building"
          image={Siddhant}
        />
        <TeamMember
          name="Srijan"
          role="Database Developer"
          description="Srijan is a dedicated database developer with expertise in designing, implementing, and optimizing database systems. Proficient in SQL, NoSQL, and data modeling, he ensures data integrity and"
          image={Srijan}
        />
        <TeamMember
          name="Rohit"
          role="UI/UX, Animations"
          description="Rohit is a creative UI/UX designer and animator with a passion for crafting engaging and intuitive user experiences. With a keen eye for aesthetics and a deep understanding of user behavior, he designs"
          image={Rohit}
        />
      </div>
    </section>
  );
};

export default MeetOurTeam;
