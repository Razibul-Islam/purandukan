import React from "react";

const Location = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 my-20 px-5">
      <div>
        <h1 className="text-[#a9a9a9] text-3xl font-normal uppercase">who's</h1>
        <h1 className="text-[100px] font-bold text-[#333333]">James</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-7">
          <div>
            <h1 className="text-2xl font-normal text-[#333333]">LONDON ADDRESS</h1>
            <p className="text-[#6a6a6a] text-[13px]">34 Parer Place via Musk Avenue Kelvin Grove, QLD, 4059</p>
          </div>
          <div>
            <h1 className="text-2xl font-normal text-[#333333]">NEWYORK ADDRESS</h1>
            <p className="text-[#6a6a6a] text-[13px]">34 Parer Place via Musk Avenue Kelvin Grove, QLD, 4059</p>
          </div>
        </div>
        <div>
          <p className="text-[#6a6a6a] text-[13px]">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram, anteposuerit litterarum formas
            humanitatis per seacula quarta decima et quinta decima.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
