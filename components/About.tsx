import { FiAward, FiBook, FiMusic } from "react-icons/fi";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Portfolio Picture */}
        <div className="flex justify-center mb-12 px-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 max-w-full">
            <div className="absolute inset-2 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl"></div>
            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace '/images/profile.jpg' with your actual photo path */}
              <Image
                src="/images/profilepic.JPG"
                alt="Sajan Maharjan - Musician and Researcher"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I&apos;m Sajan Maharjan, a passionate musician and researcher
              dedicated to preserving and promoting the beautiful traditions of
              Newari music. My journey in music began at an early age, and over
              the years, I have had the privilege of performing at various
              venues and cultural events.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond performing, I am deeply committed to academic research on
              traditional music. My published paper, &quot;Preservation of Newari
              Music,&quot; explores the cultural significance and challenges of
              maintaining these ancient musical traditions in the modern world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through my work, I aim to bridge the gap between tradition and
              modernity, ensuring that future generations can experience and
              appreciate the rich musical heritage of the Newari community.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-primary-50 rounded-lg">
              <div className="flex-shrink-0">
                <FiMusic className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Performer
                </h3>
                <p className="text-gray-600">
                  Regular performances at cultural events, festivals, and
                  concerts celebrating Newari musical traditions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-accent-50 rounded-lg">
              <div className="flex-shrink-0">
                <FiBook className="w-8 h-8 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Researcher
                </h3>
                <p className="text-gray-600">
                  Published academic research on the preservation and cultural
                  significance of traditional Newari music.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-primary-50 rounded-lg">
              <div className="flex-shrink-0">
                <FiAward className="w-8 h-8 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cultural Advocate
                </h3>
                <p className="text-gray-600">
                  Dedicated to educating and inspiring others about the
                  importance of preserving our musical heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
