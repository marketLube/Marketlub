import React from "react";
import Icon from "@mdi/react";
import { mdiArrowTopRight } from "@mdi/js";

export const Lets = () => {
  return (
    <div>
      <div className="lets">
        <div className="lets-row">
          <h6 className="lets-h6">LET'S CRAFT A STUNNING</h6>
          <Icon path={mdiArrowTopRight} className="lets-icon" />
        </div>
        <h6 className="lets-h6">PROJECT TOGETHER</h6>
      </div>
      <div className="divider"></div> {/* White line */}
      <div className="small-footer">
      </div>
    </div>
  );
};
