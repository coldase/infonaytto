import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

//Icons
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgTemplate, CgProfile } from "react-icons/cg";
import { BsPinMap } from "react-icons/bs";
import { FiMonitor, FiSettings } from "react-icons/fi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const UserNav = ({ isnav, setisnav }) => {
  const handleLogout = () => {
    localStorage.removeItem("userid");
    window.location.href = "/";
  };
  return (
    <div>
      <SideNav
        expanded={isnav}
        style={{ backgroundColor: "#11324D" }}
        onSelect={(selected) => {
          setisnav(false);
          if (selected === "logout") {
            handleLogout();
          }
        }}
      >
        <SideNav.Toggle onClick={() => setisnav(!isnav)} />
        <SideNav.Nav defaultSelected="omasivu">
          <NavItem eventKey="omasivu">
            <NavIcon
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AiOutlineHome
                style={{ fontSize: "1.45em", alignSelf: "center" }}
              />
            </NavIcon>
            <NavText>Oma sivu</NavText>
          </NavItem>
          <NavItem eventKey="mainostemplaatit">
            <NavIcon
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CgTemplate style={{ fontSize: "1.45em", alignSelf: "center" }} />
            </NavIcon>
            <NavText>Mainos templaatit</NavText>
          </NavItem>
          <NavItem eventKey="mainosajat">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <AiOutlineClockCircle
                style={{ fontSize: "1.45em", alignSelf: "center" }}
              />
            </NavIcon>
            <NavText>Mainos ajat</NavText>
          </NavItem>
          <NavItem eventKey="mainospaikat">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <BsPinMap style={{ fontSize: "1.45em", alignSelf: "center" }} />
            </NavIcon>
            <NavText>Mainos Paikat</NavText>
          </NavItem>
          <NavItem eventKey="omattiedot">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <CgProfile style={{ fontSize: "1.45em", alignSelf: "center" }} />
            </NavIcon>
            <NavText>Omat tiedot</NavText>
          </NavItem>
          <NavItem eventKey="naytot">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <FiMonitor style={{ fontSize: "1.45em", alignSelf: "center" }} />
            </NavIcon>
            <NavText>Naytot</NavText>
          </NavItem>
          <NavItem eventKey="nayttojenhallinta">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <MdOutlineScreenSearchDesktop
                style={{ fontSize: "1.45em", alignSelf: "center" }}
              />
            </NavIcon>
            <NavText>Nayttojen hallinta</NavText>
          </NavItem>
          <NavItem eventKey="asetukset">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <FiSettings style={{ fontSize: "1.45em", alignSelf: "center" }} />
            </NavIcon>
            <NavText>Asetukset</NavText>
          </NavItem>
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem> */}
          <NavItem eventKey="logout">
            <NavIcon style={{ display: "flex", justifyContent: "center" }}>
              <RiLogoutBoxLine
                style={{ fontSize: "1.45em", alignSelf: "center" }}
              />
            </NavIcon>
            <NavText>Kirjaudu ulos</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
};

export default UserNav;
