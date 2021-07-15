import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';
import Card from './UI/Card';
function App() {
  return (
    <div>
      <Card>
        <UserForm />
      </Card>
      <Card>
        <div>
          <User />
        </div>
      </Card>
    </div>
  );
}

export default App;
