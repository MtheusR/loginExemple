import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function AtendimentosScreen() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Abertos",
      value: "html",
    },
    {
      label: "Pendentes",
      value: "react",
    },
    {
      label: "Grupos",
      value: "vue",
    },
    {
      label: "Fechados",
      value: "angular",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-semibold">Atendimentos</h1>
        <IoMdAddCircle className="text-3xl text-principais-green01" />
      </div>

      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none bg-transparent p-0"
          indicatorProps={{
            className:
              "text-sm font-semibold bg-transparent border-b-2 border-principais-green01 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
}

export default AtendimentosScreen;
