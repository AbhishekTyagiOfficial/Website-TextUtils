import React, { useState } from "react";

export default function TextForm(props) {
  // usestate Hook
  const [text, setText] = useState("");

  //upper Case
  const upclick = () => {
    //arrow function
    // console.log("clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(newText);
    if (newText === "") {
      props.showAlert("Textarea shouldn't be Empty.", "danger");
      //console.log(newText);
    } else {
      props.showAlert("Text Changed the Upper Case.", "success");
      //console.log("not working");
      // document.title = "Text Modify - Upper text";
    }
  };

  // lower case
  const downclick = () => {
    // console.log("down clicked " + text);
    let newText2 = text.toLowerCase();
    setText(newText2);
    if (newText2 === "") {
      props.showAlert("Textarea shouldn't be Empty.", "danger");
      //console.log(newText);
    } else {
      props.showAlert("Text Changed the Lower Case.", "success");
      //console.log("not working");
      // document.title = "Text Modify - Lower text";
    }
  };

  // clear text
  const clearclick = () => {
    let newText2 = "";
    setText(newText2);
    // if (newText2 === "") {
    //   props.showAlert("Textarea shouldn't be Empty.", "danger");
    //   //console.log(newText);
    // } else {
    props.showAlert("Text is Cleared.", "success");
    //   //console.log("not working");
    // document.title = "Text Modify - Clear Text";

    // }
  };

  // Copy Text
  const handleCopy = () => {
    // console.log("copy");
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();

    if (text.value === "") {
      props.showAlert("Textarea shouldn't be Empty.", "danger");
      //console.log(newText);
    } else {
      props.showAlert("Text is Copied.", "success");
      //console.log("not working");
      // document.title = "Text Modify - Copied";
    }
  };

  //Remove Extra Space
  const handleExtraSapece = () => {
    let newText2 = text.split(/[ ]+/);
    setText(newText2.join(" "));
    if (newText2.join(" ") === "") {
      props.showAlert("Textarea shouldn't be Empty.", "danger");
      //console.log(newText);
    } else {
      props.showAlert("Remove the Extra Space.", "success");
      //console.log("not working");
      // document.title = "Text Modify - Remove Space";
    }
  };

  const onchange = (event) => {
    //arrow function
    // console.log("onchange click ");
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <div className="container">
          {" "}
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                {props.heading}
              </label>
              <textarea
                className="form-control"
                id="mybox"
                rows={10}
                value={text}
                onChange={onchange}
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(143 142 160)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              ></textarea>
            </div>
          </form>
          <button
            disabled={text.length === 0}
            type="button"
            className=" btn btn-primary my-3"
            onClick={upclick}
          >
            Change to Upper Case
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={downclick}
          >
            Change to Lower Case
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={clearclick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary mx-3 my-3"
            onClick={handleExtraSapece}
          >
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your Text Summary</h3>
        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          word and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          Minutes to reads.
        </p>
        <h3>Preview</h3>
        <pre>
          {text.length > 0 ? text : "Enter some text into the textbox."}
        </pre>
      </div>
    </>
  );
}
