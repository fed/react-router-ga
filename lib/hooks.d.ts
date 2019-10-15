import { GATrackingId } from "./types";
export declare function usePrevious(value: any): undefined;
export declare function useGA(id?: GATrackingId): void;
export declare function usePageViews(trackPathnameOnly: boolean, basename: string, debug?: boolean): void;
