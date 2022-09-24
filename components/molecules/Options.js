import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Options.module.css';
import {makeStyles} from '@material-ui/core/styles';

const Options = ({ getOptions, actionProvider }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(getOptions(actionProvider));
  }, []);

  const useStyle = makeStyles({
    personalizado: {
      padding: '0.5rem',
      borderRadius: '25px',
      background: 'transparent',
      margin: '3px',
      fontSize: '0.95rem',
      fontWeight: 'medium',      
      position: 'relative',
      width: 'auto',
      maxWidth: '80%',
      marginLeft: '2px',
      textAlign: 'left',
    }
  })

  const classes = useStyle()

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <Chip className={classes.personalizado}
            key={option.id}
            onClick={option.handler}
            label={option.text}
            sx={{
              marginRight: '2px',
              // padding: '2px',
              padding: '10px 15px',
              fontSize: '0.85rem',
              marginBottom: '5px',
              position: 'relative',
              width: 'auto',
              // font-weight: 'medium',
            }}
          />
        );
      })}
    </div>
  );
};

export default Options;
