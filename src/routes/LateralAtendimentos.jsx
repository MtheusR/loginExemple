import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ChatButton from "./ChatButton";

function IndicatorCount() {
  return (
    <div className="inline-block px-1 rounded-md bg-principais-orange text-white font-semibold">
      10
    </div>
  );
}

function LateralAtendimentos() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Abertos",
      value: "abertos",
      desc: "Aqui vai os chats abertos",
    },
    {
      label: "Pendentes",
      value: "pendentes",
      desc: "Aqui vai os chats pendentes",
    },
    {
      label: "Grupos",
      value: "grupos",
      desc: "Aqui vai os chats de grupos",
    },
    {
      label: "Fechados",
      value: "fechados",
      desc: "Aqui vai os chats fechados",
    },
  ];
  return (
    <>
      <div className="inline-block h-screen">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold">Atendimentos</h1>
          <button>
            <IoMdAddCircle className="text-3xl hover:text-principais-green03 text-principais-green01" />
          </button>
        </div>

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-principais-green01 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`flex font-medium py-2 px-4 transition-all duration-300 ${activeTab === value ? "" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <div className="flex gap-2">
                  {label}
                  {value != "fechados" ? <IndicatorCount /> : ""}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel className="py-2 px-2" key={value} value={value}>
                {/* {desc} */}
                <ChatButton />
                <ChatButton />
                <ChatButton />
                <ChatButton />
                <ChatButton />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}

export default LateralAtendimentos;
