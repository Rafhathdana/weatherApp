import { useEffect } from "react";

export const warnings = (
  message = "Are you sure you want to discard changes?"
) => {
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = message;
  };

  useEffect(() => {
    // Add event listener for beforeunload when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Remove event listener for beforeunload when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};
