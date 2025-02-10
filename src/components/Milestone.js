import React from "react";

const Milestone = ({ data }) => {
  return (
    <div className="key-milestones mt-5">
      <div className="container">
        <h3 className="sub-title">{data?.title}</h3>
        <div className="key-milestones-list">
          {data?.subSection.map((item) => {
            return (
              <div key={item.id} className="key-milestones-item wow fadeInLeft">
                <strong>{item.title}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Milestone;
