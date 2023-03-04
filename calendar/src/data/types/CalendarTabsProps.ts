import React, { SyntheticEvent } from "react";
import { TabTypes } from "../enums";

export interface Props {
  selectedTab: TabTypes;
  handleTabChange: (
    _: SyntheticEvent,
    newValue: React.SetStateAction<TabTypes>
  ) => void;
}
