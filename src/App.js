import Form from './components/form/form';
import Sorting from './components/sorting/sorting';
import Table from './components/table/table';
import Textarea from './components/textarea/textarea';

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <Form />
        <Sorting />
      </header>
      <Table />
      <Textarea />
    </div>
  );
}

export default App;
