import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd ,showAdd}) => {
  return (
    <header className="flex">
      <h1 className="text-4xl tracking-wider flex-grow font-semibold">
        {title}
      </h1>
      <Button text={showAdd ?"Add":"Close"} color={showAdd? "bg-green-600":"bg-red-600"} onClick={onAdd}></Button>
    </header>
  );
};
Header.prototype = {
  title: PropTypes.string,
};
export default Header;
