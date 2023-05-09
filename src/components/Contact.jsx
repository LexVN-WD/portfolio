import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const Container = tw.div`
scroll-smooth
min-h-[85vh]
w-[80vw]
flex
flex-row
justify-around
items-center
gap-40
order-5
mt-[15vh]
`;

const LeftSection = tw.div`
h-full
w-1/2
flex
flex-col
items-center
`;

const RightSection = tw.div`
h-full
w-1/2
flex
flex-col
items-center
justify-center
`;

const containerStyle = {
  width: '100%',
  height: '80%',
};

const center = {
  lat: 51.101,
  lng: -114.157,
};

export default function Contact() {

  const [map, setMap] = useState(null);

  const contactRef = useRef(null);
  const leftRef = useRef(null);

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;


  return (
    <Container id="contact">
      <LeftSection>
        <motion.div
          ref={leftRef}
          className="w-full h-full flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          variants={leftVariants}
          transition={{ duration: 0.6}}
        >
          <div className="my-8 ">
            <a href="https://github.com/LexVN-WD" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="mx-4">|</span>
            <a href="https://www.linkedin.com/in/lexvannugent/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <LoadScript
              googleMapsApiKey={apiKey}
            >
              <GoogleMap
                id='google-map-script'
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                className="w-full h-[80%]"
              />
            </LoadScript>
        </motion.div>
      </LeftSection>
      <RightSection>
        <motion.section
          ref={contactRef}
          className="w-full flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={contactVariants}
          transition={{ duration: 0.6}}
        >
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-name"
                  type="text"
                  placeholder="Name*"
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="Email*"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-message"
                  placeholder="Enter your message here*"
                  rows="6"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </motion.section>
      </RightSection>
    </Container>
  );
}