import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data";
function App() {
  const Data = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="max-w-4xl mx-2 sm:mx-auto mt-8 bg-white shadow-xl mb-8 rounded-xl ">
      <Nav />
      <div className="p-8 flex flex-col gap-8">{Data}</div>
    </div>
  );
}

export default App;
