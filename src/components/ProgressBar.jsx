import { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    window.onscroll = () => {
      const progressBar = document.querySelector(".progress-bar__fill");
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    };
  }, []);

  return (
    <div className="progress-bar fixed bottom-0 h-1.5 w-full">
      <div className="progress-bar__fill h-1.5 bg-black"></div>
    </div>
  );
};

export default ProgressBar;
