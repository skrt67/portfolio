"use client";

import { useState } from 'react';

const mockMessages = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    message: "Bonjour, je suis intéressé par vos services de développement web. Pouvez-vous me contacter ?",
    date: "2024-01-15T10:30:00Z",
    status: "unread"
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie.martin@company.com",
    message: "Excellent portfolio ! J'aimerais discuter d'une collaboration pour notre projet e-commerce.",
    date: "2024-01-14T15:45:00Z",
    status: "read"
  },
  {
    id: 3,
    name: "Pierre Durand",
    email: "pierre.durand@startup.fr",
    message: "Votre projet MusicFlow est impressionnant. Seriez-vous disponible pour un entretien ?",
    date: "2024-01-13T09:15:00Z",
    status: "replied"
  }
];

export default function AdminMessages() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredMessages = messages.filter(msg => {
    if (filter === 'all') return true;
    return msg.status === filter;
  });

  const markAsRead = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, status: 'read' } : msg
    ));
  };

  const markAsReplied = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, status: 'replied' } : msg
    ));
  };

  const deleteMessage = (messageId) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      setMessages(messages.filter(msg => msg.id !== messageId));
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'unread': return 'Non lu';
      case 'read': return 'Lu';
      case 'replied': return 'Répondu';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages Reçus</h1>
          <p className="text-gray-600">Gérez les messages de contact</p>
        </div>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
          >
            <option value="all">Tous les messages</option>
            <option value="unread">Non lus</option>
            <option value="read">Lus</option>
            <option value="replied">Répondus</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des messages */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Messages ({filteredMessages.length})</h3>
            </div>
            <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (message.status === 'unread') {
                      markAsRead(message.id);
                    }
                  }}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedMessage?.id === message.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {message.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {message.email}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {formatDate(message.date)}
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                      {getStatusText(message.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {message.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Détail du message */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {selectedMessage.name}
                    </h3>
                    <p className="text-sm text-gray-500">{selectedMessage.email}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDate(selectedMessage.date)}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => markAsReplied(selectedMessage.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Marquer comme répondu
                    </button>
                    <button
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Message :</h4>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Répondre :</h4>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
                    rows="4"
                    placeholder="Tapez votre réponse ici..."
                  ></textarea>
                  <div className="mt-2 flex justify-end">
                    <button className="bg-[#16f2b3] text-white px-4 py-2 rounded hover:bg-[#14d4a3]">
                      Envoyer la réponse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-12 text-center">
              <p className="text-gray-500">Sélectionnez un message pour le lire</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
