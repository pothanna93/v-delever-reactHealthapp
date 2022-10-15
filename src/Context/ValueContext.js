import React from "react";

const ValueContext = React.createContext({
  listItems: [],
  onClickSlotBook: () => {},
});
export default ValueContext;
