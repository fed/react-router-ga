import React from "react";
import { History } from "history";

export interface Props {
  id: string; // Google Analytics Tracking ID
  basename?: string;
  debug?: boolean;
  trackPathnameOnly?: boolean;
  children?: React.ReactNode;
}

export default class ReactRouterGA extends React.Component<Props> {
  render(): JSX.Element;
}
