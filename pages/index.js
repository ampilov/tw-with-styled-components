import styled from 'styled-components';
import tw from 'twin.macro';

export default function Home() {
  return (
    <Wrapper>
      <h1>How working tailwind CSS with styled-components</h1>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
      <ButtonTW>Send</ButtonTW>
    </Wrapper>
  )
}

const Wrapper = tw.div`

`

const ButtonTW = tw.button`
bg-black
font-bold
text-red-500
`