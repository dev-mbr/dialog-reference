"use client";
import React, { useEffect, useRef } from "react";
import Dialog from "./_components/Dialog";

function Home() {
  const refDialog = useRef<HTMLDialogElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    refDialog.current?.showModal();
  };

  const closeModal = () => {
    if (refDialog.current) {
      refDialog.current.classList.add("hide");
      refDialog.current.addEventListener(
        "webkitAnimationEnd",
        function animationEnd() {
          refDialog.current?.classList.remove("hide");
          refDialog.current?.close();
          refDialog.current?.removeEventListener(
            "webkitAnimationEnd",
            animationEnd,
            false
          );
        }
      );
    }
  };

  useEffect(() => {
    refDialog.current?.addEventListener("click", function (event) {
      var rect = refDialog.current?.getBoundingClientRect();
      if (rect) {
        if (
          rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
        ) {
          closeModal();
        }
      }
    });
  }, []);

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <button
          onClick={openModal}
          className="px-6 rounded-md hover:bg-[#9C12F1] transition-all duration-300 border border-[#9C12F1] py-2"
        >
          Open modal
        </button>
      </div>
      <Dialog ref={refDialog} />
    </div>
  );
}

export default Home;
