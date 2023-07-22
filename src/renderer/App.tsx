import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';

import './App.scss';
import './components/SignupSMS/Signupsms.scss';
import './components/SignupName/SignupName.scss';
import './screens/Chat/ChatScreen.scss';

import SignUp from './components/Signup/SignUp';
import SignupSMS from './components/SignupSMS/SignUpSMS';
import SignupName from './components/SignupName/SignUpName';
import ChatScreen from './screens/Chat/ChatScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signupsms" element={<SignupSMS />} />
        <Route path="/signupname" element={<SignupName />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}
