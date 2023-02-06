import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Page() {
  const [text, setText] = useState('')
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefalt('')
    setText('');
  }


  return (
    <div>
      <form action="">
        <input type="text" />
      </form>
    </div>
  )
}

export default Page