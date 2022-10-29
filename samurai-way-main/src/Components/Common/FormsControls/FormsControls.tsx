import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({ input, meta, ...props }: any) => {
  return (
    <div className={s.formControl + ' ' + s.error}>
      <div>
        <textarea {...input} {...props} />
      </div>
      <span>some error</span>
    </div>
  );
};
