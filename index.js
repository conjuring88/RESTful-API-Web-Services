const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = [
    { "id": 1, "product": "Apple", "price": 1.25, "quantity": 10, "category": "Fruit" },
    { "id": 2, "product": "Orange", "price": 0.75, "quantity": 10, "category": "Fruit" },
    { "id": 3, "product": "Banana", "price": 0.75, "quantity": 10, "category": "Fruit" },
    { "id": 4, "product": "Carrot", "price": 0.50, "quantity": 10, "category": "Vegetable" },
    { "id": 5, "product": "Broccoli", "price": 0.75, "quantity": 10, "category": "Vegetable" },
    // { "id": 6, "product": "Cauliflower", "price": 1.00, "quantity": 10, "category": "Vegetable" },
    // { "id": 7, "product": "Milk", "price": 2.50, "quantity": 10, "category": "Dairy" },
    // { "id": 8, "product": "Cheese", "price": 3.00, "quantity": 10, "category": "Dairy" },
    // { "id": 9, "product": "Yogurt", "price": 1.50, "quantity": 10, "category": "Dairy" }
];

app.get('/products', (req, res) => {
    res.json(data);
}
);

app.post('/products', (req, res) => {
    const { product, price, quantity, category } = req.body;
    const id = data.length + 1;
    data.push({ id, product, price, quantity, category });
    res.redirect('/products');
}
);

app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { product, price, quantity, category } = req.body;
    const index = data.findIndex((element) => element.id === productId);
    data[index] = { id: productId, product, price, quantity, category };
    res.redirect('/products');
}
);

app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const index = data.findIndex((element) => element.id === productId);
    data.splice(index, 1);
    res.redirect('/products');
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);