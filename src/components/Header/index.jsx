import React from "react";

import Calendar from "../../assets/icons/Calendar.svg";
import CheckSquare from "../../assets/icons/CheckSquare.svg";
import MessageSquare from "../../assets/icons/MessageSquare.svg";
import Mail from "../../assets/icons/Mail.svg";
import Oval from "../../assets/icons/Oval.svg";
import Search from "../../assets/icons/Search.svg";
import Bell from "../../assets/icons/Bell.svg";
import Star from "../../assets/icons/Star.svg";
import VerticalLine from "../../assets/icons/VerticalLine.svg";
import Home from "../../assets/icons/Home.svg";
import ChevronsRight from "../../assets/icons/ChevronsRight.svg";
import Settings from "../../assets/icons/Settings.svg";

import {
  Container,
  IconsHeader,
  IconsHeaderSection,
  SubHeaderSection,
  Text,
  Text24,
  User,
  UserInfo,
} from "./styles";

function Header() {

  return (
    <Container>
      <IconsHeaderSection>
        <IconsHeader>
          <img alt="img" width="19px" height="18px" src={CheckSquare} />
          <img alt="img" width="18px" height="18px" src={MessageSquare} />
          <img alt="img" width="20px" height="16px" src={Mail} />
          <img alt="img" width="18px" height="20px" src={Calendar} />
          <img alt="img" width="20px" height="19.02px" src={Star} />
        </IconsHeader>
        <UserInfo>
          <Text>English</Text>
          <img alt="img" width="18px" height="20px" src={Bell} />
          <img alt="img" width="18px" height="18px" src={Search} />
          <User>
            <div>
              <Text>John Doe</Text>
              <Text>Available</Text>
            </div>
            <img alt="img" width="34px" height="34px" src={Oval} />
          </User>
        </UserInfo>
      </IconsHeaderSection>
      <SubHeaderSection>
        <div>
          <Text24>Card Actions</Text24>
          <img alt="img" width="1px" height="34px" src={VerticalLine} />
          <img alt="img" width="13px" height="15px" src={Home} />
          <img alt="img" width="11px" height="8px" src={ChevronsRight} />
          <Text>eCommerce</Text>
          <img alt="img" width="11px" height="8px" src={ChevronsRight} />
          <Text>Electronics</Text>
        </div>
        <img alt="img" width="40px" height="40px" src={Settings} />
      </SubHeaderSection>
    </Container>
  );
}

export default Header;
