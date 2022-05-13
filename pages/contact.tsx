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

interface IInputErrors {
  firstName: boolean
  lastName: boolean
  email: boolean
  message: boolean
}

const Contact: NextPage = () => {
  const [inputs, setInputs] = useState<IInputs>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<IInputErrors>({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  })

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const name = e.target.name as 'firstName' | 'lastName' | 'email' | 'message'
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }

    setInputs({
      ...inputs,
      [name]: e.target.value,
    })
  }

  const handleForm = () => {
    Object.keys(inputs).map((index) => {
      const i = index as 'firstName' | 'lastName' | 'email' | 'message'
      if (inputs[i] === '') {
        setErrors({
          ...errors,
          [i]: true,
        })
      }
    })

    if (
      !errors.firstName ||
      !errors.lastName ||
      !errors.email ||
      !errors.message
    ) {
      return
    }

    console.log('submitted')
  }

  return (
    <Layout
      title="Flairgo | contact us"
      metaContent="description"
      metaDiscription="Flairgo is a Sri Lankan tech statup which mainly focuses on web and mobile application development"
    >
      <Container>
        <Heading>Contact us</Heading>
        <FormRow>
          <TextInput
            placeholder="First name"
            value={inputs.firstName}
            state={errors.firstName ? 'error' : 'default'}
            name="firstName"
            onChange={handleOnChange}
          />
          <TextInput
            placeholder="Last name"
            value={inputs.lastName}
            state={errors.lastName ? 'error' : 'default'}
            name="lastName"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <TextInput
            placeholder="Email"
            value={inputs.email}
            state={errors.email ? 'error' : 'default'}
            name="email"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <TextArea
            placeholder="Say hello"
            value={inputs.message}
            state={errors.message ? 'error' : 'default'}
            name="message"
            onChange={handleOnChange}
          />
        </FormRow>
        <FormRow>
          <SceduleBtn>
            <Button onClick={handleForm}>Schedule a session</Button>
          </SceduleBtn>
        </FormRow>
      </Container>
    </Layout>
  )
}

export default Contact
