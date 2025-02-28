import InstaIcon from '../assets/icons/insta.svg'
import XIcon from '../assets/icons/x-social.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'

import { FaLinkedin, FaGithub } from "react-icons/fa";

import Contributor1 from "../assets/images/Bhavya.jpg";
import Contributor2 from "../assets/images/Meera.jpg";
import Contributor3 from "../assets/images/Daksh.jpg";
import Contributor4 from "../assets/images/Pricne.jpg";
import { Linkedin } from 'lucide-react';

const contributors = [
  {
    name: "Bhavya Fattania",
    role: "AI/ML Developer",
    image: Contributor1.src, // ✅ Convert to string
    Linkedin: "https://www.linkedin.com/in/bhavya-fattania-637527285/",
    FaGithub: "https://github.com/BhavyaFattania"
  },
  {
    name: "Meera Mistry",
    role: "HR",
    image: Contributor2.src,
    Linkedin: "https://www.linkedin.com/in/meera-mistry-263339285/",
    FaGithub: "https://github.com/Meera1706"
  },
  {
    name: "Daksh Gorajiya",
    role: "Full stack Developer",
    image: Contributor3.src,
    Linkedin: "https://www.linkedin.com/in/dakshgorajiya",
    FaGithub: "https://github.com/DakshGorajiya"
  },
  {
    name: "Prince Jakhariya",
    role: "Project Manager",
    image: Contributor4.src,
    Linkedin: "https://www.linkedin.com/in/prince-jakhariya-442852283/",
    FaGithub: "https://github.com/Prince-1005"
  },
];

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container mx-auto px-5">

        {/* Contributors Section */}
        <div className="text-center mb-5">
          <h3 className="text-lg font-semibold text-white">Contributors</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {contributors.map((contributor, index) => (
              <div key={index} className="text-center">
                <img
                  src={contributor.image} // ✅ Now it's a string
                  alt={contributor.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto border border-white/30 mb-3"
                />
                <p className="font-semibold">{contributor.name}</p>
                <p className="text-sm text-white/70">{contributor.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-2">
                  <a
                    href={contributor.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={contributor.FaGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        <div className="text-center">Bhavya has rights are reserved</div>
        <ul className='flex justify-center gap-2.5'>
          <li><XIcon/></li>
          <li><LinkedInIcon/></li>
          <li><InstaIcon/></li>
          <li><YoutubeIcon/></li>
        </ul>
      </div>

    </div>
    </footer>
  )
};