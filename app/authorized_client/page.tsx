
import React from 'react';
import { Home, Camera, MessageCircle, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
const Authorized_Home = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  // Mock social post data
  const posts = [
    {
      id: 1,
      user: 'David Wang',
      content: 'Just tracked my lunch! Down 5 pounds this week! 💪',
      likes: 24,
      comments: 3
    },
    {
      id: 2,
      user: 'Larry Long',
      content: 'Check out my healthy meal prep for the week! #SnapNutrient',
      likes: 18,
      comments: 5
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4 pb-16">
            {posts.map(post => (
              <Card key={post.id} className="p-4">
                <div className="font-medium mb-2">{post.user}</div>
                <p className="mb-3">{post.content}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-4">{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </Card>
            ))}
          </div>
        );
      case 'camera':
        return (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] pb-16">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              id="image-upload" 
            />
            <label 
              htmlFor="image-upload" 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Take or Upload Photo
            </label>
          </div>
        );
      case 'chat':
        return (
          <div className="flex flex-col h-[calc(100vh-4rem)] pb-16">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <Card className="p-3 bg-gray-100">
                  <p className="text-sm">How can I help you with your nutrition today?</p>
                </Card>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask about nutrition..." 
                  className="flex-1 p-2 border rounded-lg"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="p-4 pb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
              <h2 className="font-medium text-xl mb-1">User Name</h2>
              <p className="text-gray-600 mb-4">Progress Stats</p>
            </div>
            <div className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium mb-2">My Progress</h3>
                <div className="space-y-2">
                  <div>Total Meals Tracked: 45</div>
                  <div>Average Daily Calories: 2100</div>
                  <div>Weekly Goal Progress: 80%</div>
                </div>
              </Card>
            </div>
            <Button 
                  variant="outline" 
                  onClick={() => signOut()}
                >
                  Sign Out
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-lg mx-auto bg-white min-h-screen">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-around py-3">
            <button 
              onClick={() => setActiveTab('home')}
              className={`p-2 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <Home size={24} />
            </button>
            <button 
              onClick={() => setActiveTab('camera')}
              className={`p-2 ${activeTab === 'camera' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <Camera size={24} />
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`p-2 ${activeTab === 'chat' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <MessageCircle size={24} />
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className={`p-2 ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}
            >
              <User size={24} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Authorized_Home;
