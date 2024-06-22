import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

const About = () => {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 text-lg lg:max-w-3xl">{personalDetails.about}</p>
      </section>
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ role, company, country, type, startDate, endDate }) => (
            <Work
              position={role}
              company={company}
              location={country}
              type={type}
              duration={`${startDate} - ${endDate}`}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ role, company, country, type, startDate, endDate }) => (
            <Work
              position={role}
              company={company}
              location={country}
              type={type}
              duration={`${startDate} - ${endDate}`}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
