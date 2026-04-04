
"use client";

import { useState } from "react";
import { BirthDetails, astrologyApi } from "../../lib/astrologyApi";

interface AstrologyToolFormProps {
  onSubmit: (details: BirthDetails) => void;
  title: string;
}

export default function AstrologyToolForm({ onSubmit, title }: AstrologyToolFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Get Geo Location
      const geoResult = await astrologyApi.getGeoLocation(formData.place);
      if (!geoResult.output || geoResult.output.length === 0) {
        throw new Error("Could not find location details.");
      }

      const location = geoResult.output[0];
      const birthDate = new Date(`${formData.date}T${formData.time}`);

      const details: BirthDetails = {
        year: birthDate.getFullYear(),
        month: birthDate.getMonth() + 1,
        date: birthDate.getDate(),
        hours: birthDate.getHours(),
        minutes: birthDate.getMinutes(),
        seconds: 0,
        latitude: location.latitude,
        longitude: location.longitude,
        timezone: location.timezone,
        settings: {
          observation_point: "topocentric",
          ayanamsha: "lahiri",
        },
      };

      onSubmit(details);
    } catch (error) {
      console.error("Error in form submission:", error);
      alert("Something went wrong. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="astrology-tool-form-container">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit} className="birth-form">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Date of Birth</span>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Time of Birth</span>
          <input
            type="time"
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          />
        </label>
        <label className="field">
          <span>Place of Birth</span>
          <input
            type="text"
            placeholder="City, State, Country"
            required
            value={formData.place}
            onChange={(e) => setFormData({ ...formData, place: e.target.value })}
          />
        </label>
        <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
          {loading ? "Calculating..." : "Generate Insights"}
        </button>
      </form>
    </div>
  );
}
