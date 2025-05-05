
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Karachi Business Tower',
      category: 'Commercial',
      status: 'Completed',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Clifton Residence Complex',
      category: 'Residential',
      status: 'In Progress',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'DHA Phase 8 Bridge',
      category: 'Infrastructure',
      status: 'In Progress',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      title: 'Port Grand Shopping Mall',
      category: 'Commercial',
      status: 'Completed',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      title: 'Bahria Town Villas',
      category: 'Residential',
      status: 'Completed',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 6,
      title: 'Karachi-Hyderabad Motorway',
      category: 'Infrastructure',
      status: 'Completed',
      year: '2020',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        activeFilter === 'completed' 
          ? project.status === 'Completed' 
          : activeFilter === 'progress' 
            ? project.status === 'In Progress'
            : project.category.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Projects Header */}
        <section className="bg-construction-black py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our portfolio of innovative construction projects across Karachi and beyond.
            </p>
          </div>
        </section>
        
        {/* Projects Filters */}
        <section className="py-8 bg-construction-lightgray">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <FilterButton 
                active={activeFilter === 'all'} 
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </FilterButton>
              <FilterButton 
                active={activeFilter === 'completed'} 
                onClick={() => setActiveFilter('completed')}
              >
                Completed
              </FilterButton>
              <FilterButton 
                active={activeFilter === 'progress'} 
                onClick={() => setActiveFilter('progress')}
              >
                In Progress
              </FilterButton>
              <FilterButton 
                active={activeFilter === 'commercial'} 
                onClick={() => setActiveFilter('commercial')}
              >
                Commercial
              </FilterButton>
              <FilterButton 
                active={activeFilter === 'residential'} 
                onClick={() => setActiveFilter('residential')}
              >
                Residential
              </FilterButton>
              <FilterButton 
                active={activeFilter === 'infrastructure'} 
                onClick={() => setActiveFilter('infrastructure')}
              >
                Infrastructure
              </FilterButton>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Status Badge */}
                    <div 
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full z-10 text-sm font-semibold
                        ${project.status === 'Completed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-black'
                        }`}
                    >
                      {project.status}
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a 
                        href={`/projects/${project.id}`}
                        className="bg-construction-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-construction-red text-sm font-semibold">{project.category}</span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <a 
                      href={`/projects/${project.id}`}
                      className="text-construction-black font-medium hover:text-construction-red transition-colors duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold">No projects found</h3>
                <p className="mt-2 text-gray-500">Try selecting a different filter</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ active, onClick, children }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
      active 
        ? 'bg-construction-red text-white'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

export default Projects;
