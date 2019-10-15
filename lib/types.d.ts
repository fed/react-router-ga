/// <reference types="react" />
export declare type GATrackingId = string;
export interface ReactRouterGAProps {
    id?: GATrackingId;
    basename: string;
    trackPathnameOnly: boolean;
    children?: React.ReactNode;
    debug?: boolean;
}
