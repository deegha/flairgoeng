import { ProcessItem } from 'components'
import styled from 'styled-components'
import { devices } from 'themes/devices'

const ProcessContainer = styled.div`
  background: url('process1.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 31.25rem;

  @media ${devices.tablet} {
    background: url('tabletProccess1.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 24.25rem;
  }
`

const ItemsContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap: 13.438rem;
  }
`

export const Process1: React.FC = () => {
  return (
    <ProcessContainer>
      <ItemsContainer>
        <ProcessItem
          Heading="Step 1"
          Subheading="Requirement gathering and Identifying the problem"
          Content="We are problem solvers who can integrate any type of industry, we quickly analyze and understand your company’s internal mechanisms, issues and business expectations"
        />
        <ProcessItem
          Heading="Step 2"
          Subheading="Provide an Estimate"
          Content="Breakdown the workload in to small manageble chunks and do the feasibility study and provide an estimation."
        />
        <ProcessItem
          Heading="Step 3"
          Subheading="Build an MVP a deliver iteratively"
          Content="Build the product with just enough features to be usable by customer who can then collect feedback for us which support for future sprints."
        />
        <ProcessItem
          Heading="Step 4"
          Subheading="Launch the product"
          Content="Provide quality assurance in each iteration to deliver a robust product after mobining all the screens by navigation, At the end we will deploy the product and migrate to customers server space."
        />
      </ItemsContainer>
    </ProcessContainer>
  )
}
