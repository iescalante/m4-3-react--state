import React from 'react';
import styled from 'styled-components';

const Typeahead= ({suggestions, handleSelect}) => {
  const [value, setValue] = React.useState('');
  const matchedSuggestions = suggestions.filter(suggestion =>suggestion.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
      <Container>
      <Wrapper>
      <BookInput
        type='text'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
                handleSelect(ev.target.value);
            }
        }}
      />
      <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
      <SuggestionList>
          {value.length >= 2 && matchedSuggestions.map((suggestion) => {
              return (
                <Suggestion 
                  key={suggestion.id}
                  onClick={() => handleSelect(suggestion.title)}
                >
                  {suggestion.title}
                </Suggestion>
              );
          })}
      </SuggestionList>
      </Wrapper>
      </Container>
  )
}

const Container = styled.div`
  position: relative;
`
const Wrapper = styled.div`
  margin-top: 100px;
  position: absolute;
  left: 200px;
`
const BookInput = styled.input`
  padding: 10px 100px 10px 10px;
  text-align: left;
`
const ClearButton = styled.button`
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin-left: 10px;
`;
const SuggestionList = styled.ul`
  display:block;
  text-decoration: none;
  & :last-child {
      padding-top: 3px;
      padding-bottom: 0px;
      border-bottom: none;
  }
`
const Suggestion = styled.li`
  text-decoration: none;
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: 1px solid grey;

  &:hover{
      background-color: #f7e890;
  }
`
export default Typeahead;