import React,{Component} from 'react';
import {Container, Form, Content, Left, Right, Input, Item, Label,Header, Button,Text} from 'native-base'

export default class formExample extends Component{
    render(){
        return (
            <Container>
                <Header>
                    <Text>
                        Login Page
                    </Text>
                </Header>

                <Content>
                <Form>
                    <Item fixedLabel>
                        <Label>Uername</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button block>
                        <Text>Submit</Text>
                    </Button>
                </Form>
                </Content>
            </Container>
        )
    }
}