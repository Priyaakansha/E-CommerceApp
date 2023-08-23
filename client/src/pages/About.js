import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Hello There! My self Akansha priya, MCA Final Year student at "Maulana Abul Kalam University of Technology, West Bengal.
            I am currently occupied into Problem solving on various coding platforms like LEETCODE, GFG, CODECHEF, etc. Currently I am trying to upskill
            my development Skills and implement my Knowledge to make FULL_STACK PROJECT.
            <br/><br/>
            This Project a server-side E-commerce website which is made by using MERN stack. The user Interface of this application is mae by using React.js
            which a free and open-source front-end JavaScript library. I have user Node.js as cross-platform runtime environment to make the website fast
            scalable.For backend , Express.js has been used in the backend to fetch APIs and MongoDB as a Database."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;