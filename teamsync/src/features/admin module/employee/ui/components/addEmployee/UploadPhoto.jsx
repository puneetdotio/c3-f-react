import { Camera, Pencil } from 'lucide-react'
import React from 'react'

const UploadPhoto = () => {
  return (
      <div>
          <div>
              <Camera />
              <p>Upload Photo</p>
              <button><Pencil/></button>

          </div>
          <p>JPG or PNG. Max size of 800K.</p>
    </div>
  )
}

export default UploadPhoto