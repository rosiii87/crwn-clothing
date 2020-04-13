import styled from 'styled-components';
// import { maxMedia, minMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';
import { maxMedia } from '../../components/styles/mixins';

export const FormMain = styled.form`
  max-width: 59rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${maxMedia.sm`
`}
`;

export const FormTextFullLabel = styled.label`
  max-width: 59rem;
  width: 100%;
  position: relative;
`;

export const FormTextFullInput = styled.input`
  width: 100%;
  height: 5rem;
  padding-left: 2rem;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  text-align: left;
  color: ${colors.almostBlack};
  border: 1px solid ${colors.greyLight};

  &:focus {
    border: 1px solid ${colors.almostBlack};
    outline: none;
  }

  :focus + span,
  &:not(:placeholder-shown) + span {
    transform: translateY(-170%);
    color: ${colors.primary};
  }
`;

export const FormTextFullText = styled.span`
  position: absolute;
  pointer-events: none;
  top: 1.5rem;
  left: 2rem;
  color: ${colors.greyLight};
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const FormRadioContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
`;

export const FormRadioLabel = styled.label`
  height: 2rem;
  position: relative;
  width: 50%;
  text-align: left;
  padding: 1rem 1rem 1rem 5rem;
  cursor: pointer;
  font-size: 1.6rem;
  color: ${colors.almostBlack};
  border: 1px solid ${colors.greyLight};
  height: 100%;
  margin-right: 0.5rem;

  :hover {
    border: 1px solid ${colors.almostBlack};
  }

  > input:checked ~ span::after {
    top: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: ${colors.primary};
    display: unset;
  }
`;
export const FormRadioHalf = styled.input`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const FormCustomRadio = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border: 1px solid ${colors.greyLight};
  border-radius: 50%;

  &::after {
    content: '';
    position: absolute;
  }
`;

export const FormCheckLabel = styled.label`
  height: 2rem;
  position: relative;
  width: 50%;
  text-align: left;
  padding: 1rem 1rem 1rem 5rem;
  cursor: pointer;
  color: ${colors.almostBlack};
  border: none;
  height: 100%;
  margin-right: 0.5rem;
  font-size: 1.6rem;

  :hover {
    color: ${colors.primary};
  }

  > input:checked ~ span::after {
    top: 0;
    left: 0;
    height: 2.5rem;
    width: 2.5rem;
    background-color: ${colors.primary};
    display: unset;
  }
`;
export const FormCheckHalf = styled.input`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

export const FormCustomCheck = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border: 1px solid ${colors.greyLight};

  &::after {
    content: '';
    position: absolute;
  }
`;
