import React from "react";
import { Box } from "@mui/material";
import {
  Browser,
  ChartLine,
  type Icon,
  File,
  Tag,
  UserList,
  GearSix,
} from "@phosphor-icons/react";
import { PhzButton } from "@phraze-app/ui";
import PostsIconWrapper from "./PostsIconWrapper";
import NavigationLinkComponent from "./NavigationLinkComponent";
import { routesName } from "../../route";
import useMatchedRoute from "../../hooks/useMatchedRoute";

const NavigationComponent = () => {
  const getMatchedRoute = useMatchedRoute({ blogName: "acme" });
  const NAVIGATIONS_ITEMS: {
    name: string;
    icon: Icon;
    toLink: string;
  }[] = [
    {
      name: "Analytics",
      icon: ChartLine,
      toLink: routesName.analytics,
    },
    {
      name: "Pages",
      icon: File,
      toLink: routesName.pages,
    },
    {
      name: "Tags",
      icon: Tag,
      toLink: routesName.tags,
    },
    {
      name: "Leads",
      icon: UserList,
      toLink: routesName.leads,
    },
    {
      name: "Settings",
      icon: GearSix,
      toLink: routesName.settings,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      paddingTop="1rem"
      alignItems="center"
      minHeight="75%"
      width="100%"
    >
      <PhzButton variant="primary" width="100%" style={{ fontWeight: "500" }}>
        <Browser size="24px" weight="light" style={{ marginRight: "0.5rem" }} />
        Visit Site
      </PhzButton>
      <Box
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        margin="0 auto"
        marginTop="12px"
        justifyContent="center"
        alignItems="flex-start"
        width="100%"
      >
        {NAVIGATIONS_ITEMS.map((item, i) => (
          <React.Fragment key={item.name + item.toLink}>
            {i === 1 && <PostsIconWrapper />}
            <NavigationLinkComponent
              key={item.name + item.toLink}
              name={item.name}
              StartIcon={item.icon}
              toLink={getMatchedRoute(item.toLink)}
            />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default NavigationComponent;
