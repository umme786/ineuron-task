import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiArrowDown, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
`;
const Container = styled.div`
`;
const Wrap = styled.div`
`;
const Dropdown = styled.div`
`;
const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#440244', size: '25px' }}>
      <AccordionSection className='flex items-center justify-center my-10 py-10 bg-[#ebecf8]'>
        <Container className='w-[80%] mx-auto'>
          <h2 className='text-center text-4xl font-bold my-10 text-[#061357] font-inter'> Frequently Asked Questions </h2>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index} className="border-2 border-purple-300 rounded-md bg-white text-[#061357] flex justify-between items-center w-full text-center cursor-pointer my-3 drop-shadow-lg">
                  <h1 className='p-5 text-xl'>{item.question}</h1>
                  <span className='mr-4'>{clicked === index ? <FiMinus /> : <FiArrowDown />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown className='bg-white text-gray-500 rounded-md flex items-center justify-center'>
                    <p className='p-5 text-lg'>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
