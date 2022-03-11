import React from 'react';
import { FC } from 'react';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const SubmitSkip: FC<{handlePostComment: any}> = ({handlePostComment}) => {
  const classes = useStyles();

  return <>
    <div className={classes.submitSkip}>
      <ButtonGroup>
        <Grid container spacing={4}>

          <Grid item xs={5}>
            {/* <Button component = {Link} className={classes.skipButton} to='/comment'>Skip</Button> */}
            <Button className = {classes.skipButton} onClick = {() => handlePostComment(false)}>Skip</Button>
          </Grid>

          <Grid item xs={2}></Grid>

          <Grid item xs={5} >
            {/* <Button component = {Link} variant="contained" className={classes.submitButton} to='/comment'>Submit</Button> */}
            <Button className = {classes.submitButton} onClick = {() => handlePostComment(true)}>Submit</Button>
          </Grid>

        </Grid>

      </ButtonGroup>
    </div>
  </>
};

export default SubmitSkip;
