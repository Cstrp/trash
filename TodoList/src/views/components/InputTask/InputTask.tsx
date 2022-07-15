import React, { useState, useCallback } from 'react';
import styles from './index.module.scss';

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

const InputTask: React.FC<InputTaskProps> = ({ id, title, onDone, onEdited, onRemoved }) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);

  return (
    <div className={styles.inputTask}>
      <label className={styles.inputTaskLabel}>
        <input
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if (evt.target.checked) {
              onDone(id);
            }
          }}
          type='checkbox'
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTaskCheckbox}
        />
        {isEditMode ? (
          <input
            value={value}
            onChange={(evt) => {
              setValue(evt.target.value);
            }}
            className={styles.inputTaskTitleEdit}
          />
        ) : (
          <h3 className={styles.inputTaskTitle}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label='Save'
          className={styles.inputTaskSave}
          onClick={() => {
            onEdited(id, value);
            setIsEditMode(false);
          }}
        />
      ) : (
        <button
          aria-label='Edit'
          className={styles.inputTaskEdit}
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      )}

      <button
        aria-label='Remove'
        className={styles.inputTaskRemove}
        onClick={() => {
          if (confirm('Ok?Ok!')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};

export default InputTask;
