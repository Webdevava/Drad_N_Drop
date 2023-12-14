import React, { useRef, useState } from 'react'

const DragNDrop = () => {
    const [files,setfiles] = useState(null)
    const inputRef = useRef()

    function handleDrag(e){
        e.preventDefault()
    }

    function handleDrop(e) {
        e.preventDefault();
        const droppedFiles = e.dataTransfer.files;
        setfiles(droppedFiles);
      }

    if(files){
        return (
            <div className="uploads">
            <ul>
            {Array.from(files).map((file,index)=> <li key={index}>{file.name}</li>)}
            </ul>
          
            <button onClick={()=>setfiles(null)}>Cancel</button>
            
            </div>
        )
    }

  return (
    <>
      {!files && (
        <div className='dropzone'
        onDragOver={handleDrag}
        onDrop={handleDrop}
        >
        <h1>Drag and Drop files to upload</h1>
        <input type="file" multiple id="file"
        onChange={e=>setfiles(e.target.files)}
        hidden
        ref={inputRef}
        />
        <button onClick={()=>inputRef.current.click()}>Select Files</button>
        </div>
      )}
    </>
  )
}

export default DragNDrop
