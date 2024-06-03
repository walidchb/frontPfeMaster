import React from 'react';
import Circle from 'react-circle';

const ProgressCircle = ({ completed, total }) => {
    const percentage = ((completed / total) * 100).toFixed(2);
  return (
    <div>
      <Circle
        progress={percentage}
        progressColor="blue"
        showPercentValue={true}
        showPercentValueDecimalPlaces={2}
        size={200}
      />
    </div>
  );
};

export default ProgressCircle;