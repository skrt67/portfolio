"use client";

import { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AdminProjects() {
  const { t } = useLanguage();
  const [projects, setProjects] = useState(projectsData);
  const [isEditing, setIsEditing] = useState(null);
  const [editingProject, setEditingProject] = useState({});

  const handleEdit = (project) => {
    setIsEditing(project.id);
    setEditingProject({ ...project });
  };

  const handleSave = () => {
    setProjects(projects.map(p => 
      p.id === editingProject.id ? editingProject : p
    ));
    setIsEditing(null);
    setEditingProject({});
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditingProject({});
  };

  const handleDelete = (projectId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Projets</h1>
          <p className="text-gray-600">Modifiez et gérez vos projets</p>
        </div>
        <button className="bg-[#16f2b3] text-white px-4 py-2 rounded-lg hover:bg-[#14d4a3] transition-colors">
          + Nouveau Projet
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Projet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Technologies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {isEditing === project.id ? (
                      <input
                        type="text"
                        value={editingProject.name}
                        onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {isEditing === project.id ? (
                      <textarea
                        value={editingProject.description}
                        onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
                        rows="3"
                      />
                    ) : (
                      <div className="text-sm text-gray-500 max-w-xs truncate">{project.description}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 3).map((tool, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {isEditing === project.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-900"
                        >
                          ✓ Sauvegarder
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          ✗ Annuler
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(project)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          ✏️ Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          🗑️ Supprimer
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
