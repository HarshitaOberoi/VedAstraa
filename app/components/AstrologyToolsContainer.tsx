
"use client";

import { useState } from "react";
import AstrologyToolForm from "./AstrologyToolForm";
import BirthChartResult from "./BirthChartResult";
import MatchMakingForm from "./MatchMakingForm";
import MatchMakingResult from "./MatchMakingResult";
import NumerologyResult from "./NumerologyResult";
import TarotResult from "./TarotResult";
import { BirthDetails, MatchDetails } from "../../lib/astrologyApi";

const astrologyTools = [
  { id: "birth-chart", name: "Birth Chart Calculator" },
  { id: "kundli-matching", name: "Kundli Matching" },
  { id: "numerology", name: "Numerology Calculator" },
  { id: "moon-sign", name: "Moon Sign Finder" },
  { id: "tarot", name: "Tarot Card Draw" },
];

export default function AstrologyToolsContainer() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [matchDetails, setMatchDetails] = useState<MatchDetails | null>(null);
  const [numerologyData, setNumerologyData] = useState<{ name: string; dob: string } | null>(null);

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId);
    setBirthDetails(null);
    setMatchDetails(null);
    setNumerologyData(null);
  };

  const handleFormSubmit = (details: BirthDetails) => {
    setBirthDetails(details);
  };

  const handleMatchSubmit = (details: MatchDetails) => {
    setMatchDetails(details);
  };

  const handleBack = () => {
    setBirthDetails(null);
    setMatchDetails(null);
    setNumerologyData(null);
    setSelectedTool(null);
  };

  const renderTool = () => {
    if (!selectedTool) {
      return (
        <div className="tools-grid">
          {astrologyTools.map((tool) => (
            <article 
              key={tool.id} 
              className="tool-card cursor-pointer" 
              onClick={() => handleToolSelect(tool.id)}
            >
              <div className="tool-icon" aria-hidden="true" />
              <h3>{tool.name}</h3>
            </article>
          ))}
        </div>
      );
    }

    if (selectedTool === "tarot") {
      return <TarotResult onBack={handleBack} />;
    }

    if (selectedTool === "kundli-matching") {
      if (matchDetails) {
        return <MatchMakingResult details={matchDetails} onBack={() => setMatchDetails(null)} />;
      }
      return <MatchMakingForm onSubmit={handleMatchSubmit} title="Kundli Matching" />;
    }

    if (selectedTool === "numerology") {
      if (numerologyData) {
        return <NumerologyResult name={numerologyData.name} dob={numerologyData.dob} onBack={() => setNumerologyData(null)} />;
      }
      return (
        <div className="astrology-tool-form-container">
          <h3>Numerology Calculator</h3>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              setNumerologyData({
                name: formData.get("name") as string,
                dob: formData.get("dob") as string,
              });
            }}
            className="birth-form"
          >
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your full name" />
            </label>
            <label className="field">
              <span>Date of Birth</span>
              <input type="date" name="dob" required />
            </label>
            <button type="submit" className="btn btn-primary form-submit">
              Calculate Numerology
            </button>
          </form>
        </div>
      );
    }

    if (birthDetails) {
      switch (selectedTool) {
        case "birth-chart":
          return <BirthChartResult details={birthDetails} onBack={() => setBirthDetails(null)} />;
        case "moon-sign":
          return <BirthChartResult details={birthDetails} onBack={() => setBirthDetails(null)} />;
        default:
          return (
            <div className="tool-placeholder">
              <h3>{astrologyTools.find(t => t.id === selectedTool)?.name}</h3>
              <p>Integration for this tool is coming soon.</p>
              <button onClick={handleBack} className="btn btn-secondary">Go Back</button>
            </div>
          );
      }
    }

    return (
      <AstrologyToolForm 
        onSubmit={handleFormSubmit} 
        title={astrologyTools.find(t => t.id === selectedTool)?.name || ""} 
      />
    );
  };

  return (
    <div className="astrology-tools-container">
      {renderTool()}
    </div>
  );
}
