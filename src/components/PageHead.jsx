import React from "react";

const PageHead = ({ title }) => {
  return (
    <section className="h-80">
      <div className='container mx-auto'>
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default PageHead;