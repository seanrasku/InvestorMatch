const InterestForm = () => (
    <form onSubmit={handleSubmit} className="mt-3">
      <div>
        
      </div>
      <button disabled={!name || !email || !password} className="btn btn-primary">
        Submit
      </button>
      
    </form>
  );
  
  export default InterestForm;
  