import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import MenuIcon from "../icon/menu";

const icon = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {<MenuIcon width={30} height={30} />}
    {children}
  </a>
));

const DropDown = () => {
  return (
    <Dropdown drop="end">
      <Dropdown.Toggle as={icon}></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">
          <strong>مشاهده جزییات</strong>
        </Dropdown.Item>
        <NavDropdown.Divider />
        <Dropdown.Item eventKey="2">
          <strong>تاریخچه پلاک</strong>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default DropDown;
