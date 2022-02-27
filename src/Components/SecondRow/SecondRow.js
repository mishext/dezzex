import React from "react";
import "./index.css";
import Table from "react-bootstrap/Table";
import Company1 from "../Images/cp1.png";
import Company2 from "../Images/cp2.png";
import Company3 from "../Images/cp3.png";

const Data = [
  {
    id: 0,
    img: Company1,
    project: "Collabee Private Co.",
    created: "Thu, 26 Oct",
    reporter: "Christian Matthews",
    due: "Thu, 26 Oct",
    stats: "IN PROGRESS",
  },
  {
    id: 1,
    img: Company2,
    project: "Cambr Card",
    created: "Wed, 25 Oct",
    reporter: "Arthur Cook",
    due: "Thu, 26 Oct",
    stats: "OPEN",
  },
  {
    id: 2,
    img: Company3,
    project: "Target",
    created: "Tue, 24 Oct",
    reporter: "Evelyn Tucker",
    due: "Thu, 26 Oct",
    stats: "IN PROGRESS",
  },
  {
    id: 3,
    img: Company1,
    project: "Gramma Limited",
    created: "Mon, 23 Oct",
    reporter: "Donald Curtis",
    due: "Thu, 26 Oct",
    stats: "IN PROGRESS",
  },
];

// const DataList = Data.map((proj) => (
//   <div key={proj.id} className="dataContainer">
//     <div>
//       <img src={proj.img} className="imgData" />
//       {proj.project}
//     </div>

//     {/* <p>{proj.project}</p> */}
//     <p>{proj.created}</p>
//     <p>{proj.reporter}</p>
//     <p>{proj.due}</p>
//     <p>{proj.stats}</p>
//   </div>
// ));

function SecondRow() {
  return (
    <div className="SecondRowContainer">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>RECENT PROJECTS</th>
            <th>CREATED</th>
            <th>REPORTER</th>
            <th>DUE</th>
            <th>STATS</th>
          </tr>
        </thead>
        {Data.map((e) => (
          <tbody key={e.id}>
            <tr>
              <td>
                <img src={e.img} className="imgData" />
                {e.project}
              </td>
              <td>{e.created}</td>
              <td>{e.reporter}</td>
              <td>{e.due}</td>
              <td className="statsButton">
                <p>{e.stats}</p>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      {/* <div className="just">
        <p>RECENT PROJECTS</p>
        <p>CREATED</p>
        <p>REPORTER</p>
        <p>DUE</p>
        <p>STATS</p>
      </div>

      <div>{DataList}</div> */}
    </div>
  );
}

export default SecondRow;
