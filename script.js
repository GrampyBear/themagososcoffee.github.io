<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Firebase Forum</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1rem;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        .post {
            border: 1px solid #ccc;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        .post h3 {
            margin: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Simple Firebase Forum</h1>
    </header>
    <div class="container">
        <h2>Add a New Post</h2>
        <form id="post-form">
            <input type="text" id="post-title" placeholder="Title" required><br>
            <textarea id="post-content" placeholder="Write your post here..." required></textarea><br>
            <button type="submit">Post</button>
        </form>
    </div>
    <div class="container" id="post-list">
        <h2>Posts</h2>
    </div>

    <script type="module">
        // Importar Firebase
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
        import { getFirestore, collection, addDoc, onSnapshot, orderBy, serverTimestamp, query } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

        // Configuración de Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyBuR9MChiZpqO7_gDxfnvwZRRVapTBZlR4",
            authDomain: "fotoweb-test.firebaseapp.com",
            projectId: "fotoweb-test",
            storageBucket: "fotoweb-test.appspot.com",
            messagingSenderId: "427026709329",
            appId: "1:427026709329:web:e1228b783c48836fa03170"
        };

        // Inicializar Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore();

        // Referencias a elementos del DOM
        const postForm = document.getElementById("post-form");
        const postTitle = document.getElementById("post-title");
        const postContent = document.getElementById("post-content");
        const postList = document.getElementById("post-list");

        // Manejar el envío del formulario
        postForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const title = postTitle.value;
            const content = postContent.value;
            if (title.trim() !== "" && content.trim() !== "") {
                try {
                    await addDoc(collection(db, "posts"), {
                        title,
                        content,
                        timestamp: serverTimestamp()
                    });
                    postTitle.value = "";
                    postContent.value = "";
                } catch (error) {
                    console.error("Error adding document: ", error);
                }
            }
        });

        // Mostrar las publicaciones en tiempo real
        onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                postList.innerHTML = "";
                snapshot.forEach((doc) => {
                    const post = doc.data();
                    const postElement = document.createElement("div");
                    postElement.classList.add("post");
                    postElement.innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                    `;
                    postList.appendChild(postElement);
                });
            }
        );
    </script>
</body>
</html>
