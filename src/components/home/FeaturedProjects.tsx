
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Karachi Business Tower',
      category: 'Commercial',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      title: 'Clifton Residence Complex',
      category: 'Residential',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      title: 'DHA Phase 8 Bridge',
      category: 'Infrastructure',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-construction-red"></div>
          </div>
          <Link 
            to="/projects"
            className="mt-6 md:mt-0 group flex items-center text-construction-black hover:text-construction-red transition-colors duration-300"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              {/* Project Status Badge */}
              <div 
                className={`absolute top-4 left-4 px-3 py-1 rounded-full z-10 text-sm font-semibold
                  ${project.status === 'Completed' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-yellow-500 text-black'
                  }`}
              >
                {project.status}
              </div>
              
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link 
                  to={`/projects/${project.id}`}
                  className="bg-construction-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  View Project
                </Link>
              </div>
              
              {/* Project Info */}
              <div className="bg-white p-6">
                <span className="text-construction-red text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-construction-black font-medium hover:text-construction-red transition-colors duration-300 flex items-center"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
