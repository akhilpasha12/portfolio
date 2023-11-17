import ScrollToTop from "react-scroll-to-top";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function ScrolltoTop () {

  function UpDownIcon () {
    return (
      <div className="top-btn">
        <p className="text-2xl ">
          <MdKeyboardDoubleArrowUp className="" color="#ff0000" />  
        </p> 
      </div> 
    ); 
  }; 

  return (
    <div>
      <ScrollToTop
        smooth
        className="!bg-white hover:!bg-black "
        component={<UpDownIcon />}
      />
    </div>
  );
}

export default ScrolltoTop;