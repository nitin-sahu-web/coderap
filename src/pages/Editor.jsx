import { useState } from 'react';
import axios from 'axios'
function Editor() {
    const [code, setCode] = useState('')
    const [output, setOutput] = useState('')
    const handleSubmit = async () => {
        const payload = {
            language: "cpp",
            code
        }
        try {
            const { data } = await axios.post('http://localhost:5000/run', payload)
            setOutput(data.output)
        }
        catch (error) {
            console.log(error.response)
        }
    }
    return (
        <div className="text-white">
            <h1>Online Code Compiler</h1>
            <textarea rows="20" cols="85" value={code} onChange={(e) => { setCode(e.target.value) }} className='text-black'>
            </textarea>
            <br />
            <button onClick={handleSubmit} className='px-10 py-5 bg-blue-500'>submit</button>
            <p>{output}</p>
        </div>
    );
}

export default Editor;
