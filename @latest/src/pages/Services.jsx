import React from "react";
import "../index.css";
import hotchocolate from "../images/hotchocolate.png";
import pancakes from "../images/pancakes.png";
import waffles from "../images/waffles.png";

const Services = () => {
  return (
    <div className="m-10 ">
      <div className="bg1-services rounded-lg">
        {/* <p className="text-5xl font-bold text-white">Pancakes</p> */}
        <div className="bg- text-3xl text-white ">
          Perfect pancakes are easier to make than you think. This pancake
          recipe <br />
          produces thick, fluffy, and all-around delicious pancakes with just a{" "}
          <br />
          few ingredients that are probably already in your kitchen (and it's so{" "}
          <br />
          much better than the boxed stuff). <br />
        </div>
      </div>
      <div className="blue__gradient absolute z-[0] w-[40%] h-[35%] top-[150px] right-[80vh] rounded-full"></div>
      <div className="bg2-services rounded-lg mt-3 text-3xl text-white">
        This waffle recipe is the only one you'll need to make homemade waffles{" "}
        <br />
        with your waffle iron. Simple pantry ingredients mix up quickly in this{" "}
        <br />
        easy batter that can be used right away or stored in the refrigerator{" "}
        <br />
        for up to a week. Serve waffles hot with whipped cream and fresh fruit{" "}
        <br />
        or with butter and maple syrup for either breakfast, brunch, or a snack.{" "}
        <br />
      </div>
      <div className="yellow__gradient absolute z-[0] w-[40%] h-[35%] top-[700px] left-[500px] rounded-full"></div>

      <div className="bg3-services rounded-lg mt-3 text-3xl text-white">
        This old-fashioned hot chocolate is so comforting on a dreary day. It <br />
        makes the kitchen smell wonderful and it's good for the soul. Cozy up <br />
        with a hot mug of hot chocolate this winter. This hot chocolate recipe <br />
        is incredibly rich, creamy, and oh-so satisfying. <br />
      </div>
      <div className="brown__gradient absolute z-[0] w-[40%] h-[35%] top-[120vh] left-[55vh] rounded-full"></div>

    </div>
  );
};

export default Services;
