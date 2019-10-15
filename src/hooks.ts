import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { GATrackingId } from "./types";

export function usePrevious(value: any) {
  const ref = useRef();

  // didMount & didUpdate.
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function useGA(id?: GATrackingId) {
  const init = useCallback(() => {
    if (!id) {
      console.error("[react-router-ga] Tracking ID is required.");
      return;
    }

    const currdate: any = new Date();

    // Load Google Analytics
    (function(i: any, s, o, g, r, a: any, m: any) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * currdate);
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga",
      {},
      {}
    );

    // Initialize Google Analytics
    window.ga("create", id, "auto");
  }, []);

  // didMount only, unless ga id changes which shouldn't happen.
  useEffect(init, [id]);
}

export function usePageViews(
  trackPathnameOnly: boolean,
  basename: string,
  debug: boolean = false
) {
  const location = useLocation();
  const { pathname } = location;
  const previousPathname = usePrevious(pathname);
  const sendPageView = useCallback(() => {
    if (trackPathnameOnly && previousPathname === pathname) return;

    // Sets the page value on the tracker. If a basename is provided, then it is prepended to the pathname.
    const page = basename ? `${basename}${pathname}` : pathname;

    window.ga("set", "page", page);

    // Sending the pageview no longer requires passing the page
    // value since it's now stored on the tracker object.
    window.ga("send", "pageview");

    if (debug) {
      console.info(`[react-router-ga] Page view: ${page}`);
    }
  }, [basename, pathname, debug]);

  // didMount & didUpdate (when react-router-dom's location object changes).
  useEffect(sendPageView, [location]);
}
