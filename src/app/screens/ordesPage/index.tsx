import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessdOrders from "./ProcessdOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order-page"}>
      <Container className={"order-container"}>
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessdOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />
                <div className={"location-user-img"}>
                  <img
                    src={"/icons/location.svg"}
                    className={"location-user"}
                  />
                </div>
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
              <div className={"user-name"}>
                <p>Justin</p>
              </div>
              <div className={"user"}>
                <p>USER</p>
              </div>

              <div className={"line"}>
                <p></p>
              </div>
              <div className={"address"}>
                <p>South Korea, Busan</p>
              </div>
            </Box>

            <Box className={"card-box"}>
              <div className={"card-number"}>
                <input
                  className={"number1"}
                  placeholder="  Card number: 5243 4090 2002 7495"
                />
              </div>
              <div className={"card-data"}>
                <input className={"number2"} placeholder="  07/24" />
              </div>
              <div className={"card-cvv"}>
                <input className={"number3"} placeholder="CVV: 010" />
              </div>
              <div className={"card-name-user"}>
                <input className={"number4"} placeholder="  Justin Robertson" />
              </div>

              <Box className={"cards"}>
                <div className={"cards-name"}>
                  <img
                    src={"/icons/western-card.svg"}
                    className={"card-size"}
                  />
                </div>
                <div className={"cards-name"}>
                  <img src={"/icons/master-card.svg"} className={"card-size"} />
                </div>
                <div className={"cards-name"}>
                  <img src={"/icons/paypal-card.svg"} className={"card-size"} />
                </div>
                <div className={"cards-name"}>
                  <img src={"/icons/visa-card.svg"} className={"card-size"} />
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
