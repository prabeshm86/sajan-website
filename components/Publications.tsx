import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications & Research
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic contributions to the field of traditional music preservation
          </p>
        </div>

        {/* Publications */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Publication */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FiFileText className="w-12 h-12 text-primary-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Preservation of Newari Music
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This research paper explores the historical significance of
                  Newari music, documenting traditional instruments, melodies,
                  and performance practices. It addresses the challenges faced in
                  preserving these musical traditions in contemporary society and
                  proposes strategies for their conservation and transmission to
                  future generations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Cultural Studies
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                    Ethnomusicology
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Heritage Conservation
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/papers/preservation-of-newari-music.pdf"
                    download
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
                  >
                    <FiDownload className="mr-2" />
                    Download PDF
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Read Online
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Research Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Traditional Instruments
              </h4>
              <p className="text-gray-600">
                Comprehensive documentation of traditional Newari musical
                instruments, their construction, and playing techniques.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Cultural Context
              </h4>
              <p className="text-gray-600">
                Analysis of the role of music in Newari festivals, ceremonies,
                and social gatherings throughout history.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Modern Adaptation
              </h4>
              <p className="text-gray-600">
                Exploring ways to integrate traditional Newari music with
                contemporary musical forms and education systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-colors">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Community Impact
              </h4>
              <p className="text-gray-600">
                Studying the impact of music preservation initiatives on
                community identity and cultural pride.
              </p>
            </div>
          </div>

          {/* Future Work */}
          <div className="bg-accent-50 rounded-lg p-6 border-l-4 border-accent-600">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Ongoing Research
            </h4>
            <p className="text-gray-700">
              Currently working on expanding this research through field studies,
              interviews with master musicians, and archival documentation of rare
              performances. Stay tuned for upcoming publications and presentations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
