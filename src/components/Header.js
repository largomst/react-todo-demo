import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className={"flex px-8"}>
      <h1 className="text-4xl tracking-wider flex-grow font-semibold">
        {title}
      </h1>
      <Button text="Add" color="bg-green-600" onClick={onClick}></Button>
    </header>
  );
};
Header.prototype = {
  title: PropTypes.string,
};
export default Header;
