import React from "react";
// import PropTypes from "prop-types";

// import { Link, Outlet } from "react-router-dom";

export default function About(props) {
  const title = "Text Modify";
  // const [mystyle, setstyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#392742",
    backgroundColor: props.mode === "dark" ? "#392742" : "white",
  };

  // const [btnText, setBtnText] = useState("Dark Mode");

  // const toggleMode = () => {
  //   if (mystyle.color == "white") {
  //     setBtnText("Dark mode");
  //     setstyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setBtnText("Light Mode");
  //     setstyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   }
  // };

  return (
    <>
      <div className="container rounded" style={mystyle}>
        <h3 className="my-4">About Us</h3>
        <p>
          {" "}
          At {title}, we believe that words have the power to shape ideas,
          inspire change, and connect people. Our mission is to provide you with
          a comprehensive suite of text manipulation tools that empower you to
          unleash your creativity, enhance your productivity, and simplify your
          work. Whether you're a student, writer, researcher, or professional in
          any field, our user-friendly platform offers a wide range of
          text-related functionalities that cater to your specific needs. From
          basic formatting and grammar correction to advanced text analysis and
          language translation, {title} is here to simplify and streamline your
          text-related tasks. Key Features: Text Formatting: Effortlessly
          transform your text with various formatting options, including
          capitalization, line spacing, bullet points, and more. Word Count and
          Character Count: Quickly determine the number of words, characters,
          and sentences in your text, ideal for meeting strict word limits or
          evaluating content length. Grammar and Spell Checking: Polish your
          writing with our advanced grammar and spell checking tool, ensuring
          error-free and professional-looking content. Text Summarization:
          Condense lengthy articles, documents, or essays into concise
          summaries, saving you valuable time and helping you grasp the main
          points quickly. Language Translation: Break down language barriers by
          translating text between multiple languages, expanding your global
          reach and facilitating effective communication. Keyword Extraction:
          Identify the most important terms and phrases in your text, ideal for
          SEO optimization, content analysis, and information retrieval. Random
          Text Generation: Generate random text, lorem ipsum, or placeholder
          content to fill in design prototypes or test visual layouts. Case
          Conversion: Convert your text between lowercase, uppercase, title
          case, and other variations, ensuring consistency and meeting specific
          formatting requirements. Our platform is designed to be intuitive and
          easy to use, making it accessible to users of all skill levels.
          Whether you need a quick text fix or require more advanced text
          manipulation, {title} has you covered. Join our growing community of
          users who rely on {title} to enhance their writing, simplify their
          tasks, and unleash their full potential. Start exploring our range of
          tools today and experience the power of words at your fingertips.
          <br />
          Happy text manipulation!
          <br /> The {title} Team
        </p>

        {/* <button
          onClick={toggleMode}
          type="button"
          className="btn btn-primary my-3"
        >
          {btnText}
        </button> */}
        {/* <Link to="robin">Robin</Link>
        <Link to="party">Party</Link>
        <Link to="shadhi">Shadhi</Link>
        <Outlet /> */}
      </div>
    </>
  );
}
