import React from 'react'

const Welcome = React.createClass({
  render: function (){
    return(
      <div>

        <img className="chalkboard" src={require('../../public/images/chalkboard.png')} />

        <div className="info">
        <h2>Welcome!</h2>

        <p> Early Start helps families in New York City find great schools starting from Pre-K to Middle School.</p>

        <p>Are you a student or a parent?</p>

        <button type="submit">Student</button>
        <button type="submit">Parent</button>
        </div>
      </div>
    )
  }
})

// import ModalWrapper from './ModalWrapper.jsx';

// const WelcomeModal = props => {
//   const welcomeModal = provider => {
//     props.hideModal();
//     props.welcomeModal(provider);
//   };

//   return(
//     <ModalWrapper
//     {...props}
//     title="Welcome!"
//     width={400}
//     showOk={false}
//     >

//     <p>Early Start helps families in New York City find great schools starting from Pre-K to Middle School.</p>
//     <p>Are you a student or a parent?</p>

//     <button onClick={() => welcomeModal('student')}>Student</button>
//     <button onClick={() => welcomeModal('parent')}>Parent</button>
//     </ModalWrapper>

//   );
// };

export default Welcome;