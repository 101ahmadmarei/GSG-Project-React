import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBContainer,
} from "mdb-react-ui-kit";

const options = [
  "Apparels",
  "Accessories",
  "Others",
  "Shop by collection",
  "Shop by techniques",
];
const childOptions = [
  [
    "SMARTPHONE",
    "FRAGRANCES",
    "SKINCARE",
    "GROCERIES",
    "HOME-DECORATION",
    "LAPTOPS",
  ],
  ["NECKLACES", "SCARFS"],
  ["HOUSEWARE", "GIFT CARDS"],
  ["SALE/LAST CALL", "ESSENTIALS"],
];

export default function Hover() {
  const [dropdownActive, setDropdownActive] = useState(false);

  return (
    <MDBContainer className="d-flex justify-content-center mt-5 basic">
      <MDBDropdown isOpen={dropdownActive}>
        <MDBDropdownToggle
          onMouseEnter={() => setDropdownActive(true)}
          onMouseLeave={() => setDropdownActive(false)}
        >
          Dropdown button
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Submenu &raquo;</MDBDropdownLink>
            <ul className="dropdown-menu dropdown-submenu">
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 1</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 2</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">
                  Submenu item 3 &raquo;
                </MDBDropdownLink>
                <ul className="dropdown-menu dropdown-submenu">
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Multi level 1</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="#">Multi level 2</MDBDropdownLink>
                  </MDBDropdownItem>
                </ul>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 4</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 5</MDBDropdownLink>
              </MDBDropdownItem>
            </ul>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBContainer>
  );
}
