// import React from 'react';
// import './Topics.css';
// import ReactDOM from 'react-dom';
// import { TopicsList } from '../TopicsList/TopicsList';

// class Topics extends React.Component {
//     handleClick() {
//       let speech = '';
//       for (let i = 0; i < 10; i++) {
//         speech += 'blah ';
//       }
//       alert(speech);
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     {/* should become {topics.mainTitles} */}
//                     <h2>Shortcuts Related to File Navigation</h2>
//                     {/* should become {topics.mainTitlesInfo} */}
//                     {/* <p> Click Me! </p> */}
//                 </div>
//                 {/* <TopicsList onClick={this.}/> */}
//                 <TopicsList onClick={this.handleClick}/>
//             </div>
//         )
//     }
// };

// export default Topics;