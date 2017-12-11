import React, { Component } from 'react';


class App extends Component {

  render() {

    const loadSomething = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('resolved');
          resolve('Bob');
        }, 1000);
      });
    }


    const test = async () => {
      console.log('awaiting');
      const data = await loadSomething();
      console.log(data);
    }

    console.log('calling test');
    test();

    return (
      <div className="app">
        <h3>Hello from react</h3>
        <p>lll</p>
      </div>
    )
  }
}


export default App;
