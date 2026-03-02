import Button from "../Button/Button";
import img19 from "../../assets/19.jpeg";

function Side() {
  return (
    <div className="border-4 border-teal-800 border-solid text-center p-5 m-[6.25px] inline-flex flex-wrap gap-4">
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>

          <img src={img19} className="w-24 h-24 object-cover" />
        </div>
      </Button>
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>

          <img src={img19} className="w-24 h-24 object-cover" />
        </div>
      </Button>
      <Button name="جديدة">
        <div className="flex flex-col items-center">
          <span>😊😊😊</span>

          <img src={img19} className="w-24 h-24 object-cover" />
        </div>
      </Button>
      <Button name="جديدة">
        <div>
          <span>😊😊😊</span>

          <img src={img19} className="w-24 h-24 object-cover" />
        </div>
      </Button>
    </div>
  );
}

export default Side;
