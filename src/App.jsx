import { useState } from 'react'

function App() {
  
  
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ?
        e.target.checked : e.target.value;
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: value,
    }));
  }

  function submitData(event) {
    event.preventDefault()
    
  }
  
  return (

    <>
      <h1>Post Form</h1>
      
    <form onSubmit={submitData}>
        <label htmlFor="author">author</label>
        <input id="author" type="text" name="author" value={formData.author} onChange={handleFormData} /> 
        <br />

        <label htmlFor="title">title</label>
        <input id="title" type="text" name="title" value={formData.title} onChange={handleFormData} />
        <br />

        <label htmlFor="body">body</label>
        <input id="body" type="text" name="body" value={formData.body} onChange={handleFormData} />
        <br />

        <label htmlFor="author">public</label>
        <input id="public" type="checkbox" name="public" checked={formData.public} onChange={handleFormData} /> <br />
        <button>submit</button>

      </form>
    </>

  )
}