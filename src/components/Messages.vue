<template>
    <div>
        <div 
            v-for='(message, $messageIndex) in messages'
            :key="$messageIndex"
            class="message"
        >
            <p>{{message.content}}</p>
            <span>{{message.privacy}}</span>
        </div>
    </div>    
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['messages']),
    }
}
</script>

<style scoped>
.message{
    border: 1px solid #777777;
    margin: 0 auto 10px;
    padding: 10px;
    max-width: 500px;
    border-radius: 8px;
}
</style>
