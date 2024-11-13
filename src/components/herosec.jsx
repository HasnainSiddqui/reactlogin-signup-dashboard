import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";

export let Hero = () =>{
    return(
        <div className="bg-gray-100">
            <br/>
        <div className="bg-white md:mx-[200px] px-[190px] shadow rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/003.webp"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-md font-bold">XY Coder</h2>
            <p className="text-sm text-gray-500">Software Engineer at js</p>
            <span className="text-xs text-gray-400">2 hrs ago</span>
          </div>
        </div>
        <p className="mb-4 text-gray-700">
          Excited to share that we’re working on something amazing at XYZ!
        </p>
        <img width={'700px'} 
          src="https://images.unsplash.com/file-1635990755334-4bfd90f37242image?w=416&dpr=2&auto=format&fit=crop&q=60"
          alt="Post"
          className="rounded-lg mb-4"
        />
        <div className="flex items-center justify-around text-gray-500">
          <button className="flex items-center space-x-1">
            <FiThumbsUp /> <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiMessageCircle /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiShare2 /> <span>Share</span>
          </button>
        </div>
      </div>






        <div className="bg-white md:mx-[200px] px-[190px] shadow rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-md font-bold">Aliyan Shah</h2>
            <p className="text-sm text-gray-500">Software Engineer Trainner</p>
            <span className="text-xs text-gray-400">5 hrs ago</span>
          </div>
        </div>
        <p className="mb-4 text-gray-700">
          Excited to share that we’re working on something amazing at XYZ!
        </p>
        <img width={'700px'}
          src="https://www.codesquadz.com/blog/wp-content/uploads/Top-20-Frontend-Developer-Interview-Questions-and-Answers.png"
          alt="Post"
          className="rounded-lg mb-4"
        />
        <div className="flex items-center justify-around text-gray-500">
          <button className="flex items-center space-x-1">
            <FiThumbsUp /> <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiMessageCircle /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiShare2 /> <span>Share</span>
          </button>
        </div>
      </div>
    






        <div className="bg-white md:mx-[200px] px-[190px] shadow rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-md font-bold">Aliyan Shah</h2>
            <p className="text-sm text-gray-500">Software Engineer Trainner</p>
            <span className="text-xs text-gray-400">5 hrs ago</span>
          </div>
        </div>
        <p className="mb-4 text-gray-700">
          Excited to share that we’re working on something amazing at XYZ!
        </p>
        <img width={'700px'}
          src="https://d2sofvawe08yqg.cloudfront.net/frontend-developer-interview-questions/s_hero2x?1620645022"
          alt="Post"
          className="rounded-lg mb-4"
        />
        <div className="flex items-center justify-around text-gray-500">
          <button className="flex items-center space-x-1">
            <FiThumbsUp /> <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiMessageCircle /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1">
            <FiShare2 /> <span>Share</span>
          </button>
        </div>
      </div>
      <h1 className="text-center my-10 font-light">Loading...</h1>
      <br />
      </div>
    )
}