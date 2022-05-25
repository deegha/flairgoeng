import { ProcessItem } from 'components'
import styled from 'styled-components'

const ProcessContainer = styled.div`
  background: url('process1.svg');
  background-size: inherit;
  background-repeat: no-repeat;
  background-position-y: 31.25rem;
`

const ItemsContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap: 13.438rem;
  }
`

export const Process3: React.FC = () => {
  return (
    <ProcessContainer>
      <ItemsContainer>
        <ProcessItem
          Heading="Step 1"
          Subheading="Requirement gathering and Identifying the problem"
          Content="Identify the potential hurdles or structural problems and drawbacks"
        />
        <ProcessItem
          Heading="Step 2"
          Subheading="Initiate consultation procedure"
          Content="Provide guidence for the dev team based on the project what needs to be done."
        />
        <ProcessItem
          Heading="Step 3"
          Subheading="End of the service agreement"
          Content="We bill hourly from the customer for the service which we rendered"
        />
      </ItemsContainer>
    </ProcessContainer>
  )
}
