import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import SideBar from "../components/SideBar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { useChatStore } from "../store/useChatStore";

const Home = () => {
  const { selectedUser } = useChatStore();

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* both */}
      <div className="pt-16  h-screen bg-base-200 overflow-hidden">
        <div className="flex flex-col items-center justify-center  px-4 ">
          <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-7xl h-[calc(100vh-8rem)] mt-8">
            <div className="flex h-full rounded-lg overflow-hidden">
              <SideBar />
              {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
