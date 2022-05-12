import type { NextPage } from 'next'
import { Layout, TextInput, BoldTitle, TextArea, Button } from 'components'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.form`
  padding: 2rem;
  width: 65%;
`

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Heading = styled(BoldTitle)`
  margin: 6rem 1rem;
`

const SceduleBtn = styled.div`
  margin: 1rem;
`

interface IInputs {
  firstName: string
  lastName: string
  email: string
  message: string
}

const Contact: NextPage = () => {
  const [inputs, setInputs] = useState<IInputs>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleForm = () => {
    console.log('submitted')
  }

  return (
    <Layout title="Flairgo | contact us" metaContent="" metaDiscription="">
      <Container>
        <Heading>Contact us</Heading>
        <FormRow>
          <TextInput
            placeholder="First name"
            value={inputs.firstName}
            state="default"
            name="firstName"
            onChange={handleOnChange}
          />
          <TextInput
            placeholder="Last name"
            value={inputs.lastName}
            state="default"
            name="lastName"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <TextInput
            placeholder="Email"
            value={inputs.email}
            state="default"
            name="email"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <TextArea
            placeholder="Say hello"
            value={inputs.message}
            state="default"
            name="message"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <SceduleBtn>
            <Button onClick={handleForm}>Scedule a session</Button>
          </SceduleBtn>
        </FormRow>
      </Container>
    </Layout>
  )
}

export default Contact
