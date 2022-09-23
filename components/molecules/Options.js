import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Options.module.css';

const Options = ({ getOptions, actionProvider }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(getOptions(actionProvider));
  }, []);

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <Chip className={styles.respuesta}
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
