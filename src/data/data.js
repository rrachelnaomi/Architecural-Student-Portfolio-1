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
function ContactInfo() {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <div>
          <p>
            Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
          </p>
          <p>Phone: {data.contact.phone}</p>
          <p>
            LinkedIn:{" "}
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
              Rachel's LinkedIn
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
              Rachel's GitHub
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default ContactInfo;