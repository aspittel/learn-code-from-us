import React from "react";
import { Route, Link as RouterLink, withRouter } from "react-router-dom";

/* https://github.com/ReactTraining/history/issues/470 */
/* Proposed Solution: https://gist.github.com/chpio/a5d4f7d73d6643780db20db163561a67 */

function Link({
  to,
  location,
  children,
  staticContext,
  match,
  history,
  ...rest
}) {
  /* eslint-disable react/jsx-no-bind */
  return (
    <Route
      render={() => (
        <RouterLink replace={to === location.pathname} to={to} {...rest}>
          {children}
        </RouterLink>
      )}
    />
  );
}

export default withRouter(Link);
