import { useState, useEffect } from "react";
import axios from "axios";

function AddOrUpdateProduct() {
    const [p_id, setId] = useState('');
    const [name, setName] = useState('');
    const [pdesc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [pimage, setFile] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (p_id) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/product/${p_id}`);
                    const product = response.data;
                    setName(product.name);
                    setDesc(product.description);
                    setCategory(product.category);
                    setPrice(product.price);
                    setIsEditMode(true);
                } catch (error) {
                    console.error('Error fetching product:', error);
                    alert('Product not found');
                }
            };
            fetchProduct();
        }
    }, [p_id]);

    const submitForm = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const url = isEditMode ? `http://localhost:3001/product/${p_id}` : "http://localhost:3001/product";
        const method = isEditMode ? 'put' : 'post';
        const formData = new FormData();
        formData.append('p_id', parseInt(p_id));
        formData.append('name', name);
        formData.append('description', pdesc);
        formData.append('category', category);
        formData.append('price', price);
        if (pimage) {
            formData.append('pimage', pimage);
        }

        try {
            const result = await axios({
                method: method,
                url: url,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
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
                    placeholder="Enter Id to fetch and update" 
                    onChange={(e) => setId(e.target.value)} 
                    value={p_id}
                /><br />
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
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
                    type="text" 
                    placeholder="Enter Category" 
                    onChange={(e) => setCategory(e.target.value)} 
                    value={category}
                /><br />
                <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])} 
                /><br />
                <button onClick={submitForm}>{isEditMode ? 'Update' : 'Submit'}</button>
            </center>
        </div>
    );
}

export default AddOrUpdateProduct;
