import React from 'react';

// Externals
import PropTypes from 'prop-types';
import cn from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Shared components
import Paper from '../Paper';

// Component styles
const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Portlet = ({ classes, className, children, ...rest }) => {
  const rootClassName = cn(classes.root, className);

  return (
    <Paper
      {...rest}
      className={rootClassName}
      elevation={0}
      outlined
      squared={false}
    >
      {children}
    </Paper>
  );
};

Portlet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portlet);