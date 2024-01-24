import React, { forwardRef } from "react";

interface Props {
  transitions?:
    | "top-to-bottom"
    | "bottom-to-top"
    | "right-to-left"
    | "left-to-right";
}

// eslint-disable-next-line react/display-name
const Dialog = forwardRef(({}, ref: any) => {
  return (
    <dialog ref={ref} className={`h-[38rem] w-[30rem] dialog top-to-bottom`}>
      <iframe
        className="w-full h-full"
        src="https://1ku7oxcfm1h.typeform.com/to/wmhKhsL5#conversion=xxxxx"
      ></iframe>
    </dialog>
  );
});

export default Dialog;
