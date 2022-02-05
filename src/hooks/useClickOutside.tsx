import React, {useEffect} from "react";

export function useClickOutside(ref: React.RefObject<any>, setState: React.Dispatch<React.SetStateAction<boolean>>): void {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
