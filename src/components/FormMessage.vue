<template>
    <form @submit.prevent="createMessage">
        <textarea v-model="content" cols="30" rows="10" />
        <div>
             <input type="radio" id="public" value="public" v-model="privacy">
            <label for="public">Public</label>
        </div>
        <div>
            <input type="radio" id="private" value="private" v-model="privacy">
            <label for="private">Privé</label>
        </div>        
        <div>
            <button type="submit">Envoyer</button>
        </div>
    </form>
</template>

<script>

export default {
    data(){
        return {
            content: '',
            privacy: ''
        }
    },
    methods: {
        createMessage(){
            this.$store.commit('CREATE_MESSAGE', {
                body: {
                    content: this.content,
                    privacy: this.privacy
                }
            })
            this.content = ''
            this.privacy = ''
        }
    }
}
</script>
