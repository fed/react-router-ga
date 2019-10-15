export type GATrackingId = string;
export interface ReactRouterGAProps {
  id?: GATrackingId; // Google Analytics Tracking ID
  basename: string;
  trackPathnameOnly: boolean;
  children?: React.ReactNode;
  debug?: boolean;
}
