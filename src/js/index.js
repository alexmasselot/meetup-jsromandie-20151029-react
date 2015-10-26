import React from 'react';

import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import MessageGenerator from './MessageGenerator';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import ACoupleMessages from './components/ACoupleMessages';
import MessageListStatic from './components/MessageList';
import MessageListAsync from './components/MessageListAsync';
import Chatter from './components/Chatter';

//ReactDOM.render(<AppContainer />, document.getElementById('main'));
const routes = {
  '/': <Layout>
    <div>Choose an example from above</div>
  </Layout>,
  '/hello': <Layout title="Hello world"><Hello name="Paf"/></Layout>,
  '/hello2': <Layout title="Hello world"><Hello2 name="Paf" onClickCallback={function(){window.alert('tchô')}}/></Layout>,
  '/couple-message': <Layout title="A couple of messages">
    <div><ACoupleMessages/></div>
  </Layout>,
  '/message-list-static': <Layout title="Static list"><MessageListStatic
    messages={new MessageGenerator().next(10)}/></Layout>,
  '/message-list-async': <Layout title="Asychronous list"><MessageListAsync/></Layout>,
  '/chatter': <Layout title="Interactive chatter"><Chatter/></Layout>
};

const container = document.getElementById('main');

function render() {
  try {
    const path = window.location.hash.substr(1) || '/';
    const component = routes[path];
    ReactDOM.render(component, container);
  } catch (err) {
    console.error('ERROR rendering', err);
  }
}

window.addEventListener('hashchange', () => render());
render();
