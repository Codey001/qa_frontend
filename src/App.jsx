import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import { setLoading } from "./store/dataSlice";
import { useEffect, useState } from "react";
import { pingServer } from "./utils/handleAPI";

function App() {
  const [loading, setLoading] = useState(true);
  const [resp, setResp] = useState("");

  async function checkPing() {
    toast.info("Loading Server");

    const res = await pingServer();
    setResp(res);
    if (res.status === 200) {
      setLoading(false);
    } else {
      toast.error("Internal Server Error");
      return;
    }
  }

  useEffect(() => {
    checkPing();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4">
      {loading ? (
        <Spinner input_data="Connecting Server ..." />
      ) : (
        <>
          <Header />
          <div className="flex-grow">
            <Body />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
