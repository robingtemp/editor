<template>
    <div>
        <div class="toolbar">
            <button v-on:click="onSave()" class="save">Spara</button>
        </div>
        <quillEditor 
            v-model="content"
            ref="quillEditor"
            :options="editorOptions"
        />
    </div>
</template>

<script>
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
        content: '',
        editorOptions: {
            placeholder: 'Skriv nått här...',
            readOnly: false,
            theme: 'snow'
        }
    }),
    methods: {
        onSave() {
            console.log(this.content)
        }
    }
}
</script>

<style>
.ql-editor {
    height: 50vh;
}

.toolbar {
    border: 1px solid #ccc; 
    padding: 8px;
    margin-bottom: 8px;
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
</style>