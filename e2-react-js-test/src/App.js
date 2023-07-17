import HelloWorld from './components/HelloWorld';
import Todo from './components/Todo';

const App = () => {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ];

  return (
    <>
      <HelloWorld />
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};

export default App;
