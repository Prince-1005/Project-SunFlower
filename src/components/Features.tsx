import Bentodemo from "./bentogrid"


export const Features = () => {
  return (

    <div className="bg-black text-white py-[72px] sm:py-24 ">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Everything You Need</h2>
        <div className='max-w-xl mx-auto'>
          <p className="text-center mt-5 text-xl text-white/70">
            Heart2Heart is your AI companion, offering a safe space for open conversations through text or voice. While not pre-trained in emotional intelligence, it provides thoughtful, engaging responses to support your well-being. Whether you seek comfort, clarity, or a friendly chat, Heart2Heart is always here to listen.</p>
        </div>

        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <Bentodemo />
        </div>

      </div>


    </div>
  )
}
