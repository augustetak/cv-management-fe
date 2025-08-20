import React, { useState } from 'react';
import htmlDocx from 'html-docx-js';
import jsPDF from 'jspdf';
import { cvData, CVData } from './data/cvData';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const generateWord = () => {
    setLoading(true);
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            h1 { font-size: 24pt; }
            h2 { font-size: 18pt; }
            h3 { font-size: 14pt; }
            p, ul { font-size: 12pt; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 5px; }
          </style>
        </head>
        <body>
          <h1>${cvData.name}</h1>
          <h2>${cvData.title}</h2>
          <p><strong>Contact:</strong> ${cvData.contact.name} - ${cvData.contact.email} | ${cvData.contact.phone}</p>
          <p>${cvData.intro}</p>
          <h2>COMPÉTENCES</h2>
          <table>
            <tr><th>Catégorie</th><th>Compétences</th></tr>
            ${cvData.skills.map(skill => `
              <tr><td>${skill.category}</td><td>${skill.skills.join(", ")}</td></tr>
            `).join('')}
          </table>
          <h2>LANGUES</h2>
          <ul>${cvData.languages.map(l => `<li>${l.lang}</li>`).join('')}</ul>
          <h2>FORMATION</h2>
          <ul>${cvData.education.map(e => `<li>${e.year}: ${e.degree}, ${e.institution}</li>`).join('')}</ul>
          <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
          ${cvData.experiences.map(exp => `
            <h3>${exp.company}</h3>
            <p><strong>${exp.role}</strong> | ${exp.period}</p>
            <p>${exp.context}</p>
            <ul>${exp.actions.map(a => `<li>${a}</li>`).join('')}</ul>
            <p><strong>Environnement technique:</strong> ${exp.environment.join(", ")}</p>
          `).join('')}
        </body>
      </html>
    `;
    const converted = htmlDocx.asBlob(htmlContent);
    const url = URL.createObjectURL(converted);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Augustin_Tankam.docx';
    link.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  };

  const generatePDF = () => {
    setLoading(true);
    const doc = new jsPDF();
    let y = 10;

    const addText = (text: string, size: number = 12) => {
      doc.setFontSize(size);
      const lines = doc.splitTextToSize(text, 180);
      doc.text(lines, 10, y);
      y += 7 * lines.length;
      if (y > 280) {
        doc.addPage();
        y = 10;
      }
    };

    addText(cvData.name, 20);
    addText(cvData.title, 16);
    addText(`Contact: ${cvData.contact.name} - ${cvData.contact.email} | ${cvData.contact.phone}`);
    addText(cvData.intro);

    addText("COMPÉTENCES", 16);
    cvData.skills.forEach(skill => {
      addText(skill.category, 14);
      addText(skill.skills.join(", "));
    });

    addText("LANGUES", 16);
    cvData.languages.forEach(l => addText(l.lang));

    addText("FORMATION", 16);
    cvData.education.forEach(e => addText(`${e.year}: ${e.degree}, ${e.institution}`));

    addText("EXPÉRIENCE PROFESSIONNELLE", 16);
    cvData.experiences.forEach(exp => {
      addText(exp.company, 14);
      addText(`${exp.role} | ${exp.period}`);
      addText(exp.context);
      exp.actions.forEach(a => addText(`- ${a}`));
      addText(`Environnement technique: ${exp.environment.join(", ")}`);
    });

    doc.save('CV_Augustin_Tankam.pdf');
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{cvData.name}</h1>
      <h2 className="text-2xl">{cvData.title}</h2>
      <p><strong>Contact:</strong> {cvData.contact.name} - {cvData.contact.email} | {cvData.contact.phone}</p>
      <p>{cvData.intro}</p>

      <h2 className="text-2xl mt-4">COMPÉTENCES</h2>
      {cvData.skills.map((skill, i) => (
        <div key={i}>
          <h3 className="text-xl">{skill.category}</h3>
          <p>{skill.skills.join(", ")}</p>
        </div>
      ))}

      <h2 className="text-2xl mt-4">LANGUES</h2>
      <ul>
        {cvData.languages.map((l, i) => <li key={i}>{l.lang}</li>)}
      </ul>

      <h2 className="text-2xl mt-4">FORMATION</h2>
      <ul>
        {cvData.education.map((e, i) => <li key={i}>{e.year}: {e.degree}, {e.institution}</li>)}
      </ul>

      <h2 className="text-2xl mt-4">EXPÉRIENCE PROFESSIONNELLE</h2>
      {cvData.experiences.map((exp, i) => (
        <div key={i} className="mt-2">
          <h3 className="text-xl">{exp.company}</h3>
          <p><strong>{exp.role}</strong> | {exp.period}</p>
          <p>{exp.context}</p>
          <ul>
            {exp.actions.map((a, j) => <li key={j}>{a}</li>)}
          </ul>
          <p><strong>Environnement technique:</strong> {exp.environment.join(", ")}</p>
        </div>
      ))}

      <div className="mt-6">
        <button onClick={generateWord} disabled={loading} className="bg-blue-500 text-white p-2 mr-2">
          {loading ? 'Génération...' : 'Exporter en Word'}
        </button>
        <button onClick={generatePDF} disabled={loading} className="bg-green-500 text-white p-2">
          {loading ? 'Génération...' : 'Exporter en PDF'}
        </button>
      </div>
    </div>
  );
};

export default App;