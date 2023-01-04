import BMI from './pages/calculators/BMI';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App default-bg w-full min-h-fit h-full overflow-auto">
            <Layout>
                <Sidebar />
                <BMI />
            </Layout>
        </div>
    );
}

export default App;
