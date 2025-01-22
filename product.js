import {
  db,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "./Firebase-Product.js";

// Handle Form Submission
const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get Form Values
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const description = document.getElementById("description").value;
  

  try {
    // Add Product to Firestore
    const docRef = await addDoc(collection(db, "products"), {
      name: name,
      price: price,
      description: description,
      createdAt: serverTimestamp(),
    });
    alert(`Product added successfully! ID: ${docRef.id}`);
    productForm.reset();
    loadProducts(); // Reload products
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Error adding product: " + error.message);
  }
});

// Rest of the code remains unchanged...
loadProducts();

// Load Products from Firestore
async function loadProducts() {
  const productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = ""; // Clear the container before displaying new data

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((docSnapshot) => {
    const product = docSnapshot.data();
    const productCard = createProductCard(
      product.name,
      product.price,
      product.description,
      docSnapshot.id
    );
    productsContainer.appendChild(productCard);
  });
}

// Create Product Card
function createProductCard(name, price, description, docId) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const productName = document.createElement("h3");
  productName.textContent = name;
  card.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${price}JD`;
  card.appendChild(productPrice);

  const productDescription = document.createElement("p");
  productDescription.textContent = `Description: ${description}`;
  card.appendChild(productDescription);

  // Add Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  card.appendChild(deleteButton);

  // Add Update Button
  const updateButton = document.createElement("button");
  updateButton.textContent = "Update";
  card.appendChild(updateButton);

  // Delete Button Logic
  deleteButton.addEventListener("click", () => {
    deleteProduct(docId);
  });

  // Update Button Logic
  updateButton.addEventListener("click", () => {
    updateProduct(docId);
  });

  return card;
}

// Delete Product from Firestore
async function deleteProduct(docId) {
  try {
    const productDoc = doc(db, "products", docId);
    await deleteDoc(productDoc);
    alert("Product deleted successfully!");
    loadProducts();
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Error deleting product: " + error.message);
  }
}

// Update Product in Firestore
async function updateProduct(docId) {
  const newName = prompt("Enter new product name:");
  const newPrice = prompt("Enter new product price:");
  const newDescription = prompt("Enter new product description:");

  if (newName && newPrice && newDescription) {
    try {
      const productDoc = doc(db, "products", docId);
      await updateDoc(productDoc, {
        name: newName,
        price: parseFloat(newPrice),
        description: newDescription,
      });
      alert("Product updated successfully!");
      loadProducts();
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product: " + error.message);
    }
  }
}

loadProducts();
