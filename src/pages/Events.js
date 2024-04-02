import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Events = () => {
  const handleclick = () => {
    toast.success("Hitting button is success", {
      theme: "colored",
      autoClose: 900,
    });
    // toast.success("hello");
    // toast.error("hello");
    // toast.warning("hello");
  };
  return (
    <>
      <h3 style={{ backgroundColor: "lightyellow", textAlign: "center" }}>
        We Are Working On This Page
      </h3>
      <button
        style={{ padding: "10px 20px", borderRadius: "10px" }}
        onClick={handleclick}
      >
        click me
      </button>
      <ToastContainer></ToastContainer>
    </>
  );
};
export default Events;
