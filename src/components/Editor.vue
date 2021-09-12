<template>
    <div>
        <div class="message">{{ message }}</div>
        <div class="toolbar">
            <button v-on:click="onSave()" class="save">Spara nytt dokument</button>
            <button v-on:click="onUpdate()" class="save">Uppdatera dokument</button>
        </div>
        <quillEditor 
            v-model="content"
            ref="quillEditor"
            :options="editorOptions"
        />
        <h2>Ladda dokument</h2>
        <ul class="content">
            <li v-for="i in posts" :key="i._id" class="content-li">
                <button v-on:click="loadPost(i._id)" class="save">{{ i._id }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
// import { Button, Input, Select } from 'iview'

export default {
    name: 'Editor',
    components: {
        // Button,
        // Input,
        // Select,
        quillEditor
    },
    data: () => ({
        currentID: '',
        content: '',
        message: '',
        posts: {},
        editorOptions: {
            placeholder: 'Skriv nått här...',
            readOnly: false,
            theme: 'snow'
        }
    }),
    methods: {
        onSave() {
            const text = { text: this.content }
            axios
            .post('http://localhost:1337/post', text)
            .then(response => (this.message = response.data))
            .catch((err) => this.message = err)
        },
        onUpdate() {
            const text = { text: this.content }

            axios
            .patch('http://localhost:1337/update/' + this.currentID, text)
            .then(response => (this.message = response.data))
            .catch((err) => this.message = err)
        },
        loadPost(id) {
            this.currentID = id 
            axios
            .get('http://localhost:1337/get/' + id)
            .then(response => this.content = response.data.text)
        }
    },
    mounted () {
        axios
        .get('http://localhost:1337/get')
        .then(response => this.posts = response.data)
    }
}
</script>

<style>
.ql-editor {
    height: 30vh;
}

.toolbar {
    border: 1px solid #ccc; 
    padding: 8px;
    margin-bottom: 8px;
    display:flex;
    justify-content: space-between;
}

.save {
    border: 1px solid #ccc;
    padding: 8px 18px;
    background: none;
    transition: all 0.2s ease;
    cursor: pointer;
}

.save:hover {
    border: 1px solid #000;
}

.content {
    padding: 0;
}

.content li {
    list-style-type: none;
}
</style>