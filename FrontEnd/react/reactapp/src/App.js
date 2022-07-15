import './App.css';
import SubComponent from './components/SubComponent';

function App() {
    return (
        <div className="app-container">
             <h3>First Component</h3>
            <p>This is a tag.</p>
            <SubComponent />
        </div>
        
    );
}

export default App;