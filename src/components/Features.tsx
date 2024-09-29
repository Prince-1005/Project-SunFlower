import Bentodemo from './bentogrid';

export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">

      <div className="container">
      <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything You Need</h2>
<div className='max-w-xl mx-auto'>
  <p className="text-center mt-5 text-xl text-white/70">
    Experience the future of interactive AI with our advanced Conversational Image Recognition Chatbot. It effortlessly combines image recognition and natural conversation, allowing you to upload images and get instant answers to your questions. Whether it’s identifying objects, generating descriptions, or answering queries, our chatbot transforms the way you interact with visual content.</p>
</div>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
          

        </div>

      </div>


    </div>
  )
}
