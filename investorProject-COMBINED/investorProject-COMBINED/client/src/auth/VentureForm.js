import React from 'react'
const VentureForm = ({
  handleSubmit,
  phone,
  setPhone,
  orgName,
  setOrgName,
  website,
  setWebsite,
  legalStructure,
  setLegalStructure,
  yearOfInc,
  setYearofInc,
  projectName,
  setProjectName,
  projectDes,
  setProjectDes,
  amount,
  setAmount,
  securityType,
  setSecurityType,
  companySize,
  setComapnySize,
  numEmployees,
  setNumEmployees,
  taxId,
  setTaxId,
  raisingWhat,
  setRaisingWhat,
  equityTerms,
  setEquityTerms,
  intrestRate,
  setIntrestRate,

}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label">Phone Number</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Organization Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Organization Name"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Organization Website</label>
      <input
        type="text"
        className="form-control"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">What is your social venture legal structure?</label>
      <input
        type="text"
        className="form-control"
        placeholder="Legal Structure"
        value={legalStructure}
        onChange={(e) => setLegalStructure(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">What is the year your social venture was incorporated?</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Year"
        value={yearOfInc}
        onChange={(e) => setYearofInc(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">What is the name of your project or fund for which you are raising capital?</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
    </div><div className="form-group mb-3">
      <label className="form-label">Please describe your project or fund.</label>
      <textarea
        type="text"
        className="form-control"
        placeholder="Enter Description"
        value={projectDes}
        onChange={(e) => setProjectDes(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Organization/Company Size (Total Equity $)</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Size"
        value={companySize}
        onChange={(e) => setComapnySize(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">How many full-time employees do you currently have?</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Amount"
        value={numEmployees}
        onChange={(e) => setNumEmployees(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Tax ID number (if applicable) </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Tax ID"
        value={taxId}
        onChange={(e) => setTaxId(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Amount of Capital Needed</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">Are you raising debt, equity, or other? </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Answer"
        value={raisingWhat}
        onChange={(e) => setRaisingWhat(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">If equity, do you have any terms?</label>
      <textarea
        type="text"
        className="form-control"
        placeholder="Enter Answer"
        value={equityTerms}
        onChange={(e) => setEquityTerms(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label">If debt, what is the interest rate?</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Interest Rate"
        value={intrestRate}
        onChange={(e) => setIntrestRate(e.target.value)}
      />
    </div>


    <button disabled={!phone} className="btn btn-primary">
      Submit
    </button>
    
  </form>
);

export default VentureForm;
