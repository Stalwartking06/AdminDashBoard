import { useState } from "react";
import axios from "axios";

function AddProduct() {
    const [p_id, setId] = useState('');
    const [pname, setName] = useState('');
    const [pdesc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [pimage, setFile] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const url = "http://localhost:3001/product";
        const formData = new FormData();
        formData.append('p_id', parseInt(p_id));
        formData.append('name', pname);
        formData.append('description', pdesc);
        formData.append('pimage', pimage);
        formData.append('price', price);
       
        try {
            const result = await axios.post(url, formData);
            console.log(result.data);
            alert('Success');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    return (
        <div>
            <center>
                <br />
                <input 
                    type="number" 
                    placeholder="Enter Id" 
                    onChange={(e) => setId(e.target.value)} 
                    value={p_id}
                /><br />
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={pname}
                /><br />
                <input 
                    type="number" 
                    placeholder="Enter Price" 
                    onChange={(e) => setPrice(e.target.value)} 
                    value={price}
                /><br />
                <input 
                    type="text" 
                    placeholder="Enter Desc" 
                    onChange={(e) => setDesc(e.target.value)} 
                    value={pdesc}
                /><br />
                <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])} 
                /><br />
                <button onClick={submitForm}>Submit</button>
            </center>
        </div>
    );
}

export default AddProduct;
