import React, { useEffect, useRef, forwardRef } from "react";
interface Props {
  transitions?:
    | "top-to-bottom"
    | "bottom-to-top"
    | "right-to-left"
    | "left-to-right";
}

// eslint-disable-next-line react/display-name
const Dialog = forwardRef(
  ({ transitions = "left-to-right" }: Props, ref: any) => {
    return (
      <dialog
        ref={ref}
        className={`fixed lg:top-0 top-auto h-[38rem] lg:w-[30rem] w-full dialog  ${transitions}`}
      >
        <div className="w-full h-full bg-slate-600"></div>
      </dialog>
    );
  }
);

export default Dialog;
