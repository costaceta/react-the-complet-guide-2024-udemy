import React from "react";

const UserInput = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label className="label">Initial Investment</label>
          <input
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
            value={userInput.initialInvestment}
            className="input"
            type="number"
            required
          />
        </p>

        <p>
          <label className="input">Anual Investment</label>
          <input
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
            value={userInput.annualInvestment}
            className="input"
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label className="label">Expected return</label>
          <input
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
            value={userInput.expectedReturn}
            className="input"
            type="number"
            required
          />
        </p>

        <p>
          <label className="label">Duration</label>
          <input
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
            value={userInput.duration}
            className="input"
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
