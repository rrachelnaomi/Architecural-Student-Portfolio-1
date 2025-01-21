// CUSTOMIZE THIS FILE TO ADD YOUR OWN DATA

const data = {
    name: "Rachel Bekker",
    bio: "Undergraduate Bachelor of Design in City Innovation student at the University of Calgary passionate about sustainability and enhancing the human experience.",
    contact: {
        email: "rachel.bekker@ucalgary.ca",
        phone: "587-220-4465",
        linkedin: "https://www.linkedin.com/in/rachel-bekker-564223347",
        github: "https://github.com/rrachelnaomi",
    }
}

export default data;
// Example rendering in React
function ContactLinks({ contact }) {
    return (
      <div>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>
          LinkedIn:{" "}
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            Rachel's LinkedIn
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            Rachel's GitHub
          </a>
        </p>
      </div>
    );
  }