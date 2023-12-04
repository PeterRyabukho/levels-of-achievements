import React, { useEffect, useRef, useState } from 'react';
import './animated-flip-digit-component.css';

interface Props {
    // oldNumber: number;
    newNumber: number;
}

export const AnimatedFlipDigit = ({ newNumber}: Props) => {
  const digitRefs = useRef<HTMLDivElement[]>([]);
  const [prevNumber, setPrevNumber] = useState(0);

  useEffect(() => {
    // Split the previous and new numbers into an array of individual digits
    const prevDigits = prevNumber.toString().split('').map((digit) => parseInt(digit, 10));
    const newDigits = newNumber.toString().split('').map((digit) => parseInt(digit, 10));

    // Iterate over the digits to execute the flipping animation when a digit changes
    newDigits.forEach((digit, index) => {
      // Only trigger animation for digits that have changed
      if (prevDigits[index] !== digit) {
        const delay = index * 0.2; // Adjust the delay based on the desired animation speed
        setTimeout(() => {
          if (digitRefs.current[index]) {
            digitRefs.current[index].classList.add('flip');
            setTimeout(() => {
              digitRefs.current[index].classList.remove('flip');
            }, 500); // The duration should match the keyframes animation time
          }
        }, delay * 2000);
      }
    });

    setPrevNumber(newNumber);
  }, [newNumber]);

  return (
    <div className="animated-flip-digit-container">
      {newNumber.toString().split('').map((digit, index) => (
        <div key={index} className="animated-flip-digit" ref={(el) => (el ? digitRefs.current[index] = el : el)}>
          {digit}
        </div>
      ))}
    </div>
  );
};
