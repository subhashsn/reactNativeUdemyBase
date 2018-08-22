import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Left, Icon, Body, Right, Footer, FooterTab } from 'native-base';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text>Button Title</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Button full>
            <Text>Click Me!</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
          <Button>
            <Text>
              Footer Area
            </Text>
          </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}