import { ReactRouterGAProps } from "./types";
import { useGA, usePageViews } from "./hooks";

function ReactRouterGA(props: ReactRouterGAProps) {
  useGA();
  usePageViews(props.trackPathnameOnly, props.basename, props.debug);

  return props.children;
}

export default ReactRouterGA;
