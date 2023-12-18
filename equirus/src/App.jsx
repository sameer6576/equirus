import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {

  const data = [
    {
      Name: "Sameer Ahmed",
      Phone: "987654321",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      URL: "https://example.com",
      Email: "sameer@gmail.com",
    },
    {
      Name: "Raghav Jain",
      Phone: "987654321",
      img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      URL: "https://example.com",
      Email: "sameer@gmail.com",
    },
    {
      Name: "Payal Agarwal",
      Phone: "987654321",
      img: "  https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      URL: "https://example.com",
      Email: "sameer@gmail.com",
    },
    {
      Name: "Sameer Ahmed",
      Phone: "987654321",
      img: " https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      Email: "sameer@gmail.com",
    },
    {
      Name: "Sameer Ahmed",
      Phone: "987654321",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      URL: "https://example.com",
      Email: "sameer@gmail.com",
    },
    {
      Name: "Sameer Ahmed",
      Phone: "987654321",
      img: "  https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
      URL: "https://example.com",
      Email: "sameer@gmail.com",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard data={data}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
