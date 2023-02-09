import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import about11 from "../../assets/about11.jpg";

const Skills = () => {
  return (
    <section className="bg-white py-16 border-t">
      <div className="">
        <div className="max-w-6xl px-6 mx-auto  lg:inset-x-0">
          <div className="lg:flex lg:items-start">
            <img
              className="object-contain object-center w-full lg:w-[32rem] rounded-lg"
              src={about11}
              alt=""
            />
            <div className=" lg:px-10 w-full">
              <h1 className="text-3xl text-[#333333] font-normal mb-7">
                OUR SKILL
              </h1>
              <div className="mt-8 lg:mt-0 w-full space-y-4">
                <div>
                  <ProgressBar
                    completed={90}
                    bgColor="#2A2A2A"
                    labelSize="13px"
                    customLabelStyles={{
                      fontWeight: "revert",
                      paddingLeft: "10px",
                    }}
                    borderRadius="3px"
                    height="30px"
                    labelAlignment="left"
                    customLabel="Development 90%"
                  />
                </div>
                <div>
                  <ProgressBar
                    completed={80}
                    bgColor="#2A2A2A"
                    customLabel="Design 80%"
                    labelSize="13px"
                    customLabelStyles={{
                      fontWeight: "revert",
                      paddingLeft: "10px",
                    }}
                    borderRadius="3px"
                    height="30px"
                    labelAlignment="left"
                  />
                </div>
                <div>
                  <ProgressBar
                    completed={70}
                    bgColor="#2A2A2A"
                    customLabel="Marketing 70%"
                    labelSize="13px"
                    customLabelStyles={{
                      fontWeight: "revert",
                      paddingLeft: "10px",
                    }}
                    borderRadius="3px"
                    height="30px"
                    labelAlignment="left"
                  />
                </div>
                <div>
                  <ProgressBar
                    completed={60}
                    bgColor="#2A2A2A"
                    customLabel="Claritas 60%"
                    labelSize="13px"
                    customLabelStyles={{
                      fontWeight: "revert",
                      paddingLeft: "10px",
                    }}
                    borderRadius="3px"
                    height="30px"
                    labelAlignment="left"
                  />
                </div>
                <div>
                  <ProgressBar
                    completed={80}
                    bgColor="#2A2A2A"
                    customLabel="Claritas 80%"
                    labelSize="13px"
                    customLabelStyles={{
                      fontWeight: "revert",
                      paddingLeft: "10px",
                    }}
                    borderRadius="3px"
                    height="30px"
                    labelAlignment="left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
