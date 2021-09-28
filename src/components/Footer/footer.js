import React from 'react'
import {
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment,
} from 'semantic-ui-react'



const Footer = () => (
    <Segment inverted vertical style={{ padding: "4em 2em" }} className="footer">
    <Container>
      <Grid inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="tripper" />
            <List link inverted>
              <List.Item href="https://github.com/wa20/tripper" as="a"><Icon  name='github'/> GitHub</List.Item>
              <List.Item disabled href=""  as="a"><Icon name='mail'/> Email</List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={8}>
            <Header as="h4" inverted>
              About
            </Header>
            <p>
              Blurp, something something something, tripper is amazing.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
